'use client';

import Image from 'next/image';
import bgDesktop from '/public/assets/crew/background-crew-desktop.jpg';
import bgTablet from '/public/assets/crew/background-crew-tablet.jpg';
import bgMobile from '/public/assets/crew/background-crew-mobile.jpg';
import { delay, motion } from 'framer-motion';
import { data } from '@/util/data';
import { useState } from 'react';

export default function CrewPage() {
    const content = data.crew;
    const [tab, setTab] = useState(0);
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };
    const item = {
        hidden: { scale: 0, opacity: 0 },
        show: { scale: 1, opacity: 1 },
    };
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
                    objectFit: 'cover',
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
                    objectFit: 'cover',
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
                    objectFit: 'cover',
                }}
                className="md:hidden"
            />
            <div className="mx-auto flex h-full max-w-screen-lg flex-col px-[24px] pt-[88px] md:px-12 md:pt-12 lg:px-24 lg:pt-24">
                <div className="relative z-20 mt-0 flex items-center justify-center md:mt-[80px] md:justify-start lg:mt-[120px]">
                    <h5 className="text-[16px] text-white md:text-[20px] lg:text-[28px]">
                        <span className="pr-2 font-bold opacity-25">02</span>{' '}
                        Meet Your Crew
                    </h5>
                </div>
                <div className="relative z-20 flex flex-1 flex-col items-center justify-start md:justify-center lg:-mt-8 lg:grid lg:grid-cols-2">
                    <div className="max-w-2/3 order-2 flex max-w-[595px] flex-col items-center justify-center text-center md:order-1 md:gap-10 lg:max-w-full lg:items-start lg:gap-32 lg:text-left">
                        {content.map(
                            (c, i) =>
                                tab === i && (
                                    <motion.div
                                        key={c.name}
                                        initial={{ y: 5, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -5, opacity: 0 }}
                                        transition={{
                                            ease: 'easeOut',
                                            duration: 0.6,
                                        }}
                                        className="order-2 md:order-1 md:mt-[60px] lg:m-0"
                                    >
                                        <h4 className="text-base text-[rgba(255,255,255,0.5)] md:text-2xl lg:text-white">
                                            {c.role}
                                        </h4>
                                        <h3 className="text-[24px] md:text-[40px] lg:text-[56px] lg:text-white">
                                            {c.name}
                                        </h3>
                                        <p className="text-balance text-[16px] leading-8 text-lavender lg:text-left lg:text-[18px] lg:leading-9">
                                            {c.bio}
                                        </p>
                                    </motion.div>
                                ),
                        )}
                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate="show"
                            className="order-1 mb-8 mt-8 flex gap-6 md:order-2 md:mb-0 md:mt-0"
                        >
                            {content.map((c, i) => (
                                <motion.button
                                    key={i}
                                    variants={item}
                                    onClick={() => setTab(i)}
                                    className={`h-[10px] w-[10px] rounded-full transition-all hover:bg-[rgba(255,255,255,.5)] lg:h-4 lg:w-4 ${
                                        tab === i
                                            ? 'bg-white'
                                            : 'bg-[rgba(255,255,255,0.17)]'
                                    }`}
                                    animate={{ opacity: 1 }}
                                ></motion.button>
                            ))}
                        </motion.div>
                    </div>
                    <div className="relative order-1 flex h-full max-h-[45%] w-full items-end justify-end overflow-hidden border-b-[1px] border-b-[#383B4B] md:order-2 md:h-full md:max-h-full md:border-0">
                        {content.map(
                            (c, i) =>
                                tab === i && (
                                    <motion.div
                                        key={c.name}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{
                                            ease: 'easeInOut',
                                            duration: 0.6,
                                        }}
                                        className="relative z-30 h-[90%] w-full lg:h-full"
                                    >
                                        <Image
                                            key={c.name}
                                            src={c.images.png}
                                            fill
                                            alt={`Headshot of ${c.name}`}
                                            style={{
                                                objectFit: 'contain',
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
