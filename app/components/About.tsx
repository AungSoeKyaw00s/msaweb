'use client'
import clsx from 'clsx'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('down');
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY.current) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(entry.isIntersecting);
                });
            },
            {
                threshold: 0.1,
                rootMargin: '-50px'
            }
        );

        const section = document.getElementById('about');
        if (section) {
            observer.observe(section);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    const getTransformValue = () => {
        if (!isVisible) {
            return scrollDirection === 'down' ? 'translate-y-8' : '-translate-y-8';
        }
        return 'translate-y-0';
    };

    return (
        <section 
            id="about" 
            className="relative flex min-h-screen items-center pt-20 bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
        >
            <div className="mx-auto max-w-7xl w-full">
                <div
                    className={clsx(
                        "space-y-6 md:space-y-12",
                        "transform transition-all duration-1000 ease-out",
                        isVisible ? "opacity-100" : "opacity-0",
                        getTransformValue()
                    )}
                >
                    <p className={clsx(
                            "transform transition-all duration-1000 delay-300 ease-out w-full max-w-md font-medium font-mono text-left text-3xl lg:text-left lg:max-w-lg lg:sticky lg:top-20 lg:text-5xl",
                            isVisible 
                                ? "opacity-100 scale-100" 
                                : `opacity-0 ${scrollDirection === 'down' ? 'scale-95' : 'scale-105'}`)}>
                        About Us
                    </p>
                    <div className='flex flex-col lg:flex-row lg:items-start lg:gap-12 items-center justify-between gap-8'>
                        <div className={clsx(
                            "transform transition-all duration-1000 delay-300 ease-out w-full max-w-md lg:max-w-lg lg:sticky lg:top-24",
                            isVisible 
                                ? "opacity-100 scale-100" 
                                : `opacity-0 ${scrollDirection === 'down' ? 'scale-95' : 'scale-105'}`
                        )}>
                            <div className="relative aspect-square w-full">
                                <Image
                                    src="/msa.jpg"
                                    fill
                                    alt="MSA"
                                    className="rounded-lg shadow-lg object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    priority
                                />
                            </div>
                        </div>

                        <div className={clsx(
                            "w-full lg:flex-1",
                            "transform transition-all duration-1000 delay-500 ease-out",
                            isVisible ? "opacity-100" : "opacity-0",
                            isVisible 
                                ? "translate-y-0" 
                                : scrollDirection === 'down' ? 'translate-y-4' : '-translate-y-4'
                        )}>
                            {/* Mobile version */}
                            <div className="lg:hidden">
                                <p className=" text-gray-900 text-lg leading-relaxed text-center mb-4">
                                    Welcome to MSA at UTS!
                                </p>
                                <p className=" text-gray-900 text-base leading-relaxed text-pretty text-left">
                                We&apos;re a vibrant community celebrating Burmese culture through exciting events and activities. 
                                From study sessions to cultural celebrations, we create spaces where friendships flourish and memories are made. 
                                Join us to experience the best of Burmese traditions and student life!
                                </p> 
                                <div className='text-center mt-16'>

                                    <a
                                        href="https://www.activateuts.com.au/clubs/myanmar-students-association/"
                                        className="inline-block rounded border border-red-600 px-7 py-4 font-mono text-red-600 transition-colors hover:shadow-2xl"
                                        >
                                        Join Us!
                                    </a> 
                                </div>
                            </div>

                            {/* Desktop version */}
                            <div className="hidden lg:block">
                                <p className="font-mono text-gray-900 text-lg leading-relaxed text-justify">
                                    The Myanmar Student Association (MSA) at UTS celebrates Burmese culture while fostering
                                    cultural exchange within the diverse university community. Our events, designed to bring
                                    people together, primarily cater to Burmese students but warmly welcome everyone.
                                </p>
                                <p className="font-mono text-gray-900 text-lg leading-relaxed text-justify mt-6">
                                    Whether you&apos;re interested in exploring Burmese traditions, making new friends, or enjoying a vibrant
                                    social scene, MSA offers something for you. From semester welcomes and study nights to karaoke
                                    sessions, movie nights, and exciting day trips, our activities create opportunities for connection,
                                    unforgettable experiences, and cultural celebration.
                                </p>
                                <p className="font-mono text-gray-900 text-lg leading-relaxed text-justify mt-6 mb-4">
                                    Join us and be part of a community where friendships thrive, and memories are made!
                                </p>
                                
                                <div className="md:text-center lg:m-10">
                                    <a
                                    href="https://www.activateuts.com.au/clubs/myanmar-students-association/"
                                    className="group relative inline-flex items-center overflow-hidden rounded-2xl border-2 border-red-600 bg-white px-8 py-4 font-mono transition-all duration-300"
                                    >
                                    {/* Particle fill effect */}
                                    <span className="absolute left-1 top-1 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600 transition-all duration-500 ease-out group-hover:h-[400%] group-hover:w-[400%]" />
                                    
                                    {/* Main text and arrow */}
                                    <span className="relative z-10 flex items-center gap-3 text-red-600 transition-all duration-300 group-hover:text-white">
                                        <span className="font-semibold tracking-wider">JOIN US</span>
                                        
                                        {/* Visible arrow with animation */}
                                        <svg 
                                        className="h-6 w-6 transform transition-all duration-300 ease-out group-hover:translate-x-1"
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                        >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M13 7l5 5m0 0l-5 5m5-5H6" 
                                        />
                                        </svg>
                                    </span>
                                    </a>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}