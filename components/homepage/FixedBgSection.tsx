import Link from "next/link";

export default function FixedBgSection({
  sectionRef,
  visible,
}: {
  sectionRef: React.RefObject<HTMLElement>;
  visible: boolean;
}) {
  return (
    <section
      ref={sectionRef}
      className={`relative h-[60vh] w-full flex items-center justify-center md:bg-fixed bg-cover bg-center transition-opacity duration-700 ${visible ? "opacity-80 translate-y-0" : "opacity-80 translate-y-8"}`}
      style={{ backgroundImage: `url(/images/background.jpg)` }}
    >
      <div className="absolute inset-0 bg-blue-100/10 z-10 flex flex-col items-center justify-center gap-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
          Accelerate Your Digital Transformation
        </h2>
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
