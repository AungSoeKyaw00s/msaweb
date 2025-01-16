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
    <section className="relative flex min-h-screen items-center bg-white px-6 pt-24">
      <div className='hidden md:block mx-auto bg-red-500 p-20 rounded-3xl shadow-2xl hover:shadow-xl hover:shadow-black/30'>
        <div className="max-w-7xl ">
          {/* Myanmar Greeting */}
          <div className={clsx(
            "mb-8 opacity-0",
            isLoaded && "bounce-slide"
          )}>
            <p className="font-mono text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
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
              <p className="font-mono text-3xl text-white font-bold lg:text-5xl 2xl:text-6xl">
                Discover Your Home Away From Home        
              </p>
              <p className="font-mono font-semibold text-white text-right text-2xl lg:text-3xl 2xl:text-4xl">
                - UTS Myanmar Student Association          
              </p>`
            </div>
            <p className='font-medium text-2xl pt-4 text-white'>
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
                  href="#team"
                  className="inline-block rounded-2xl border-2 border-white px-7 py-4 font-mono text-white transition-colors hover:text-black hover:border-black"
                >
                  Explore Us!
                </a>
                <a
                  key="Instagram"
                  href="https://www.instagram.com/uts.msa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform text-white transition-all duration-300 hover:text-black hover:border-black"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-full w-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='block md:hidden mx-auto'>
        <div className="max-w-7xl ">
            {/* Myanmar Greeting */}
            <div className={clsx(
              "mb-8 opacity-0",
              isLoaded && "bounce-slide"
            )}>
              <p className="font-mono text-5xl font-bold text-black sm:text-6xl lg:text-7xl">
                မင်္ဂလာပါ။
              </p>
            </div>

            <div
              className={clsx(
                "space-y-5 opacity-50",
                isLoaded && "fade-in"
              )}
            >
              <p className="font-mono text-3xl font-bold text-gray-900 sm:text-6xl 2xl:text-9xl">
                Discover Your Home Away From Home        
              </p>
              <p className="font-mono font-semibold text-wrap text-gray-900 text-2xl 2xl:text-7xl">
                UTS Myanmar Student Association          
              </p>
              <p className='font-medium text-xl text-balance'>
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
                    href="#team"
                    className="inline-block rounded-2xl border-2 border-black text-black  px-7 py-4 font-mono  transition-colors hover:text-red-600 hover:border-red-600"
                  >
                    Explore Us!
                  </a>
                  <a
                    key="Instagram"
                    href="https://www.instagram.com/uts.msa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-black"
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