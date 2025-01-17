'use client'
import Image from 'next/image'
import Activatelogo from './svg/Activatelogo'
import { useEffect, useState, useRef } from 'react'

export default function Sponsor() {
    const [isVisible, setIsVisible] = useState(false)
    const [hoverStates, setHoverStates] = useState({ primary: false, secondary: false })
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                } else {
                    setIsVisible(false)
                }
            },
            {
                threshold: 0.2,
                rootMargin: '50px'
            }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    return (
        <section
            id='sponsors'
            ref={sectionRef}
            className="relative min-h-screen pt-20 bg-gradient-to-br from-red-600 via-red-500 to-red-700 px-6 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div
                className={`relative transform transition-all duration-1000 ease-out
                    ${isVisible ? 'translate-x-0 opacity-100 delay-300' : 'translate-x-full opacity-0'}`}
            >
                <div className="mx-auto max-w-7xl w-full bg-white/95 backdrop-blur-sm rounded-xl p-10 shadow-2xl">
                    <h1 className="font-mono text-3xl text-black font-bold lg:text-5xl 2xl:text-6xl 
                        bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent
                        animate-gradient">
                        Our Sponsors
                    </h1>

                    <div className="space-y-12">
                        {/* Primary Sponsors */}
                        <div 
                            className="mt-16"
                            onMouseEnter={() => setHoverStates(prev => ({ ...prev, primary: true }))}
                            onMouseLeave={() => setHoverStates(prev => ({ ...prev, primary: false }))}
                        >
                            <div className="flex items-center space-x-4">
                                <div className="hidden lg:block h-1 flex-grow bg-gradient-to-r from-red-600 to-transparent rounded"></div>
                                <h2 className="font-mono text-xl text-black font-medium lg:text-3xl">
                                    Primary Sponsors
                                </h2>
                                <div className="hidden lg:block h-1 flex-grow bg-gradient-to-l from-red-600 to-transparent rounded"></div>
                            </div>
                            
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                                <div className={`transform transition-all duration-300 ease-out
                                    shadow-lg hover:shadow-2xl bg-black rounded-lg p-4 
                                    hover:scale-105 cursor-pointer
                                    ${hoverStates.primary ? 'scale-102' : ''}`}>
                                    <Activatelogo />
                                </div>
                            </div>
                        </div>

                        {/* Secondary Sponsors */}
                        <div 
                            className="mt-8"
                            onMouseEnter={() => setHoverStates(prev => ({ ...prev, secondary: true }))}
                            onMouseLeave={() => setHoverStates(prev => ({ ...prev, secondary: false }))}
                        >
                            <div className="flex items-center space-x-4">
                                <div className="hidden lg:block h-1 flex-grow bg-gradient-to-r from-red-600 to-transparent rounded"></div>
                                <h2 className="font-mono text-xl text-black font-medium lg:text-3xl">
                                    Secondary Sponsors
                                </h2>
                                <div className="hidden lg:block h-1 flex-grow bg-gradient-to-l from-red-600 to-transparent rounded"></div>
                            </div>

                            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                                <div className={`transform transition-all duration-300 ease-out
                                    shadow-lg hover:shadow-2xl bg-white border rounded-lg p-4
                                    hover:scale-105 cursor-pointer
                                    ${hoverStates.secondary ? 'scale-102' : ''}`}>
                                    <div className="relative w-full h-48 md:h-64 lg:h-44">
                                        <Image
                                            src="/sun.png"
                                            alt="MSA"
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}