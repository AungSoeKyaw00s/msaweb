'use client'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { FaInstagram } from 'react-icons/fa'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])
  
  return (
    <section className="relative flex min-h-screen md:justify-center items-center bg-gradient-to-br from-white via-red-50/30 to-white dark:from-gray-950 dark:via-red-950/20 dark:to-gray-950 px-6 pt-24 transition-colors duration-300 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 dark:bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/10 dark:bg-red-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="hidden md:block relative mx-auto md:m-20 xl:m-16 z-10">
        {/* Yellow layer - bottom */}
        <div className="absolute inset-0 translate-x-8 translate-y-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl shadow-lg"></div>

        {/* Green layer - middle */}
        <div className="absolute inset-0 translate-x-4 translate-y-4 bg-gradient-to-br from-green-600 to-green-700 rounded-3xl shadow-lg"></div>
        <div className='relative bg-gradient-to-br from-red-500 via-red-600 to-red-700 p-20 rounded-3xl shadow-2xl hover:shadow-3xl hover:shadow-red-500/50 transition-all duration-500 hover:scale-[1.02] group'>
          <div className="max-w-7xl ">
            {/* Myanmar Greeting */}
            <div className={clsx(
              "mb-8 opacity-0",
              isLoaded && "bounce-slide"
            )}>
              <p className="font-heading text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
                မင်္ဂလာပါ။
              </p>
            </div>

            <div
              className={clsx(
                "space-y-5 opacity-50",
                isLoaded && "fade-in"
              )}
            >
              <div className='mt-10'>
                <p className="font-heading text-3xl text-white font-bold lg:text-5xl 2xl:text-6xl">
                  The &quot;HOME&quot; away from home for Myanmar students.
                </p>
                <p className="font-heading font-semibold text-white text-right text-2xl lg:text-3xl 2xl:text-4xl">
                  - UTS Myanmar Student Association
                </p>`
              </div>
              <p className='font-sans font-medium text-2xl pt-4 text-white'>
                Where tradition meets innovation. Join our thriving community of Myanmar students
                as we celebrate our heritage, forge lasting friendships, and build tomorrow&apos;s leaders.
                <br></br>Your journey begins here.
              </p>
              <div className={clsx(
                "pt-8 opacity-0",
                isLoaded && "fade-in stagger-1"
              )}>
                <div className='flex flew-start space-x-6'>
                  <a
                    href="#about"
                    className="inline-block rounded-2xl border-2 border-white px-7 py-4 font-heading text-white font-semibold transition-all duration-300 hover:bg-white hover:text-red-600 hover:scale-105 hover:shadow-lg ripple-effect"
                  >
                    Explore Us
                  </a>
                  <a
                    key="Instagram"
                    href="https://www.instagram.com/uts.msa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform text-white transition-all duration-300 hover:scale-125 hover:rotate-12 hover:text-yellow-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="h-full w-auto" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className='block md:hidden mx-auto'>
        <div className="max-w-7xl ">
            {/* Myanmar Greeting */}
            <div className={clsx(
              "mb-8 opacity-0",
              isLoaded && "bounce-slide"
            )}>
              <p className="font-heading text-5xl font-bold text-black dark:text-white sm:text-6xl lg:text-7xl transition-colors duration-300">
                မင်္ဂလာပါ။
              </p>
            </div>

            <div
              className={clsx(
                "space-y-5 opacity-50",
                isLoaded && "fade-in"
              )}
            >
              <p className="font-heading text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-6xl 2xl:text-9xl transition-colors duration-300">
                Discover Your &quot;Home&quot; Away From Home.
              </p>
              <p className="font-heading font-semibold text-wrap text-right text-gray-900 dark:text-gray-100 text-2xl 2xl:text-7xl transition-colors duration-300">
                - UTS Myanmar Student Association
              </p>
              <p className='font-sans font-medium text-xl text-balance text-gray-800 dark:text-gray-200 transition-colors duration-300'>
                Where tradition meets innovation. Join our thriving community of Myanmar students
                as we celebrate our heritage, forge lasting friendships, and build tomorrow&apos;s leaders.
                Your journey begins here.
              </p>
              <div className={clsx(
                "pt-8 opacity-0",
                isLoaded && "fade-in stagger-1"
              )}>
                <div className='flex flew-start space-x-6'>
                  <a
                    href="#about"
                    className="inline-block rounded-2xl border-2 border-red-600 dark:border-red-500 text-red-600 dark:text-red-500 px-7 py-4 font-heading font-semibold transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-red-600 dark:hover:bg-red-500 dark:hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 ripple-effect"
                  >
                    EXPLORE
                  </a>
                  <a
                    key="Instagram"
                    href="https://www.instagram.com/uts.msa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 dark:text-red-500 transition-all duration-300 hover:scale-125 hover:rotate-12"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="h-full w-auto" />
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}