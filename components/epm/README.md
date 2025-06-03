# EPM Components Documentation

This directory contains reusable components for the EPM (Enterprise Performance Management) solutions page. The components have been refactored to promote reusability, maintainability, and clean code architecture.

## Components Overview

### 1. EpmHeroSection
A hero section component with floating background elements for artistic effect.

**Usage:**
```tsx
import { EpmHeroSection } from "@/components/epm";

<EpmHeroSection />
```

### 2. EpmSolutionCard
An individual solution card component with gradient overlays, features list, and hover effects.

**Props:**
- `solution: EpmSolution` - The solution data object
- `index: number` - Index for staggered animations

**Usage:**
```tsx
import { EpmSolutionCard } from "@/components/epm";

<EpmSolutionCard solution={solutionData} index={0} />
```

### 3. AdvancedEpmSection
A section containing a grid of EPM solution cards with tech pattern background.

**Props:**
- `solutions: EpmSolution[]` - Array of solution data

**Usage:**
```tsx
import { AdvancedEpmSection } from "@/components/epm";

<AdvancedEpmSection solutions={solutionsArray} />
```

### 4. EpmValueProposition
A section displaying the value proposition with chips for key features.

**Usage:**
```tsx
import { EpmValueProposition } from "@/components/epm";

<EpmValueProposition />
```

### 5. EpmCapabilities
A grid section showcasing EPM capabilities with image cards.

**Props:**
- `capabilities: EpmCapability[]` - Array of capability data

**Usage:**
```tsx
import { EpmCapabilities } from "@/components/epm";

<EpmCapabilities capabilities={capabilitiesArray} />
```

### 6. WhyAyspireSection
A section highlighting why to choose Ayspire, with customizable points and Oracle partner logo.

**Props:**
- `points?: WhyAyspirePoint[]` - Optional custom points (uses defaults if not provided)

**Usage:**
```tsx
import { WhyAyspireSection } from "@/components/epm";

<WhyAyspireSection />
// or with custom points
<WhyAyspireSection points={customPoints} />
```

### 7. EpmCallToAction
A call-to-action section with customizable content.

**Props:**
- `title?: string` - Optional custom title
- `description?: string` - Optional custom description
- `buttonText?: string` - Optional custom button text
- `buttonHref?: string` - Optional custom button link

**Usage:**
```tsx
import { EpmCallToAction } from "@/components/epm";

<EpmCallToAction />
// or with custom content
<EpmCallToAction 
  title="Custom Title"
  description="Custom description"
  buttonText="Custom Button"
  buttonHref="/custom-link"
/>
```

## Custom Hook

### useScrollReveal
A custom hook that provides scroll reveal functionality for animations.

**Usage:**
```tsx
import { useScrollReveal } from "@/components/epm";

function MyComponent() {
  useScrollReveal();
  
  return (
    <div className="scroll-reveal-left">
      Content that will animate on scroll
    </div>
  );
}
```

## Data Types

### EpmSolution
```tsx
interface EpmSolution {
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
  gradient: string;
}
```

### EpmCapability
```tsx
interface EpmCapability {
  title: string;
  description: string;
  imageUrl: string;
}
```

## Import Usage

You can import all components from the main index file:

```tsx
import {
  EpmHeroSection,
  AdvancedEpmSection,
  EpmValueProposition,
  EpmCapabilities,
  WhyAyspireSection,
  EpmCallToAction,
  useScrollReveal,
  newEpmSolutions,
} from "@/components/epm";
```

## Styling

All components use Tailwind CSS classes and follow the established design system:
- Consistent color schemes with primary/secondary gradients
- Dark mode support
- Responsive design patterns
- Hover and focus states
- Animation effects with proper performance optimizations

## Performance Considerations

- Components are client-side rendered where needed for animations
- Scroll reveal animations are optimized with Intersection Observer
- Mobile performance optimizations are applied through CSS media queries
- Components are modular and tree-shakeable
