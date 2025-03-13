import Image from "next/image";
import { Link } from "@heroui/link";

import { BlogPosts } from "@/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-2">
      <div className="col-span-1 lg:col-span-2">
        <h1 className="font-semibold text-xl lg:text-3xl py-10 mx-5 tracking-tighter">
          Ayspire Insights
        </h1>
        <BlogPosts />
      </div>
      <div className="col-span-1">
        <Link href="/careers">
          <Image
            alt="kappal ads"
            className="cursor-pointer"
            height={500}
            loading="lazy"
            src={"/images/advertisments/blog_page_ad_dark.png"}
            width={500}
          />
        </Link>
      </div>
    </section>
  );
}
