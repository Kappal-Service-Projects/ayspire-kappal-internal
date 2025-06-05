import React from "react";

import { SectionHeader } from "@/components/ui/SectionHeader";
import OptimizedImage from "@/components/ui/OptimizedImage";

const teamMembers = [
  {
    name: "Roshin Rasheed",
    role: "XXX",
    image: "/images/team/roshin.jpeg",
  },
  {
    name: "Omkar Kocharekar",
    role: "XXX",
    image: "/images/team/omkar.png",
  },
  {
    name: "Philomina Priyanka John Pius",
    role: "XXX",
    image: "/images/team/priyanka.png",
  },
  {
    name: "Riya Abraham",
    role: "XXX",
    image: "/images/team/riya.png",
  },
  // {
  //   name: "Abcd Efgh",
  //   role: "XXX",
  //   image: "/images/team/cxo.jpg",
  // },
];

export const metadata = {
  title: "Team Insights | Ayspire",
  description: "Meet the leadership and core team behind Ayspire Inc.",
};

export default function TeamPage() {
  return (
    <main className="min-h-[80vh] w-full bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 py-16 px-4 overflow-x-hidden">
      <section className="w-full max-w-full mx-auto mt-24 md:mt-32 overflow-x-hidden">
        <SectionHeader
          className="text-center my-20"
          gradientText="Our Team"
          primaryText="Meet"
          size="lg"
        />

        <div className="flex flex-col lg:flex-row gap-12 mt-12 max-w-full overflow-x-hidden">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-2/5 flex flex-col justify-start">
            <SectionHeader
              className="mx-auto"
              gradientText="make us great!"
              primaryText="Our people"
              size="sm"
            />

            <div className="space-y-6 w-3/4 mx-auto">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Here we focus on markets where technology and innovation can
                unlock long-term value and drive sustainable growth.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                You&apos;ll interact with talented professionals, will be
                challenged to solve difficult problems and think in new and
                creative ways.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Our team brings diverse expertise across enterprise planning,
                analytics and digital transformation to deliver exceptional
                results.
              </p>
            </div>
          </div>

          {/* Right Column - Team Grid */}
          <div className="w-full lg:w-2/3 min-w-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="group relative h-80 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl w-full min-w-0"
                >
                  {/* Card background with overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/5 z-10" />

                  {/* Member image */}
                  <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 transition-transform duration-500 group-hover:scale-110 overflow-hidden">
                    <OptimizedImage
                      fill
                      alt={`${member.name} - ${member.role} at Ayspire Inc.`}
                      className="w-full h-full object-cover"
                      priority={false}
                      quality={90}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      src={member.image}
                    />
                  </div>

                  {/* Member info - positioned at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-center transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {member.name}
                    </h3>
                    {/* <p className="text-white/80 text-base font-light">
                      {member.role}
                    </p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
