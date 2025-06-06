import KappalECommerceAdvertisement from "@/components/containers/ecommerce-advertisement";
import { Jobs } from "@/components/jobs";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = {
  title: "Careers",
  description: "Work with us",
};

export default function Page() {
  return (
    <section className="min-h-[80vh] w-full bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 py-32  px-4">
      <div className="max-w-screen grid grid-cols-1 lg:grid-cols-5 gap-4 mx-5">
        <div className="pb-10 col-span-1 lg:col-span-4">
          <div className="mx-5 mb-8">
            <SectionHeader
              className="text-left"
              gradientText="better tomorrow!"
              primaryText="Join Us, to create a"
              size="md"
            />
          </div>
          <Jobs />
        </div>
        <div className="lg:col-span-1 my-10">
          <KappalECommerceAdvertisement />
        </div>
      </div>
    </section>
  );
}
