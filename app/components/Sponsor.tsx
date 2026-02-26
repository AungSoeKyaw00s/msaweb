'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
// Import your SVG component - adjust the path as needed
import Activatelogo from './svg/Activatelogo' // Replace with your actual SVG component path

// Update interface to handle both SVG component and image path
interface Sponsor {
  name: string
  logo: string | React.ComponentType
  description: string
  website: string
  isSVG?: boolean
  location?: string
  benefits?: string[]
}

// Split sponsors into Present and Previous for the tabbed UI
const presentSponsors: Sponsor[] = [
  {
    name: 'ActivateUTS',
    logo: Activatelogo, // Your imported SVG component
    description: 'ActivateUTS supports the Myanmar Student Society by providing resources and opportunities to celebrate culture, connect members, and enhance their university experience.',
    website: 'https://www.activateuts.com.au',
    isSVG: true
  },
  {
    name: 'Dizzy Bird',
    logo: '/db.png',
    description: 'A vibrant café and bar in Chippendale known for its eclectic atmosphere and creative menu — a great spot to hang out between classes.',
    website: 'https://www.dizzybirdsydney.com/',
    isSVG: false,
    location: '4 Central Park Ave, Chippendale NSW 2008',
    benefits: ['20% discount']
  },
  {
    name: 'Wave',
    logo: '/wave.png',
    description: "Sydney's premier nightclub in the heart of Haymarket, offering unforgettable nights out with great music and atmosphere.",
    website: 'https://wavesydney.com/',
    isSVG: false,
    location: '396 Pitt St, Haymarket NSW 2000',
    benefits: ['Free entry before midnight', '2 champagne bottles with any table booking']
  },
  {
    name: 'Blue Heaven',
    logo: '/bh.png',
    description: 'An authentic Burmese restaurant in Hurstville serving traditional home-style flavours in a warm and welcoming setting.',
    website: 'https://www.instagram.com/blueheaven_hurstville?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    isSVG: false,
    location: '238 Forest Road, Hurstville NSW 2220',
    benefits: ['10% discount (cash payment)', '5% discount (card payment)']
  },
  {
    name: 'Golden Mandalay',
    logo: '/gm.png',
    description: 'Your go-to Myanmar grocery store in Auburn, stocking a wide range of authentic ingredients available for retail and wholesale.',
    website: 'https://goldenmandalay.com.au/',
    isSVG: false,
    location: '2/2 Melissa St, Auburn NSW 2144',
    benefits: ['5% discount']
  }
]

const previousSponsors: Sponsor[] = [
  {
    name: 'TikTok Now',
    logo: '/tiktok.jpg',
    description: 'TikTok Now connects UTS Myanmar students through creating a vibrant virtual community that strengthens the Myanmar Student Society\'s bonds beyond campus events while studying abroad in Sydney.',
    website: 'https://now.tiktok.com',
    isSVG: false
  },
  {
    name: 'Sun\'s Burmese Kitchen',
    logo: '/sun.png',
    description: 'Sun\'s Burmese Kitchen supports the UTS Myanmar Student Society with discounts',
    website: 'https://www.sunsburmesekitchen.com.au',
    isSVG: false
  }
]

// Create a component to render either SVG or Image
const LogoRenderer: React.FC<{ sponsor: Sponsor; compact?: boolean }> = ({ sponsor, compact }) => {
  if (sponsor.isSVG) {
    const SVGComponent = sponsor.logo as React.ComponentType
    return (
      <div className={`${compact ? 'h-14' : 'h-20 lg:h-28'} w-full flex items-center justify-center mb-3`}>
        <div className='bg-gradient-to-br from-gray-900 to-black dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl shadow-inner transition-all duration-300 group-hover:shadow-lg'>
          <div className={`${compact ? 'w-24' : 'w-36 lg:w-44'} transition-transform duration-300 group-hover:scale-105`}>
            <SVGComponent />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${compact ? 'h-14' : 'h-20 lg:h-28'} w-full mb-3`}>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl flex items-center justify-center p-3">
        <div className="relative w-full h-full">
          <Image
            src={sponsor.logo as string}
            alt={`${sponsor.name} logo`}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  )
}

export default function Sponsors() {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [activeTab, setActiveTab] = useState<'present' | 'previous'>('present')
  const [selectedSponsor, setSelectedSponsor] = useState<Sponsor | null>(null)
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
      className="relative flex min-h-screen items-center bg-red-600 dark:bg-red-800 px-4 pt-24 lg:px-6 py-16 overflow-hidden transition-colors duration-300"
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
            className={`w-full text-center mb-12 lg:mb-16 transform transition-all duration-1000 ease-out
              ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}
          >
            <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm mb-6 font-heading font-semibold shadow-lg">
              Our Partners in Success
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl text-white mb-6 lg:mb-8 font-bold">Our Valued Sponsors</h2>
            <p className="font-sans text-red-50/90 max-w-2xl mx-auto leading-relaxed text-base lg:text-lg">
              We are incredibly grateful for the support of our sponsors who help make our community events
              and initiatives possible.
            </p>
          </div>

          {/* Tabs */}
          <div className="w-full flex items-center justify-center mb-10 lg:mb-12">
            <div className="inline-flex rounded-2xl bg-white/15 backdrop-blur-md p-1.5 shadow-xl border border-white/20">
              <button
                onClick={() => setActiveTab('present')}
                className={`px-8 py-3 rounded-xl text-sm font-heading font-semibold transition-all duration-300 ${
                  activeTab === 'present'
                    ? 'bg-white text-red-600 shadow-lg scale-105'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                aria-pressed={activeTab === 'present'}
              >
                Current Sponsors
              </button>
              <button
                onClick={() => setActiveTab('previous')}
                className={`px-8 py-3 rounded-xl text-sm font-heading font-semibold transition-all duration-300 ${
                  activeTab === 'previous'
                    ? 'bg-white text-red-600 shadow-lg scale-105'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                aria-pressed={activeTab === 'previous'}
              >
                Past Sponsors
              </button>
            </div>
          </div>

          {/* Sponsors Grid */}
          {(() => {
            const activeSponsors = activeTab === 'present' ? presentSponsors : previousSponsors

            return (
              <div className="w-full mb-12 lg:mb-16 transition-all duration-500">
                {/* Mobile: minimal logo grid */}
                <div className="grid grid-cols-3 gap-4 md:hidden">
                  {activeSponsors.map((sponsor, index) => (
                    <div
                      key={sponsor.name}
                      className={`flex flex-col items-center gap-2 transition-all duration-500
                        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                      style={{ transitionDelay: `${index * 80}ms` }}
                    >
                      {/* Logo tile */}
                      <div className={`w-full aspect-square flex items-center justify-center rounded-2xl p-3 shadow-sm
                        ${sponsor.isSVG ? 'bg-gray-900' : 'bg-white'}`}>
                        {sponsor.isSVG ? (
                          (() => {
                            const SVGComponent = sponsor.logo as React.ComponentType
                            return (
                              <div className="w-full flex items-center justify-center">
                                <SVGComponent />
                              </div>
                            )
                          })()
                        ) : (
                          <div className="relative w-full h-full">
                            <Image
                              src={sponsor.logo as string}
                              alt={sponsor.name}
                              fill
                              className="object-contain"
                              sizes="33vw"
                            />
                          </div>
                        )}
                      </div>
                      {/* Learn more button */}
                      <button
                        onClick={() => setSelectedSponsor(sponsor)}
                        className="w-full text-xs font-heading font-semibold text-white/80 bg-white/10 border border-white/20 rounded-lg py-1.5 active:scale-95 transition-all duration-200"
                      >
                        Learn more
                      </button>
                    </div>
                  ))}
                </div>

                {/* Mobile modal */}
                {selectedSponsor && (
                  <div
                    className="fixed inset-0 z-50 flex items-end md:hidden"
                    onClick={() => setSelectedSponsor(null)}
                  >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                    {/* Sheet */}
                    <div
                      className="relative w-full bg-white dark:bg-gray-900 rounded-t-3xl px-6 pt-5 pb-10 shadow-2xl"
                      onClick={e => e.stopPropagation()}
                    >
                      {/* Drag handle */}
                      <div className="w-10 h-1 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-5" />

                      {/* Close */}
                      <button
                        onClick={() => setSelectedSponsor(null)}
                        className="absolute top-4 right-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                        aria-label="Close"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>

                      {/* Logo + name */}
                      <div className="flex items-center gap-4 mb-5">
                        <div className={`relative w-14 h-14 rounded-xl shrink-0 flex items-center justify-center p-2 ${selectedSponsor.isSVG ? 'bg-gray-900' : 'bg-gray-100 dark:bg-gray-800'}`}>
                          {selectedSponsor.isSVG ? (
                            (() => {
                              const SVGComponent = selectedSponsor.logo as React.ComponentType
                              return <SVGComponent />
                            })()
                          ) : (
                            <Image src={selectedSponsor.logo as string} alt={selectedSponsor.name} fill className="object-contain p-2" sizes="56px" />
                          )}
                        </div>
                        <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-white">{selectedSponsor.name}</h3>
                      </div>

                      {/* Description */}
                      <p className="font-sans text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        {selectedSponsor.description}
                      </p>

                      {/* Location */}
                      {selectedSponsor.location && (
                        <p className="font-sans text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5 mb-4">
                          <svg className="w-3.5 h-3.5 shrink-0 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                          </svg>
                          {selectedSponsor.location}
                        </p>
                      )}

                      {/* Benefits */}
                      {selectedSponsor.benefits && selectedSponsor.benefits.length > 0 && (
                        <div className="mb-6">
                          <p className="font-sans text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                            Show digital membership for:
                          </p>
                          <ul className="space-y-1.5">
                            {selectedSponsor.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm font-sans text-gray-700 dark:text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* CTA */}
                      <a
                        href={selectedSponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 bg-red-600 text-white rounded-xl font-heading font-semibold text-sm active:scale-95 transition-all duration-200"
                      >
                        Visit Website
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                )}

                {/* Desktop: full detail cards */}
                <div className={`hidden md:grid gap-8 lg:gap-10 w-full ${
                  activeSponsors.length === 1
                    ? 'grid-cols-1 max-w-2xl mx-auto'
                    : activeSponsors.length === 2
                    ? 'md:grid-cols-2'
                    : 'md:grid-cols-2 lg:grid-cols-3'
                }`}>
                  {activeSponsors.map((sponsor, index) => (
                    <div
                      key={sponsor.name}
                      className={`group relative bg-gradient-to-br from-white via-white to-red-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-red-950/20
                        backdrop-blur-sm p-8 lg:p-10 rounded-3xl shadow-2xl transform transition-all duration-700 ease-out
                        hover:scale-[1.03] hover:shadow-3xl hover:shadow-red-500/20 border border-white/50 dark:border-gray-800
                        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/20 to-transparent rounded-bl-full"></div>

                      <div className="relative flex flex-col items-center">
                        <LogoRenderer sponsor={sponsor} />

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-red-300 dark:via-red-700 to-transparent mb-6"></div>

                        <h3 className="font-heading text-xl lg:text-2xl font-bold bg-gradient-to-r from-red-600 to-red-500 dark:from-red-500 dark:to-red-400 bg-clip-text text-transparent mb-4 text-center">
                          {sponsor.name}
                        </h3>

                        <p className="font-sans text-gray-700 dark:text-gray-300 text-center text-sm lg:text-base mb-4 leading-relaxed">
                          {sponsor.description}
                        </p>

                        {sponsor.location && (
                          <p className="font-sans text-gray-500 dark:text-gray-400 text-center text-xs lg:text-sm mb-4 flex items-center justify-center gap-1.5">
                            <svg className="w-3.5 h-3.5 shrink-0 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>
                            {sponsor.location}
                          </p>
                        )}

                        {sponsor.benefits && sponsor.benefits.length > 0 && (
                          <div className="w-full mb-6">
                            <p className="font-sans text-xs font-semibold text-gray-500 dark:text-gray-400 text-center uppercase tracking-wide mb-2">
                              Show digital membership for:
                            </p>
                            <ul className="space-y-1">
                              {sponsor.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-center justify-center gap-2 text-sm font-sans text-gray-700 dark:text-gray-300">
                                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <a
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600
                            text-white rounded-xl font-heading text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50"
                        >
                          <span className="mr-2">Visit Website</span>
                          <svg
                            className="w-5 h-5 transform transition-transform duration-300 group-hover/link:translate-x-1"
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
              </div>
            )
          })()}

          {/* Call to Action */}
          <div
            className={`w-full transform transition-all duration-1000 ease-out
              ${isVisible ? 'translate-y-0 opacity-100 delay-700' : 'translate-y-10 opacity-0'}`}
          >
            <div className="relative bg-gradient-to-br from-white via-white to-red-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-red-950/20 backdrop-blur-sm p-8 lg:p-12 rounded-3xl shadow-2xl max-w-3xl mx-auto border border-white/50 dark:border-gray-800 overflow-hidden group hover:shadow-3xl hover:shadow-red-500/30 transition-all duration-500">
              {/* Decorative corner accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/20 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-red-500/20 to-transparent rounded-tr-full"></div>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="text-center mb-6 lg:mb-8">
                  <div className="inline-block mb-4">
                    <div className="w-16 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
                  </div>
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold bg-gradient-to-r from-red-600 to-red-500 dark:from-red-500 dark:to-red-400 bg-clip-text text-transparent mb-4">
                    Become a Sponsor
                  </h3>
                  <p className="font-sans text-gray-800 dark:text-gray-300 text-base lg:text-lg leading-relaxed max-w-xl mx-auto transition-colors duration-300">
                    Join us in supporting the Myanmar student community at UTS. Your partnership can make a significant impact and help us create more opportunities for our members.
                  </p>
                </div>

                <div className='text-center'>
                  <a
                    href="mailto:myanmar@activateuts.com.au"
                    className="group/cta inline-flex items-center bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-heading font-semibold text-base lg:text-lg shadow-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="mr-3">Contact Us</span>
                    <svg
                      className="w-5 h-5 transform transition-transform duration-300 group-hover/cta:translate-x-1"
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
      </div>
    </section>
  )
}