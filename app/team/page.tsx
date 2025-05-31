import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Roshin Rasheed",
    role: "XXX",
    image: "/images/clients/apple.svg",
  },
  {
    name: "Priyanka",
    role: "XXX",
    image: "/images/clients/google.svg",
  },
  {
    name: "Omkar Kocharekar",
    role: "XXX",
    image: "/images/clients/microsoft.svg",
  },
  {
    name: "Lmnop Qrstuv ",
    role: "XXX",
    image: "/images/clients/hp.svg",
  },
  {
    name: "Abcd Efgh",
    role: "XXX",
    image: "/images/clients/oracle.svg",
  },
];

export const metadata = {
  title: "Team Insights | Ayspire",
  description: "Meet the leadership and core team behind Ayspire Inc.",
};

export default function TeamPage() {
  return (
    <main className="min-h-[80vh] w-full bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 flex flex-col items-center justify-center py-16 px-4">
      <section className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-8 tracking-tight text-center">
          Meet Our Team
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-12 text-center">
          The leadership and core team driving innovation and excellence at
          Ayspire.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                alt={member.name}
                className="w-24 h-24 rounded-full object-contain mb-4 border-4 border-primary bg-slate-100 dark:bg-slate-800"
                src={member.image}
              />
              <h3 className="text-xl font-semibold text-primary mb-1">
                {member.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-base font-light">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
