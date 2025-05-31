import Card from "@/components/containers/card";

interface Service {
  title: string;
  icon: string;
  desc: string;
  readMoreLink: string;
}

export default function ServicesSection({
  services,
  sectionRef,
  visible,
}: {
  services: Service[];
  sectionRef: React.RefObject<HTMLElement>;
  visible: boolean;
}) {
  return (
    <section
      ref={sectionRef}
      className={`relative py-16 px-4 sm:px-6 bg-white dark:bg-slate-950 transition-opacity duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      id="services"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {services.map((service) => (
          <Card
            key={service.title}
            description={service.desc}
            imageUrl={service.icon}
            readMoreLink={service.readMoreLink}
            title={service.title}
          />
        ))}
      </div>
    </section>
  );
}
