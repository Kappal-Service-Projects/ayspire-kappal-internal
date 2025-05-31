import NextLink from "next/link";
import Image from "next/image";

export const Logo: React.FC<{
  className?: string;
  height?: number;
  width?: number;
}> = ({ className = "", height = 125, width = 125 }) => {
  return (
    <NextLink className="py-5" href="/">
      <Image
        alt="Ayspire Inc"
        className={`mx-auto ${className}`.trim()}
        height={height}
        src="/logo.png"
        width={width}
      />
    </NextLink>
  );
};
