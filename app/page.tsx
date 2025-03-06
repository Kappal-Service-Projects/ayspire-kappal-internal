"use client";
import { Link } from "@heroui/link";
// import { Snippet } from "@heroui/snippet";
// import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { useTheme } from "next-themes";

import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import ScrollContent from "@/components/homepage/scrollContent";
import MultiDirectionSlide from "@/components/multidirectionslide";
import WordShuffle from "@/components/wordshuffle";
import Earth from "@/components/earth";

export default function Home() {
  const { theme } = useTheme();
  const baseColor: [number, number, number] =
    theme === "dark" ? [0.235, 0.7804, 0.7804] : [0.9451, 0.9608, 0.9765];
  const glowColor: [number, number, number] =
    theme === "dark" ? [0.9451, 0.9608, 0.9765] : [0.8, 0.9843, 0.9451];

  return (
    <section className="py-10">
      <section className="flex flex-col md:flex-row items-start min-h-screen justify-start gap-4 py-8 md:py-10">
        <div className="w-full md:w-1/2">
          <MultiDirectionSlide
            className={`${title({ size: "xl", color: "white" })}`}
            text1="REDEFINING"
          >
            {
              <WordShuffle
                className={`${title({ size: "xl", color: "teal" })}`}
                words={["STRATEGY", "ASPIRATIONS", "INSIGHTS", "FINANCE"]}
              />
            }
          </MultiDirectionSlide>
          <div className="flex gap-3 my-20 lg:my-40 justify-center md:justify-start">
            <Link
              // isExternal
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
              href={siteConfig.links.more}
            >
              Explore
            </Link>
            <Link
              isExternal
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.eisd}
            >
              <GithubIcon size={20} />
              EISD
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Earth
            baseColor={baseColor}
            className="w-full max-w-screen lg:max-w-2xl mx-auto"
            dark={theme === "dark" ? 1 : 0.05}
            glowColor={glowColor}
            markers={[
              { location: [43.88686363442825, -78.9809724253452], size: 0.3 },
              { location: [9.276389189229306, 76.45874032596521], size: 0.1 },
            ]}
          />
        </div>

        {/* <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */}
      </section>

      <section>
        <ScrollContent />
      </section>
    </section>
  );
}
