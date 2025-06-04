export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 bg-gradient-to-b from-slate-300/20 to-white">
      <div className="inline-block mx-10 text-center justify-center">
        {children}
      </div>
    </section>
  );
}
