import { Jobs } from "@/components/jobs";

export const metadata = {
  title: "Careers",
  description: "Work with us",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-5xl mx-5 mb-8 pt-10 tracking-tighter">
        Join Us, to create a better tomorrow!
      </h1>
      <Jobs />
    </section>
  );
}
