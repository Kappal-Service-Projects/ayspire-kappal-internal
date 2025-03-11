"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import React from "react";
import Image from "next/image";

import { title } from "../primitives";

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
            <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              Ayspire offers a unified and automated solution for financial
              planning, analysis & compliance for <br />{" "}
              <span className={title({ size: "md", color: "teal" })}>
                your organization.
              </span>
            </h1>
          </section>
        </div>

        <section className="dark:text-white w-full dark:bg-slate-950 bg-white text-slate-950">
          <div className="grid grid-cols-2 md:grid-cols-2">
            <div className="sticky top-0 h-screen flex items-center justify-center">
              <h1 className="2xl:text-7xl text-4xl sm:text-5xl font-semibold text-center tracking-tight leading-[120%]">
                Our Core
                <br /> Services
              </h1>
            </div>
            <div className="grid gap-2">
              <figure className="grid place-content-center lg:-skew-x-12">
                <Image
                  alt=""
                  className="transition-all duration-300 w-4/5 lg:w-screen h-96 align-bottom object-cover"
                  height={500}
                  src="/images/rocket/1.jpg"
                  width={500}
                />
              </figure>
              <figure className="grid place-content-center lg:skew-x-12">
                <Image
                  alt=""
                  className="transition-all duration-300 w-4/5 lg:w-screen h-96 align-bottom object-cover"
                  height={500}
                  src="/images/rocket/2.jpg"
                  width={500}
                />
              </figure>
              <figure className="grid place-content-center lg:-skew-x-12">
                <Image
                  alt=""
                  className="transition-all duration-300 w-4/5 lg:w-screen h-96 align-bottom object-cover"
                  height={500}
                  src="/images/rocket/3.jpg"
                  width={500}
                />
              </figure>
              <figure className="grid place-content-center lg:skew-x-12">
                <Image
                  alt=""
                  className="transition-all duration-300 w-4/5 lg:w-screen h-96 align-bottom object-cover"
                  height={500}
                  src="/images/rocket/4.jpg"
                  width={500}
                />
              </figure>
              <figure className="grid place-content-center lg:-skew-x-12">
                <Image
                  alt=""
                  className="transition-all duration-300 w-4/5 lg:w-screen h-96 align-bottom object-cover"
                  height={500}
                  src="/images/rocket/5.jpg"
                  width={500}
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="dark:text-white w-full dark:bg-slate-950 bg-white text-slate-950">
          <div className="grid grid-cols-2 px-2">
            <div className="grid gap-2">
              <figure className="sticky top-0 h-screen grid place-content-center">
                <Image
                  alt=""
                  className="transition-all duration-300 w-96 h-96 align-bottom object-cover rounded-md"
                  height={500}
                  src="https://images.unsplash.com/photo-1718183120769-ece47f31045b?w=500&auto=format&fit=crop"
                  width={500}
                />
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <Image
                  alt=""
                  className="transition-all duration-300 w-96 h-96 align-bottom object-cover rounded-md"
                  height={500}
                  src="https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop"
                  width={500}
                />
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <Image
                  alt=""
                  className="transition-all duration-300 w-96 h-96 align-bottom object-cover rounded-md"
                  height={500}
                  src="https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop"
                  width={500}
                />
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <Image
                  alt=""
                  className="transition-all duration-300 w-96 h-96 align-bottom object-cover rounded-md"
                  height={500}
                  src="https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop"
                  width={500}
                />
              </figure>
            </div>
            <div className="sticky top-0 h-screen grid place-content-center p-5">
              <h1 className={title({ size: "md" })}>
                Ayspire deliver precise insights & scalable solutions for
                informed decision-making in dynamic markets.
              </h1>
            </div>
          </div>
        </section>

        <footer className="group dark:text-white w-full dark:bg-slate-950 bg-white text-slate-950">
          {/* <h1 className="text-[16vw] group-hover:translate-y-4 translate-y-20 leading-[100%] font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear"> */}
          <h1 className="text-[16vw] group-hover:translate-y-4 translate-y-20 leading-[100%] font-semibold text-center bg-gradient-to-r from-gray-100 to-gray-300 dark:bg-gradient-to-r dark:from-gray-400 dark:to-gray-800  bg-clip-text text-transparent transition-all ease-linear">
            Ayspire Inc
          </h1>
          {/* <section className="dark:bg-black bg-gradient-to-r from-gray-100 via-gray-200 to-slate-300 h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full">
            Thanks
          </section> */}
        </footer>
      </main>
    </ReactLenis>
  );
};

export default ScrollContent;
