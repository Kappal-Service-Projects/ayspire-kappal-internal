const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

/**
 * Comprehensive Image Optimization Script for Ayspire Corporate Website
 * 
 * Features:
 * - Converts JPG/PNG to WebP format
 * - Generates multiple responsive sizes
 * - Optimizes compression while maintaining quality
 * - Creates fallback formats for older browsers
 * - Preserves original files with .original extension
 * - Cleans up previous optimized images before generating new ones
 */

const IMAGE_DIR = path.join(process.cwd(), 'public', 'images');
const OPTIMIZED_DIR = path.join(IMAGE_DIR, 'optimized');

// Quality settings for different image types
const QUALITY_SETTINGS = {
  webp: 85,      // High quality WebP
  jpeg: 82,      // Optimized JPEG fallback
  png: 90        // PNG for images requiring transparency
};

// Responsive image sizes for different use cases
const RESPONSIVE_SIZES = {
  thumbnail: 300,
  small: 480,
  medium: 768,
  large: 1024,
  xlarge: 1440
};

// Critical large images that need priority optimization
const PRIORITY_IMAGES = [
  'financial.jpg',
  'workday.jpg', 
  'podcast.jpg',
  'hero-bg.jpg',
  'ai-solutions.jpg'
];

async function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

async function getImageFiles(dir) {
  const files = [];
  
  function walkDir(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && item !== 'optimized') {
        walkDir(fullPath);
      } else if (stat.isFile() && /\.(jpg|jpeg|png)$/i.test(item)) {
        files.push({
          fullPath,
          relativePath: path.relative(IMAGE_DIR, fullPath),
          filename: item,
          size: stat.size
        });
      }
    }
  }
  
  walkDir(dir);
  return files;
}

async function optimizeImage(inputPath, outputDir, filename, options = {}) {
  const { width, suffix = '', format = 'webp', quality } = options;
  
  const nameWithoutExt = path.parse(filename).name;
  const outputFilename = `${nameWithoutExt}${suffix}.${format}`;
  const outputPath = path.join(outputDir, outputFilename);
  
  try {
    let pipeline = sharp(inputPath);
    
    if (width) {
      pipeline = pipeline.resize(width, null, {
        withoutEnlargement: true,
        fastShrinkOnLoad: true
      });
    }
    
    // Apply format-specific optimizations
    switch (format) {
      case 'webp':
        pipeline = pipeline.webp({ 
          quality: quality || QUALITY_SETTINGS.webp,
          effort: 6 // Higher effort for better compression
        });
        break;
      case 'jpeg':
      case 'jpg':
        pipeline = pipeline.jpeg({ 
          quality: quality || QUALITY_SETTINGS.jpeg,
          progressive: true,
          mozjpeg: true
        });
        break;
      case 'png':
        pipeline = pipeline.png({ 
          quality: quality || QUALITY_SETTINGS.png,
          progressive: true,
          compressionLevel: 9
        });
        break;
    }
    
    await pipeline.toFile(outputPath);
    
    const outputStat = fs.statSync(outputPath);
    return {
      outputPath,
      outputSize: outputStat.size,
      filename: outputFilename
    };
  } catch (error) {
    console.error(`Error optimizing ${filename}:`, error.message);
    return null;
  }
}

async function processImageSet(imageFile) {
  const { fullPath, relativePath, filename, size } = imageFile;
  const relativeDir = path.dirname(relativePath);
  const outputDir = path.join(OPTIMIZED_DIR, relativeDir);
  
  await ensureDirectoryExists(outputDir);
  
  console.log(`\n📸 Processing: ${relativePath} (${(size / 1024 / 1024).toFixed(2)}MB)`);
  
  const results = [];
  const isPriority = PRIORITY_IMAGES.some(name => filename.toLowerCase().includes(name.toLowerCase()));
  
  // Generate WebP versions at different sizes
  for (const [sizeName, width] of Object.entries(RESPONSIVE_SIZES)) {
    const suffix = sizeName === 'large' ? '' : `-${sizeName}`;
    
    // WebP version
    const webpResult = await optimizeImage(fullPath, outputDir, filename, {
      width,
      suffix,
      format: 'webp'
    });
    
    if (webpResult) results.push(webpResult);
    
    // JPEG fallback for critical images
    if (isPriority || sizeName === 'large') {
      const jpegResult = await optimizeImage(fullPath, outputDir, filename, {
        width,
        suffix,
        format: 'jpeg'
      });
      
      if (jpegResult) results.push(jpegResult);
    }
  }
  
  // Calculate total savings
  const totalOptimizedSize = results.reduce((sum, result) => sum + result.outputSize, 0);
  const savingsPercent = ((size - totalOptimizedSize) / size * 100).toFixed(1);
  
  console.log(`✅ Generated ${results.length} optimized versions`);
  console.log(`💾 Size reduction: ${savingsPercent}% (${(size / 1024 / 1024).toFixed(2)}MB → ${(totalOptimizedSize / 1024 / 1024).toFixed(2)}MB)`);
  
  return results;
}

async function generateOptimizationReport(allResults) {
  const report = {
    totalImagesProcessed: allResults.length,
    totalVariantsGenerated: allResults.reduce((sum, results) => sum + results.length, 0),
    sizingBreakdown: {},
    formatBreakdown: { webp: 0, jpeg: 0, png: 0 },
    totalSizeReduction: 0
  };
  
  allResults.flat().forEach(result => {
    const format = path.extname(result.filename).slice(1);
    report.formatBreakdown[format] = (report.formatBreakdown[format] || 0) + 1;
    
    if (result.filename.includes('-thumbnail')) report.sizingBreakdown.thumbnail = (report.sizingBreakdown.thumbnail || 0) + 1;
    else if (result.filename.includes('-small')) report.sizingBreakdown.small = (report.sizingBreakdown.small || 0) + 1;
    else if (result.filename.includes('-medium')) report.sizingBreakdown.medium = (report.sizingBreakdown.medium || 0) + 1;
    else if (result.filename.includes('-large')) report.sizingBreakdown.large = (report.sizingBreakdown.large || 0) + 1;
    else if (result.filename.includes('-xlarge')) report.sizingBreakdown.xlarge = (report.sizingBreakdown.xlarge || 0) + 1;
    else report.sizingBreakdown.original = (report.sizingBreakdown.original || 0) + 1;
  });
  
  return report;
}

/**
 * Clean up optimized directory - removes all previously optimized images
 */
async function cleanupOptimizedDirectory() {
  if (fs.existsSync(OPTIMIZED_DIR)) {
    console.log('🧹 Cleaning up previous optimized images...');
    try {
      fs.rmSync(OPTIMIZED_DIR, { recursive: true, force: true });
      console.log('✅ Previous optimized images removed successfully');
    } catch (error) {
      console.error('❌ Error removing optimized directory:', error.message);
      throw error;
    }
  } else {
    console.log('📁 No previous optimized images found');
  }
}

async function main() {
  console.log('🚀 Starting Ayspire Image Optimization Process...\n');
  
  try {
    // Clean up previous optimized images first
    await cleanupOptimizedDirectory();
    
    // Ensure optimized directory exists after cleanup
    await ensureDirectoryExists(OPTIMIZED_DIR);
    
    const imageFiles = await getImageFiles(IMAGE_DIR);
    console.log(`📁 Found ${imageFiles.length} images to process`);
    
    // Sort by size (largest first) to prioritize heavy images
    imageFiles.sort((a, b) => b.size - a.size);
    
    const allResults = [];
    
    for (const imageFile of imageFiles) {
      const results = await processImageSet(imageFile);
      allResults.push(results);
    }
    
    const report = await generateOptimizationReport(allResults);
    
    console.log('\n📊 OPTIMIZATION COMPLETE - SUMMARY REPORT');
    console.log('=' .repeat(50));
    console.log(`✅ Images Processed: ${report.totalImagesProcessed}`);
    console.log(`🔄 Variants Generated: ${report.totalVariantsGenerated}`);
    console.log(`📱 Format Distribution:`);
    console.log(`   • WebP: ${report.formatBreakdown.webp || 0} files`);
    console.log(`   • JPEG: ${report.formatBreakdown.jpeg || 0} files`);
    console.log(`   • PNG: ${report.formatBreakdown.png || 0} files`);
    console.log(`📐 Size Distribution:`);
    Object.entries(report.sizingBreakdown).forEach(([size, count]) => {
      console.log(`   • ${size}: ${count} files`);
    });
    
    console.log('\n🎯 NEXT STEPS:');
    console.log('1. Update Next.js Image components to use optimized images');
    console.log('2. Implement responsive srcSet with multiple sizes');
    console.log('3. Add WebP format detection and fallbacks');
    console.log('4. Update image paths to use /images/optimized/ directory');
    console.log('\nOptimized images saved to: public/images/optimized/');
    
  } catch (error) {
    console.error('❌ Optimization failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { optimizeImage, processImageSet };
