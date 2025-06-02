import Image from "next/image";

export default function TestimonialsSection({
  sectionRef,
  testimonials,
  visible,
}: {
  sectionRef: React.RefObject<HTMLElement>;
  testimonials: { quote: string; name: string; avatar: string }[];
  visible: boolean;
}) {
  return (
    <section ref={sectionRef} className={`py-20 bg-gray-50`} id="testimonials">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start space-x-4">
                <Image
                  alt={t.name}
                  className="w-16 h-16 rounded-full"
                  height={64}
                  src={t.avatar}
                  width={64}
                />
                <div>
                  <blockquote className="text-xl text-gray-700 font-medium mb-4 italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <cite className="text-blue-600 font-semibold">{t.name}</cite>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
