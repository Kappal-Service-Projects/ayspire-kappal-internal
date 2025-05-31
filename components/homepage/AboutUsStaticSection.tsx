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
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 drop-shadow-lg tracking-wide uppercase">
          WE ARE AYSPIRE
        </h2>
        <p className="text-lg md:text-2xl text-white/90 font-light drop-shadow-md">
          Quite simply, we are “all in” on client success. Our focus is
          delivering high-value industry solutions through connected planning
          &amp; analytics. We bring data, people and plans together. We offer a
          range of Technical and Advisory services to our clients depending on
          their need.
        </p>
      </div>
    </section>
  );
}
