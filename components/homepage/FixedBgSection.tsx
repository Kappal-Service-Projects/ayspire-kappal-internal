import Link from "next/link";

import { SectionHeader } from "@/components/ui/SectionHeader";

export default function FixedBgSection({
  sectionRef,
  visible: _visible,
}: {
  sectionRef: React.RefObject<HTMLElement>;
  visible: boolean;
}) {
  // Modern device detection available if needed in future
  // const isMobile = useIsMobile();

  return (
    <section
      ref={sectionRef}
      className={`relative h-[60vh] w-full flex items-center justify-center md:bg-fixed bg-cover bg-center `}
      style={
        // isMobile
        {
          backgroundImage: `url(/images/optimized/background/hero-video-bg.webp)`,
        }
        //   : {}
      }
    >
      {/* Video background for desktop */}
      {/* {!isMobile && (
        <video
          autoPlay
          loop
          muted
          playsInline
                  className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )} */}

      <div className="absolute inset-0 bg-blue-100/10 z-10 flex flex-col items-center justify-center gap-6">
        <SectionHeader
          className="text-white drop-shadow-lg brightness-125 mx-5"
          gradientText="Digital Transformation"
          primaryText="Accelerate Your"
          size="lg"
        />
        <Link
          className="z-50 inline-block rounded-full bg-primary px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          href="/contact"
        >
          Partner with Us
        </Link>
      </div>
    </section>
  );
}
