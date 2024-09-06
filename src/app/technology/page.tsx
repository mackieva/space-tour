"use client";
import Image from "next/image";
import bgDesktop from "/public/assets/technology/background-technology-desktop.jpg";
import bgTablet from "/public/assets/technology/background-technology-tablet.jpg";
import bgMobile from "/public/assets/technology/background-technology-mobile.jpg";
import { data } from "@/util/data";
import { useState } from "react";
import { motion } from "framer-motion";

export default function TechnologyPage() {
  const content = data.technology;
  const [tab, setTab] = useState(0);
  return (
    <main className="absolute left-0 top-0 h-screen w-full">
      <Image
        src={bgDesktop}
        alt="Planet Earth in Space"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
        className="hidden lg:block"
      />
      <Image
        src={bgTablet}
        alt="Planet Earth in Space"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
        className="hidden md:block lg:hidden"
      />
      <Image
        src={bgMobile}
        alt="Planet Earth in Space"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
        className="md:hidden"
      />
      <div className="mx-auto flex max-w-screen-lg flex-col px-12 lg:px-24 lg:pt-24">
        <div className="relative z-20 mt-[75px] mb-[60px] flex items-center justify-start">
          <h5 className="text-xl text-white lg:text-lg">
            <span className="font-bold opacity-25">03</span> Space Launch 101
          </h5>
        </div>
      </div>
      <div className="relative z-20 flex flex-col justify-between lg:ml-40 lg:mt-12 lg:grid lg:grid-cols-techGrid">
        <div className="order-2 flex h-full items-center justify-center gap-[32px] pt-[56px] pb-[44px] lg:pt-0 lg:pb-0 lg:order-1 lg:flex-col">
          {content.map((c, i) => (
            <button
              key={i}
              onClick={() => setTab(i)}
              className="h-[50px] w-[50px] rounded-[50%] border border-slate-400 font-serif text-[24px] leading-none transition-all hover:border-white hover:bg-white hover:text-blue lg:h-[80px] lg:w-[80px] lg:text-[32px]"
            >
              {i + 1}
            </button>
          ))}
        </div>
        <div className="order-3 flex flex-col items-center justify-center text-center lg:order-2 lg:items-start lg:text-left">
          {content.map(
            (c, i) =>
              tab === i && (
                <motion.div
                  key={i}
                  layout={true}
                  initial={{ x: 10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -10, opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 0.6,
                  }}
                  className="max-w-[60%] lg:max-w-full"
                >
                  <p className="secondaryTwo text-lavender font-sansCon uppercase">The Terminology...</p>
                  <h3 className="md:text-[40px] lg:text-[56px] lg:text-white">
                    {c.name}
                  </h3>
                  <p className="text-balance text-[16px] leading-8 text-lavender lg:text-left lg:text-[18px] lg:leading-9">
                    {c.description}
                  </p>
                </motion.div>
              ),
          )}
        </div>
        <div className="order-1 overflow-hidden lg:order-3 lg:flex lg:items-center lg:justify-end">
          {content.map(
            (c, i) =>
              tab === i && (
                <motion.div
                  key={i}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 0.6,
                  }}
                  className="w-full"
                >
                <Image
                  key={i}
                  src={c.images.portrait}
                  width={445}
                  height={445}
                  alt={`Satellite Image of ${c.name}`}
                  className="hidden w-full object-cover lg:block"
                />
                <Image
                  key={i}
                  src={c.images.landscape}
                  width={768}
                  height={310}
                  alt={`Satellite Image of ${c.name}`}
                  className="block w-full object-cover lg:hidden"
                />
                </motion.div>
              ),
          )}
        </div>
      </div>
    </main>
  );
}
