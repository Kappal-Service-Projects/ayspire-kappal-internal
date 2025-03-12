import NextLink from "next/link";
import Image from "next/image";

export const Logo: React.FC = () => {
  return (
    <NextLink className="flex justify-start items-center gap-1" href="/">
      <Image alt="Ayspire Inc" height={40} src="/logo.svg" width={40} />
      {/* <Logo className="text-primary" /> */}
      <p className="font-bold text-inherit text-xl text-primary">Ayspire Inc</p>
    </NextLink>
  );
};
