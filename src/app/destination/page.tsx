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
            <div className="flex max-w-full flex-col px-[24px] pt-24 md:mx-auto md:max-w-screen-lg md:px-24">
                <div className="relative z-20 mt-[75px] flex items-center justify-start">
                    <h5 className="text-white">
                        <span className="font-bold opacity-25">01</span> Pick
                        Your Destination
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
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -10, opacity: 0 }}
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
                <div className="flex flex-col justify-center md:items-center md:text-center lg:items-start lg:text-left">
                    <div className="flex gap-5">
                        {content.map((c, i) => (
                            <button
                                key={i}
                                onClick={() => setTab(i)}
                                onMouseEnter={() => setHoveredLink(c.name)}
                                className={`subheadingTwo relative pb-1 uppercase text-lavender ${
                                    tab === i && 'selected'
                                }`}
                            >
                                {c.name}
                                {hoveredLink === c.name && (
                                    <motion.div
                                        layout={true}
                                        layoutId="tab-hovered-backdrop"
                                        className="animatedBorder"
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
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -10, opacity: 0 }}
                                    transition={{
                                        ease: 'easeOut',
                                        duration: 0.6,
                                    }}
                                >
                                    <h2>{c.name}</h2>
                                    <p className="text-balance text-lg text-lavender">
                                        {c.description}
                                    </p>
                                    <div className="border-color borderDark mt-[54px] grid w-full grid-cols-1 border-t pt-[28px] md:grid-cols-2">
                                        <div>
                                            <p className="subheadingTwo text-lavender">
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
