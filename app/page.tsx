"use client";
import { Link } from "@heroui/link";
// import { Snippet } from "@heroui/snippet";
// import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { useTheme } from "next-themes";

import { siteConfig } from "@/config/site";
import { cardData } from "@/config/data";
import { title } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import ScrollContent from "@/components/homepage/scrollContent";
import MultiDirectionSlide from "@/components/multidirectionslide";
import WordShuffle from "@/components/wordshuffle";
import Earth from "@/components/earth";
import Card from "@/components/card";

export default function Home() {
  const { theme } = useTheme();
  const baseColor: [number, number, number] =
    theme === "dark" ? [0.235, 0.7804, 0.7804] : [0.9451, 0.9608, 0.9765];
  const glowColor: [number, number, number] =
    theme === "dark" ? [0.9451, 0.9608, 0.9765] : [0.8, 0.9843, 0.9451];

  return (
    <section className="py-10 md:py-10">
      <section className="flex flex-col mt-5 md:flex-row items-center justify-center md:items-start md:justify-start h-screen min-h-screen gap-2 py-0 md:py-10">
        <div className="w-full px-5 md:w-1/2">
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
          <div className="flex gap-2 mt-24 md:mt-20 lg:mt-40 justify-center md:justify-start">
            <Link
              // isExternal
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
              href={siteConfig.links.more}
              title="Explore"
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
      <div className="px-4 mb-10 items-center justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:-mt-60">
        {cardData.map((card, index) => (
          <Card
            key={index}
            description={card.description}
            imageUrl={card.imageUrl}
            readMoreLink={card.readMoreLink}
            title={card.title}
          />
        ))}
      </div>
      <section>
        <ScrollContent />
      </section>
    </section>
  );
}
