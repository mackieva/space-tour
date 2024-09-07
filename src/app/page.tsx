import Image from 'next/image';
import Link from 'next/link';
import bgDesktop from '/public/assets/home/background-home-desktop.jpg';
import bgTablet from '/public/assets/home/background-home-tablet.jpg';
import bgMobile from '/public/assets/home/background-home-mobile.jpg';

export default function Home() {
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
            <div className="mx-w-screen-lg z-2 relative mx-auto flex flex-col px-[24px] pt-[112px] md:h-full md:px-[160px] md:pt-[200px] lg:grid lg:h-[85vh] lg:grid-cols-2 lg:px-[165px]">
                <div className="flex flex-col items-center justify-start lg:items-start lg:justify-center">
                    <h5 className="subheadingTwo md:text-xl lg:text-[28px]">
                        So, you want to travel to
                    </h5>
                    <h1 className="text-[80px] md:text-[150px]">Space</h1>
                    <p className="mb-[81px] text-center text-lavender md:mb-0 md:text-base md:leading-[28px] lg:text-left lg:text-[15px]">
                        Let’s face it; if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center md:mb-[90px] md:mt-auto lg:items-end lg:justify-end">
                    <Link
                        className="rounded-full bg-white px-[45px] py-[85px] font-serif text-[32px] uppercase text-black lg:px-[65px] lg:py-[110px]"
                        href="/destination"
                    >
                        Explore
                    </Link>
                </div>
            </div>
        </main>
    );
}
