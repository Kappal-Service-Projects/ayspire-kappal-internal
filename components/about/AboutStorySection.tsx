"use client";

import React from "react";

import SectionHeader from "../ui/SectionHeader";
import { ContentImage } from "@/components/ui/OptimizedImage";

export const AboutStorySection: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden bg-white py-20 px-4 sm:px-6 lg:px-8 dark:bg-slate-900"
      id="story"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="reveal-element">
            <SectionHeader
              className={`transition-all duration-700`}
              gradientAnimation={true}
              gradientText="Story"
              primaryText="Our"
              size="md"
            />
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between complex business
                challenges and innovative technological solutions, Ayspire
                emerged from the understanding that today&apos;s organizations
                need more than just software—they need strategic partners.
              </p>
              <p>
                Born in Canada and now serving clients globally, we&apos;ve
                built our reputation on delivering high-value industry solutions
                through connected planning and analytics. Our journey began with
                a simple belief: when you bring data, people, and plans
                together, extraordinary things happen.
              </p>
              <p>
                Today, we stand as a trusted partner to organizations across
                various industries, helping them navigate digital transformation
                with confidence and achieve sustainable growth through
                purposeful innovation.
              </p>
            </div>
          </div>

          {/* Visual Side */}
          <div className="reveal-element lg:order-first">
            <div className="relative">
              <ContentImage
                alt="Ayspire team collaboration - Our story of innovation and growth"
                className="rounded-2xl shadow-2xl object-cover"
                height={500}
                src="/images/about/story-hero.jpg"
                width={700}
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-primary-500 to-secondary rounded-full opacity-80 floating-element" />
              <div
                className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-r from-secondary to-primary-300 rounded-full opacity-60 floating-element"
                style={{ animationDelay: "2s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
