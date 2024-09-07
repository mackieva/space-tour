'use client';
import Image from 'next/image';
import bgDesktop from '/public/assets/technology/background-technology-desktop.jpg';
import bgTablet from '/public/assets/technology/background-technology-tablet.jpg';
import bgMobile from '/public/assets/technology/background-technology-mobile.jpg';
import { data } from '@/util/data';
import { useState } from 'react';
import { motion } from 'framer-motion';

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
            <div className="mb-[32px] flex max-w-full flex-col px-[24px] pt-[88px] md:mx-auto md:mb-0 md:max-w-screen-lg md:px-12 md:pt-32 lg:px-24 lg:pt-[212px]">
                <div className="relative z-20 flex items-center justify-center md:justify-start">
                    <h5 className="text-[16px] text-white md:text-[20px] lg:text-[28px]">
                        <span className="pr-2 font-bold opacity-25">03</span>{' '}
                        Space Launch 101
                    </h5>
                </div>
            </div>
            <div className="relative z-20 flex flex-col justify-between lg:ml-40 lg:mt-12 lg:grid lg:grid-cols-techGrid">
                <div className="order-2 flex h-full items-center justify-center gap-[16px] pb-[26px] pt-[35px] md:gap-[32px] md:pb-[44px] md:pt-[56px] lg:order-1 lg:flex-col lg:pb-0 lg:pt-0">
                    {content.map((c, i) => (
                        <motion.button
                            key={i}
                            onClick={() => setTab(i)}
                            className={`h-[40px] w-[40px] rounded-[50%] border border-slate-400 font-serif text-[24px] leading-none transition-all hover:border-white hover:bg-white hover:text-blue md:h-[50px] md:w-[50px] lg:h-[80px] lg:w-[80px] lg:text-[32px] ${
                                tab === i
                                    ? 'border-white bg-white text-blue'
                                    : ''
                            }`}
                            animate={{ opacity: 1 }}
                        >
                            {i + 1}
                        </motion.button>
                    ))}
                </div>
                <div className="order-3 flex flex-col items-center justify-center text-center lg:order-2 lg:items-start lg:text-left">
                    {content.map(
                        (c, i) =>
                            tab === i && (
                                <motion.div
                                    key={i}
                                    layout={true}
                                    initial={{ y: 5, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -5, opacity: 0 }}
                                    transition={{
                                        ease: 'easeOut',
                                        duration: 0.6,
                                    }}
                                    className="max-w-full md:max-w-[60%] lg:max-w-full"
                                >
                                    <p className="subheadingTwo relative pb-2 text-[14px] uppercase text-lavender md:text-base">
                                        The Terminology...
                                    </p>
                                    <h3 className="text-[24px] md:text-[40px] lg:text-[56px] lg:text-white">
                                        {c.name}
                                    </h3>
                                    <p className="text-balance text-[16px] leading-8 text-lavender lg:text-left lg:text-[18px] lg:leading-9">
                                        {c.description}
                                    </p>
                                </motion.div>
                            ),
                    )}
                </div>
                <div className="order-1 overflow-hidden md:mt-[60px] lg:order-3 lg:mt-0 lg:flex lg:items-center lg:justify-end">
                    {content.map(
                        (c, i) =>
                            tab === i && (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        ease: 'easeOut',
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
                                        className="block max-h-[310px] w-full object-cover lg:hidden"
                                    />
                                </motion.div>
                            ),
                    )}
                </div>
            </div>
        </main>
    );
}
