import NextLink from "next/link";
import OptimizedImage from "@/components/ui/OptimizedImage";

export const Logo: React.FC<{
  className?: string;
  height?: number;
  width?: number;
}> = ({ className = "", height = 125, width = 125 }) => {
  return (
    <NextLink className="py-5" href="/">
      <OptimizedImage
        alt="Ayspire Inc - Digital Transformation Solutions"
        className={`mx-auto ${className}`.trim()}
        height={height}
        priority={true}
        src="/logo.png"
        width={width}
      />
    </NextLink>
  );
};
