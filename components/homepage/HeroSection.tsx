import Link from "next/link";
import { useEffect, useState } from "react";

import { Logo } from "./logo";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices for performance optimization
    const checkIsMobile = () => {
      setIsMobile(
        window.innerWidth <= 768 ||
          /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent,
          ),
      );
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile, { passive: true });

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <section className="relative min-h-screen pt-20 md:pt-24 lg:pt-28 flex items-center overflow-hidden bg-gradient-to-br from-sky-600/10 via-sky-800/10 to-sky-500/10  text-white">
      <div className="absolute inset-0 tech-pattern" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24 lg:py-32 z-20 pointer-events-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" data-aos-duration="1000">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-center lg:text-left">
              <span className="bg-gradient-to-r from-primary-300 to-primary-500 bg-clip-text text-transparent">
                Accelarate
              </span>
              <br />
              <span className="text-gray-100">To Elevate</span>
              <br />
              {/* <span className="text-gray-100">Elevate</span> */}
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed text-center lg:text-left">
              Empowering enterprises through connected planning, advanced
              analytics and purposeful innovation to thrive in the AI and
              digital era.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-600 transition-all duration-300 pulse-border group focus-outline"
                href="/contact"
              >
                Contact Us
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
              <Link
                className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 focus-outline"
                href="#services"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div
            className="relative hidden md:block"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="floating-element">
              <Logo
                className="w-full h-auto max-w-md mx-auto filter brightness-110 contrast-125"
                height={500}
                width={500}
              />
            </div>
            {/* <div
              className="absolute top-0 right-0 w-40 h-40 rounded-full bg-gradient-to-r from-cyan-700 to-teal-300 opacity-30 floating-element"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute -bottom-10 -left-10 w-20 h-20 rounded-full bg-gradient-to-r from-teal-700 to-cyan-500 opacity-30 floating-element"
              style={{ animationDelay: "2s" }}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
