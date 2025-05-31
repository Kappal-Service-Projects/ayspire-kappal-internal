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
      className={`py-16 px-2 sm:px-2 bg-gray-50 dark:bg-slate-900 transition-opacity duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">
        Our Clients & Partners
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
