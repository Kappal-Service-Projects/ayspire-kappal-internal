import Link from "next/link";

import { Logo } from "./logo";

export default function HeroSection() {
  return (
    <section className="relative h-[55vh] w-full flex items-center justify-center bg-cover bg-center">
      <div className="absolute inset-0 bg-slate-200/20 z-10 flex flex-col items-center justify-center w-full">
        <div className="items-center pt-2 z-20 top-20">
          <Logo
            className="brightness-125 contrast-125"
            height={500}
            width={500}
          />
        </div>
        <div className="flex absolute mb-5 flex-col items-center justify-center gap-4 w-full px-2 md:px-0 text-center bottom-0 ">
          <h1 className="text-3xl md:text-2xl font-medium text-white drop-shadow-lg mt-0">
            All in for Clients, Partners and Team.
          </h1>
          <Link
            className="z-50 mt-2 inline-block rounded-full bg-primary/50 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            href="/contact"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
