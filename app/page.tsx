"use client";
import { Link } from "@heroui/link";
// import { Snippet } from "@heroui/snippet";
// import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { useTheme } from "next-themes";

import { siteConfig } from "@/config/site";
import { cardData } from "@/config/data";
import { title } from "@/components/primitives";
import ScrollContent from "@/components/homepage/scrollContent";
import MultiDirectionSlide from "@/components/animations/multidirectionslide";
import WordShuffle from "@/components/animations/wordshuffle";
import Earth from "@/components/animations/earth";
import Card from "@/components/containers/card";

export default function Home() {
  const { theme } = useTheme();
  const baseColor: [number, number, number] =
    theme === "dark" ? [0.235, 0.7804, 0.7804] : [0.9451, 0.9608, 0.9765];
  const glowColor: [number, number, number] =
    theme === "dark" ? [0.9451, 0.9608, 0.9765] : [0.8, 0.9843, 0.9451];

  return (
    <section className="pt-10 mx-5">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 min-h-screen">
        <div className="col-span-1">
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
          <div className="justify-center items-center h-1/2 w-full flex">
            <Link
              // isExternal
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
                size: "lg",
              })}
              href={siteConfig.links.more}
              title="Explore"
            >
              Explore
            </Link>
          </div>
        </div>
        <div className="col-span-1">
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
      </section>
      <div className="px-2 mb-10 items-center justify-center grid grid-cols-1 lg:grid-cols-3 gap-6 lg:-mt-60">
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
