'use client'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function About() {
    const [isLoaded, setIsLoaded] = useState(false)
    
    useEffect(() => {
        setIsLoaded(true)
      }, [])
    return (
        <section id="about" className="relative flex min-h-screen items-center bg-white px-6">
            <div className="mx-auto max-w-7xl">
                <div
                    className={clsx(
                    "space-y-5 opacity-0",
                    isLoaded && "fade-in"
                    )}
                    >
                    <div className='flex flex-col items-center gap-8'>

                        <Image
                        src="/msa.jpg"
                        width={400}
                        height={400}
                        alt="MSA"
                        >
                        </Image>
                        <p className="font-mono text-gray-900 text-justify">
                            The Myanmar Student Association (MSA) at UTS celebrates Burmese culture while fostering 
                            cultural exchange within the diverse university community. Our events, designed to bring 
                            people together, primarily cater to Burmese students but warmly welcome everyone. Whether 
                            you&apos;re interested in exploring Burmese traditions, making new friends, or enjoying a vibrant
                            social scene, MSA offers something for you. From semester welcomes and study nights to karaoke 
                            sessions, movie nights, and exciting day trips, our activities create opportunities for connection, 
                            unforgettable experiences, and cultural celebration. Join us and be part of a community where friendships thrive, and memories are made!
                        </p>
                    </div   >
                </div>
            </div>
        </section>
    )
}