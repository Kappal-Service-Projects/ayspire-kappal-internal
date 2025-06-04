import { SectionHeader } from "@/components/ui/SectionHeader";

export default function AboutUsStaticSection() {
  return (
    <section
      className="relative flex items-center justify-center min-h-[420px] w-full overflow-hidden bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url(/images/background/home-page-about-us.png)",
      }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl px-4 py-20 text-center">
        <SectionHeader
          className="text-white drop-shadow-lg opacity-80 contrast-100 brightness-150"
          gradientText="AYSPIRE"
          primaryText="WE ARE"
          size="lg"
        />
        <p className="text-lg md:text-2xl text-white/90 font-light drop-shadow-md">
          We’re fully invested in client success. Through connected planning and
          analytics, we deliver solutions that bring data, people and plans
          together. Our range of technical and advisory services is customized
          to fit your unique requirements.
        </p>
      </div>
    </section>
  );
}
