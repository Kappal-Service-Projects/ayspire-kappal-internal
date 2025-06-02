import Image from "next/image";

export default function ClientsSection({
  clients,
  sectionRef,
  visible,
}: {
  clients: string[];
  sectionRef: React.RefObject<HTMLElement>;
  visible: boolean;
}) {
  return (
    <section
      ref={sectionRef}
      className={`py-16 px-2 sm:px-2 bg-gray-50 dark:bg-slate-900`}
    >
      <h2
        className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-20 text-center transition-all duration-700`}
      >
        <span className="text-cyan-500">Our Clients </span>
        <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
          & Partners
        </span>
      </h2>
      <div className="max-w-4xl mx-auto overflow-x-auto">
        <div className="flex gap-4 items-center justify-center min-w-full">
          {clients.map((logo, i) => (
            <div
              key={i}
              className="flex items-center grayscale hover:grayscale-0 justify-center h-32 min-w-[180px]"
            >
              <Image
                alt={`Client ${i + 1}`}
                className="object-contain h-20 w-auto"
                height={80}
                src={logo}
                width={180}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
