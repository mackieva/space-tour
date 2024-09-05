"use client";

import Image from "next/image";
import bgDesktop from "/public/assets/crew/background-crew-desktop.jpg";
import bgTablet from "/public/assets/crew/background-crew-tablet.jpg";
import bgMobile from "/public/assets/crew/background-crew-mobile.jpg";
import { motion } from "framer-motion";
import { data } from "@/util/data";
import { useState } from "react";

export default function CrewPage() {
  const content = data.crew;
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
      <div className="mx-auto flex h-full max-w-screen-lg flex-col px-12 pt-12 lg:px-24 lg:pt-24">
        <div className="relative z-20 mt-[75px] flex items-center justify-start">
          <h5 className="text-white">
            <span className="font-bold opacity-25">02</span> Meet Your Crew
          </h5>
        </div>
        <div className="relative z-20 flex flex-1 flex-col items-center justify-center lg:-mt-8 lg:grid lg:grid-cols-2">
          <div className="max-w-2/3 flex max-w-[595px] flex-col items-center justify-center gap-10 text-center lg:max-w-full lg:items-start lg:gap-32 lg:text-left">
            {content.map(
              (c, i) =>
                tab === i && (
                  <motion.div
                    key={c.name}
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -10, opacity: 0 }}
                    transition={{ ease: "easeOut", duration: 0.6 }}
                    className="mt-[60px] lg:m-0"
                  >
                    <h4 className="text-[rgba(255,255,255,0.5)] md:text-2xl lg:text-white">
                      {c.role}
                    </h4>
                    <h3 className="md:text-[40px] lg:text-[56px] lg:text-white">
                      {c.name}
                    </h3>
                    <p className="text-balance text-[16px] leading-8 text-lavender lg:text-left lg:text-[18px] lg:leading-9">
                      {c.bio}
                    </p>
                  </motion.div>
                ),
            )}
            <div className="flex gap-6">
              {content.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setTab(i)}
                  className={`h-[10px] w-[10px] rounded-full bg-slate-500 transition hover:bg-white lg:h-4 lg:w-4 ${
                    tab === i ? "selected" : ""
                  }`}
                ></button>
              ))}
            </div>
          </div>
          <div className="relative flex h-full w-full items-end justify-end overflow-hidden">
            {content.map(
              (c, i) =>
                tab === i && (
                  <motion.div
                    key={c.name}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ ease: "easeOut", duration: 0.6 }}
                    className="relative z-30 h-[90%] w-full lg:h-full"
                  >
                    <Image
                      key={c.name}
                      src={c.images.png}
                      fill
                      alt={`Headshot of ${c.name}`}
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </motion.div>
                ),
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
