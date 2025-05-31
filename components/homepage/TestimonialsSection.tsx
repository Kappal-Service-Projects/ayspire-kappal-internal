import Image from "next/image";

interface Testimonial {
  quote: string;
  author: string;
  avatar: string;
}

export default function TestimonialsSection({
  testimonials,
  sectionRef,
  visible,
}: {
  testimonials: Testimonial[];
  sectionRef: React.RefObject<HTMLElement>;
  visible: boolean;
}) {
  return (
    <section
      ref={sectionRef}
      className={`py-16 px-4 sm:px-6 bg-white dark:bg-slate-950 transition-opacity duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">
        Testimonials
      </h2>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="relative flex flex-col items-center text-center min-h-[320px] h-full flex-1"
          >
            <Image
              alt={t.author}
              className="rounded-full mb-4 border-4 border-primary/20 shadow w-16 h-16 object-cover z-10"
              height={64}
              src={t.avatar}
              width={64}
            />
            <div className="relative bg-white/90 dark:bg-slate-900/80 border border-gray-200 dark:border-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center w-full mt-[-2rem] pt-10 h-full">
              <blockquote className="italic text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-4 font-medium leading-relaxed">
                “{t.quote}”
              </blockquote>
              <span className="text-primary font-semibold text-base md:text-sm mt-auto pt-2">
                {t.author}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
