"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import React from "react";

import { title } from "../primitives";
import { ContentImage } from "@/components/ui/OptimizedImage";
import { ProductsAndServices } from "@/config/data";

const ScrollContent: React.FC = () => {
  return (
    <ReactLenis root>
      <main className="dark:text-white w-full dark:bg-slate-950 bg-white text-slate-950">
        <div className="wrapper">
          <section className=" h-screen dark:text-white w-full dark:bg-slate-950 bg-white text-slate-950 grid place-content-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            <h1 className="2xl:text-7xl text-6xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              We know what exactly CFO&apos;s Are <br /> Looking For!
            </h1>
          </section>

          <section className="bg-gray-300 text-black grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            <h1 className="2xl:text-7xl text-4xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              Intelligent Solutions for
              <br /> Modern Businesses!
            </h1>
          </section>

          <section className=" h-screen dark:text-white w-full dark:bg-slate-950 bg-white text-slate-950 grid place-content-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            <h1 className="2xl:text-8xl text-5xl py-8 font-semibold text-center tracking-tight leading-[120%]">
              Ayspire offers a unified and automated solution for financial
              planning, analysis & compliance <br /> for{" "}
              <span className={title({ size: "xl", color: "teal" })}>
                your organization.
              </span>
            </h1>
          </section>
        </div>

        <section className="dark:text-white w-full dark:bg-slate-950 bg-white text-slate-950">
          <div className="grid grid-cols-1 md:grid-cols-2 px-2">
            <div className="sticky top-0 h-screen grid place-content-center py-5">
              <span className="bg-white max-w-md text-primary text-2xl md:text-5xl font-bold md:font-bold pb-5 dark:bg-black">
                Our Services
              </span>
              <h1 className={title({ size: "md" })}>
                Ayspire delivers precise insights & scalable solutions for
                informed decision-making in dynamic markets.
              </h1>
            </div>
            <div className="grid gap-2">
              {ProductsAndServices.map((data, index) => (
                <figure
                  key={index}
                  className="min-h-screen sticky top-0 flex flex-col justify-center items-center"
                >
                  <ContentImage
                    alt={data.alt}
                    className="transition-all duration-300 align-bottom object-cover rounded-md"
                    height={500}
                    loading={index == 0 ? "eager" : "lazy"}
                    priority={index === 0}
                    src={`/images/services/${index + 1}.png`}
                    width={500}
                  />
                  <span className="bg-white max-w-md text-primary text-3xl font-thin md:font-light dark:bg-black">
                    {data.text}
                  </span>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="dark:text-white w-full dark:bg-slate-950 bg-white text-slate-950">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="sticky top-0 h-screen flex items-center justify-center">
              <h1 className="2xl:text-7xl text-4xl text-primary sm:text-5xl font-semibold text-center tracking-tight leading-[120%]">
                Awards &
                <br /> Recognition
              </h1>
            </div>
            <div className="grid gap-2">
              <figure className="grid place-content-center lg:-skew-x-12">
                <ContentImage
                  alt="Ayspire Recognition Award 1"
                  className="transition-all duration-300 w-full md:w-4/5 lg:w-screen h-96 align-bottom object-cover"
                  height={500}
                  loading="eager"
                  priority={true}
                  src="/images/recognition/1.jpg"
                  width={500}
                />
              </figure>
              <figure className="grid place-content-center lg:skew-x-12">
                <ContentImage
                  alt="Ayspire Recognition Award 2"
                  className="transition-all duration-300 w-full md:w-4/5 lg:w-screen h-96 align-bottom object-cover"
                  height={500}
                  loading="eager"
                  priority={false}
                  src="/images/recognition/2.jpg"
                  width={500}
                />
              </figure>
              <figure className="grid place-content-center lg:-skew-x-12">
                <ContentImage
                  alt="Ayspire Recognition Award 3"
                  className="transition-all duration-300 w-full md:w-4/5 lg:w-screen h-96 align-bottom object-cover"
                  height={500}
                  loading="eager"
                  priority={false}
                  src="/images/recognition/3.jpg"
                  width={500}
                />
              </figure>
              <figure className="grid place-content-center lg:skew-x-12">
                <ContentImage
                  alt="Ayspire Recognition Award 4"
                  className="transition-all duration-300 w-full md:w-4/5 lg:w-screen h-96 align-bottom object-cover"
                  height={500}
                  loading="eager"
                  priority={false}
                  src="/images/recognition/4.jpg"
                  width={500}
                />
              </figure>
              <figure className="grid place-content-center lg:-skew-x-12">
                <ContentImage
                  alt="Ayspire Recognition Award 5"
                  className="transition-all duration-300 w-full md:w-4/5 lg:w-screen h-96 align-bottom object-cover"
                  height={500}
                  loading="eager"
                  priority={false}
                  src="/images/recognition/5.jpg"
                  width={500}
                />
              </figure>
            </div>
          </div>
        </section>

        <footer className="group dark:text-white w-full dark:bg-slate-950 bg-white text-slate-950">
          <h1 className="text-[16vw] group-hover:translate-y-4 translate-y-20 leading-[100%] font-semibold text-center bg-gradient-to-r from-gray-100 to-gray-300 dark:bg-gradient-to-r dark:from-gray-400 dark:to-gray-800  bg-clip-text text-transparent transition-all ease-linear">
            Ayspire Inc
          </h1>
        </footer>
      </main>
    </ReactLenis>
  );
};

export default ScrollContent;
