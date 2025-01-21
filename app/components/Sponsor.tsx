'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
// Import your SVG component - adjust the path as needed
import Activatelogo from './svg/Activatelogo' // Replace with your actual SVG component path

// Update interface to handle both SVG component and image path
interface Sponsor {
  name: string
  logo: string | React.ComponentType // This allows the logo to be either a string path or a component
  description: string
  website: string
  isSVG?: boolean // Flag to determine if the logo is an SVG component
}

const sponsors: Sponsor[] = [
  {
    name: 'ActivateUTS',
    logo: Activatelogo, // Your imported SVG component
    description: 'ActivateUTS supports the Myanmar Student Society by providing resources and opportunities to celebrate culture, connect members, and enhance their university experience.',
    website: 'https://www.activateuts.com.au',
    isSVG: true
  },
  {
    name: 'Sun\'s Burmese Kitchen',
    logo: '/sun.png',
    description: 'Sun\'s Burmese Kitchen in Sydney offers authentic Burmese cuisine and supports the UTS Myanmar Student Society with discounts, providing an affordable spot for students to connect and enjoy traditional meals.',
    website: 'https://www.sunsburmesekitchen.com.au',
    isSVG: false
  }
]

// Create a component to render either SVG or Image
const LogoRenderer: React.FC<{ sponsor: Sponsor }> = ({ sponsor }) => {
  if (sponsor.isSVG) {
    const SVGComponent = sponsor.logo as React.ComponentType
    return (
      <div className="h-16 lg:h-24 w-full flex items-center justify-center">
        <div className='bg-black p-4 rounded-md'>
          <div className="w-32 lg:w-40 "> {/* Constrain SVG width */}
            <SVGComponent />
          </div>
        </div>
        
      </div>
    )
  }

  return (
    <div className="relative h-16 lg:h-24 w-full">
      <Image
        src={sponsor.logo as string}
        alt={`${sponsor.name} logo`}
        fill
        className="object-contain transition-transform duration-300 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}

export default function Sponsors() {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const sectionRef = useRef<HTMLElement | null>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
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
      id="sponsors" 
      ref={sectionRef}
      className="relative flex min-h-screen items-center bg-red-600 px-4 pt-24 lg:px-6 py-16 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-500 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl w-full relative z-10">
        <div className="flex flex-col items-center justify-center">
          {/* Header */}
          <div 
            className={`w-full text-center mb-8 lg:mb-16 transform transition-all duration-1000 ease-out
              ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}
          >
            <span className="inline-block px-4 py-1 bg-red-700 text-white rounded-full text-sm mb-4 font-mono">
              Our Partners in Success
            </span>
            <h2 className="font-mono text-3xl lg:text-4xl text-white mb-4 lg:mb-6">Our Valued Sponsors</h2>
            <p className="text-red-100 max-w-2xl mx-auto leading-relaxed text-sm lg:text-base">
              We are incredibly grateful for the support of our sponsors who help make our community events 
              and initiatives possible.
            </p>
          </div>

          {/* Sponsors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-6 lg:gap-8 w-full mb-8 lg:mb-16">
            {sponsors.map((sponsor, index) => (
              <div
                key={sponsor.name}
                className={`group bg-white/95 backdrop-blur-sm p-6 lg:p-8 rounded-xl lg:rounded-2xl shadow-xl transform transition-all duration-1000 ease-out hover:scale-105
                  ${isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'}`}
                style={{
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <div className="flex flex-col items-center">
                  <LogoRenderer sponsor={sponsor} />
                  <div className="h-px w-12 lg:w-16  mb-4 lg:mb-6" />
                  <h3 className="font-mono text-lg lg:text-xl text-red-600 mb-3 lg:mb-4">{sponsor.name}</h3>
                  <p className="text-gray-700 text-center text-sm lg:text-base mb-4 lg:mb-6 leading-relaxed">
                    {sponsor.description}
                  </p>
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-900 hover:text-red-600 transition-colors duration-300 text-sm font-mono group"
                  >
                    <span className="mr-2">Visit Website</span>
                    <svg 
                      className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div 
            className={`w-full transform transition-all duration-1000 ease-out
              ${isVisible ? 'translate-y-0 opacity-100 delay-700' : 'translate-y-10 opacity-0'}`}
          >
            <div className="bg-white/95 backdrop-blur-sm p-6 lg:p-8 rounded-xl lg:rounded-2xl shadow-xl max-w-2xl mx-auto">
              <h3 className="font-mono text-xl lg:text-2xl text-red-600 mb-3 lg:mb-4">Become a Sponsor</h3>
              <p className="text-gray-800 mb-4 lg:mb-6 text-sm lg:text-base">
                Join us in supporting the Myanmar student community at UTS. Your partnership can make a significant impact.
              </p>
              <div className='text-center'>
                <a
                  href="mailto:myanmar@activateuts.com.au"
                  className="inline-flex items-center  bg-red-600 text-white px-6 lg:px-8 py-2 lg:py-3 rounded-lg lg:rounded-xl hover:bg-red-700 transition-all duration-300 group"
                >
                  <span className="mr-2 ">Contact Us</span>
                  <svg 
                    className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}