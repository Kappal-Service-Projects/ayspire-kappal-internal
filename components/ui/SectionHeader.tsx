import React from "react";

import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  /**
   * The text that will appear with primary color styling (e.g., "Our" in "Our Services")
   */
  primaryText: string;

  /**
   * The text that will appear with gradient styling (e.g., "Services" in "Our Services")
   */
  gradientText: string;

  /**
   * Size variant for the header
   */
  size?: "sm" | "md" | "lg" | "xl";

  /**
   * Font weight variant
   */
  weight?: "semibold" | "bold";

  /**
   * Bottom margin variant
   */
  marginBottom?: "sm" | "md" | "lg";

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Whether to include scroll reveal animation
   */
  animated?: boolean;

  /**
   * Whether to include gradient animation
   */
  gradientAnimation?: boolean;

  /**
   * Gradient text variant
   */
  gradientVariant?: "gradient" | "blue" | "primary";

  /**
   * Whether to include tracking (letter spacing)
   */
  tracking?: boolean;

  /**
   * ID for the heading element (for accessibility)
   */
  id?: string;

  /**
   * HTML heading level (h1, h2, h3, etc.)
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  /**
   * React ref for the element
   */
  ref?: React.RefObject<HTMLHeadingElement>;
}

const sizeVariants = {
  sm: "text-xl lg:text-2xl xl:text-3xl",
  md: "text-2xl lg:text-3xl xl:text-4xl",
  lg: "text-3xl lg:text-4xl xl:text-5xl",
  xl: "text-4xl lg:text-5xl xl:text-6xl",
};

const weightVariants = {
  semibold: "font-semibold",
  bold: "font-bold",
};

const marginVariants = {
  sm: "mb-4",
  md: "mb-6",
  lg: "mb-8",
};

const gradientVariants = {
  gradient:
    "bg-gradient-to-r from-primary-600 via-primary-500 to-secondary bg-clip-text text-transparent",
  blue: "text-blue-400",
  primary: "text-primary",
};

/**
 * SectionHeader - A reusable component for consistent section headers across the application
 *
 * Features:
 * - Responsive typography scaling
 * - Primary + gradient text styling pattern
 * - Optional animations and effects
 * - Consistent dark mode support
 * - Accessibility support
 *
 * @example
 * <SectionHeader
 *   primaryText="Our"
 *   gradientText="Services"
 *   size="lg"
 *   animated
 *   gradientAnimation
 * />
 */
export const SectionHeader = React.forwardRef<
  HTMLHeadingElement,
  SectionHeaderProps
>(
  (
    {
      primaryText,
      gradientText,
      size = "lg",
      weight = "semibold",
      marginBottom = "lg",
      className,
      animated = false,
      gradientAnimation = false,
      gradientVariant = "gradient",
      tracking = true,
      id,
      as: Component = "h2",
    },
    ref,
  ) => {
    const baseClasses = cn(
      "font-display",
      sizeVariants[size],
      weightVariants[weight],
      marginVariants[marginBottom],
      "text-gray-900 dark:text-white",
      tracking && "tracking-tight",
      animated && "transition-all duration-700",
      className,
    );

    const primaryTextClasses = "text-primary-600 dark:text-primary-400";

    const gradientTextClasses = cn(
      gradientVariants[gradientVariant],
      gradientAnimation &&
        gradientVariant === "gradient" &&
        "bg-[length:200%_auto] animate-gradient-shift",
    );

    return (
      <Component ref={ref} className={baseClasses} id={id}>
        <span className={primaryTextClasses}>
          {primaryText}
          {primaryText && " "}
        </span>
        <span className={gradientTextClasses}>{gradientText}</span>
      </Component>
    );
  },
);

SectionHeader.displayName = "SectionHeader";

export default SectionHeader;
