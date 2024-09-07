'use client';
import Image from 'next/image';
import { data } from '@/util/data';
import bgDesktop from '/public/assets/destination/background-destination-desktop.jpg';
import bgTablet from '/public/assets/destination/background-destination-tablet.jpg';
import bgMobile from '/public/assets/destination/background-destination-mobile.jpg';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function DestinationPage() {
    const content = data.destinations;
    const [tab, setTab] = useState(0);
    const [hoveredLink, setHoveredLink] = useState('Moon');
    return (
        <main className="absolute left-0 top-0 h-full w-full md:h-screen">
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
            <div className="flex max-w-full flex-col px-[24px] pt-[88px] md:mx-auto md:max-w-screen-lg md:px-12 md:pt-32 lg:px-24 lg:pt-[212px]">
                <div className="relative z-20 flex items-center justify-center md:justify-start">
                    <h5 className="text-[16px] text-white md:text-[20px] lg:text-[28px]">
                        <span className="pr-2 font-bold opacity-25">01</span>{' '}
                        Pick Your Destination
                    </h5>
                </div>
            </div>
            <div className="relative z-20 mt-12 max-w-full justify-between px-[24px] md:mx-auto md:flex md:max-w-screen-lg md:flex-col md:px-24 lg:grid lg:grid-cols-destinationGrid">
                <div className="flex items-center justify-center md:mb-[53px] lg:mb-0">
                    {content.map(
                        (c, i) =>
                            tab === i && (
                                <motion.div
                                    key={c.name}
                                    id={c.name}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        ease: 'easeOut',
                                        duration: 0.6,
                                    }}
                                >
                                    <Image
                                        src={c.images.webp}
                                        width={445}
                                        height={445}
                                        alt={`Satellite Image of ${c.name}`}
                                        className="max-w-[170px] md:max-w-[300px] lg:max-w-[450px]"
                                    />
                                </motion.div>
                            ),
                    )}
                </div>
                <div className="flex flex-col items-center justify-center pb-[20px] pt-[26px] md:p-0 md:text-center lg:items-start lg:text-left">
                    <div className="flex items-center justify-center gap-5 md:justify-start">
                        {content.map((c, i) => (
                            <button
                                key={i}
                                onClick={() => setTab(i)}
                                onMouseEnter={() => setHoveredLink(c.name)}
                                className={`subheadingTwo relative pb-2 text-[14px] uppercase text-lavender md:text-base ${
                                    tab === i && 'text-white'
                                }`}
                            >
                                {c.name}
                                {hoveredLink === c.name && (
                                    <motion.div
                                        layout={true}
                                        layoutId="tab-hovered-backdrop"
                                        className="animatedBorderDestination"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
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
                                >
                                    <h2 className="text-center text-[56px] md:text-left">
                                        {c.name}
                                    </h2>
                                    <p className="md:text-l text-balance text-center text-[15px] leading-[25px] text-lavender md:text-lg">
                                        {c.description}
                                    </p>
                                    <div className="border-color borderDark mt-[54px] grid w-full grid-cols-1 gap-[32px] border-t pt-[28px] text-center md:grid-cols-2 md:gap-0 md:text-left">
                                        <div>
                                            <p className="subheadingTwo text-[14px] text-lavender md:text-base">
                                                Avg. Distance
                                            </p>
                                            <p className="subheadingOne">
                                                {c.distance}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="subheadingTwo text-lavender">
                                                Est. Travel Time
                                            </p>
                                            <p className="subheadingOne">
                                                {c.travel}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ),
                    )}
                </div>
            </div>
        </main>
    );
}
