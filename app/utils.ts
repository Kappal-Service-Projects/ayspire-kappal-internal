import fs from "fs";
import path from "path";

export type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  location: string;
  jobLocationType: string;
  countryCode: string;
  currencyCode: string;
  experience: string;
  jobId: string;
  salary: string;
  type: string;
  active?: string;
};

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();

    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: any) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  let parsedData = parseFrontmatter(rawContent);

  return parsedData;
}

function getMDXData(dir: any) {
  try {
    if (!fs.existsSync(dir)) {
      return [];
    }
    
    let mdxFiles = getMDXFiles(dir);
    
    if (mdxFiles.length === 0) {
      return [];
    }

    return mdxFiles.map((file) => {
      try {
        let { metadata, content } = readMDXFile(path.join(dir, file));
        let slug = path.basename(file, path.extname(file));

        return {
          metadata,
          slug,
          content,
        };
      } catch (fileError) {
        // Skip problematic files and continue
        return null;
      }
    }).filter(Boolean);
  } catch (error) {
    return [];
  }
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "app", "blog", "posts"));
}

export function getCareerListings() {
  try {
    let careerListingsPath = path.join(process.cwd(), "app", "careers", "listings");
    
    // Check if the directory exists
    if (!fs.existsSync(careerListingsPath)) {
      return [];
    }

    let allJobs = getMDXData(careerListingsPath);
    
    if (allJobs.length === 0) {
      return [];
    }

    // Filter only active jobs
    return allJobs.filter((job) => job.metadata.active?.toLowerCase() === "true");
  } catch (error) {
    return [];
  }
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date();

  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
