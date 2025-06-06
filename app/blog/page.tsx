import { Link } from "@heroui/link";

import { ContentImage } from "@/components/ui/OptimizedImage";
import { BlogPosts } from "@/components/posts";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section className="min-h-[80vh] w-full bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 py-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-24 md:mt-32">
        <div className="col-span-1 lg:col-span-2">
          <div className="py-5 mx-5">
            <SectionHeader
              className="text-center"
              gradientText="Insights"
              primaryText="Ayspire"
              size="lg"
            />
          </div>
          <BlogPosts />
        </div>
        <div className="col-span-1">
          <Link href="/careers">
            <ContentImage
              alt="Kappal Ads - Career opportunities at Ayspire"
              className="cursor-pointer"
              height={500}
              src={"/images/advertisements/blog_page_ad_dark.png"}
              width={500}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
