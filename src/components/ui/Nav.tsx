'use client';

import Link from 'next/link';
import { navList } from '@/util/data';
import { useState } from 'react';
import '@/components/ui/Nav.css';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { usePathname } from 'next/navigation';

export default function Nav() {
    const [hoveredLink, setHoveredLink] = useState('');
    const [navOpen, setNavOpen] = useState(false);

    const curPath = usePathname();
    return (
        <>
            <div className="flex items-center justify-end md:hidden">
                <Bars3Icon
                    className="size-10 text-lavender hover:cursor-pointer"
                    onClick={() => setNavOpen(true)}
                />
            </div>
            <nav
                className={`absolute right-0 top-0 flex h-screen w-2/3 flex-col items-start justify-start gap-[32px] bg-white/[0.04] p-8 pb-0 backdrop-blur-md transition-all duration-300 ${
                    navOpen ? 'translate-x-0' : 'translate-x-[200%]'
                } md:relative md:h-auto md:w-full md:translate-x-0 md:flex-row md:justify-center lg:gap-[52px]`}
                onMouseLeave={() => setHoveredLink('')}
            >
                <XMarkIcon
                    className="size-6 self-end text-lavender hover:cursor-pointer md:hidden"
                    onClick={() => setNavOpen(false)}
                />
                {navList.map((link, i) => (
                    <Link
                        className="relative font-sansCon text-base uppercase tracking-[2.7px] text-white md:pb-10 md:text-sm lg:text-base"
                        href={link.path}
                        key={i}
                        onMouseEnter={() => setHoveredLink(link.label)}
                        onClick={() => setNavOpen(false)}
                    >
                        <span className="inline pr-3 md:hidden md:font-bold lg:inline">
                            0{i}
                        </span>
                        {link.label}
                        {hoveredLink === link.label && (
                            <motion.div
                                layout={true}
                                layoutId="hovered-backdrop"
                                className={`animatedBorder`}
                            />
                        )}
                        {curPath === link.path && (
                            <motion.div
                                layout={true}
                                layoutId="active-backdrop"
                                className="activeBorder"
                            />
                        )}
                    </Link>
                ))}
            </nav>
        </>
    );
}
