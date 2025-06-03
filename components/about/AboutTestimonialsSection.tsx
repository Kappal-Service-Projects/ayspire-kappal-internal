import Image from "next/image";

import { SectionHeader } from "@/components/ui/SectionHeader";

interface Testimonial {
  quote: string;
  author: string;
  avatar: string;
}

interface AboutTestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function AboutTestimonialsSection({
  testimonials,
}: AboutTestimonialsSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionHeader
            className="text-center mb-6"
            gradientText="Testimonials"
            primaryText="Client"
            size="lg"
          />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear what our clients have to say about their experience working
            with Ayspire
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-24">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative group">
              {/* User Icon - Half extruded with semicircle padding */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-300 group-hover:-translate-y-2">
                <div className="relative">
                  {/* Semicircle padding aligned with card top edge */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-10 bg-white dark:bg-gray-800 rounded-b-full border-l border-r border-b border-gray-200 dark:border-gray-600 z-30" />
                  {/* User Avatar Circle - positioned on top of semicircle */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-700 p-1 shadow-xl z-50">
                    <Image
                      alt={testimonial.author}
                      className="w-full h-full rounded-full object-cover"
                      height={64}
                      src={testimonial.avatar}
                      width={64}
                    />
                  </div>
                </div>
              </div>

              {/* Testimonial Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 pt-16 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 relative mt-0 z-0 h-64 flex flex-col">
                <div className="text-center flex flex-col flex-grow">
                  <blockquote className="text-lg text-gray-700 dark:text-gray-300 font-medium italic leading-relaxed flex-grow flex items-center justify-center">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <cite className="text-primary-600 dark:text-primary-400 font-semibold text-lg mt-6">
                    {testimonial.author}
                  </cite>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
