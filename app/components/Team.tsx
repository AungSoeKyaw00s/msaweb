'use client'
import { useEffect, useState, useRef } from 'react'

export default function Team() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            // When section enters viewport
            if (entry.isIntersecting) {
              setIsVisible(true)
            } else {
              // Reset animation when section leaves viewport
              setIsVisible(false)
            }
          },
          {
            // Trigger when section is 20% visible
            threshold: 0.2,
            // Start observing slightly before the section comes into view
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

    return(
        <section 
            id='team'
            ref={sectionRef}
            className="relative flex min-h-screen bg-white pt-20 px-6 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <div 
                className={`flex-1 transform transition-all duration-1000 ease-out
                    ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
                >
                    <div className="mx-auto max-w-7xl w-full">
                        Hello This is Team section!
                        <p className='text-2xl font-bold'>
                            Meet with our team!
                        </p>
                    </div>
                </div>
                
        </section>
    )

}