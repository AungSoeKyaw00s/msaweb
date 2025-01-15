'use client'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center bg-black px-6 pt-24">
      <div className="mx-auto max-w-7xl">
        <div
          className={clsx(
            "space-y-5 opacity-0",
            isLoaded && "fade-in"
          )}
        >
          <p className="font-mono text-5xl font-bold text-gray-200 sm:text-6xl lg:text-7xl">
            Myanmar Student Association          
          </p>

          <h1 className='font-medium text-2xl'>
              We strive to create a vibrant community for Myanmar students, 
              promoting cultural exchange and providing support for academic success 
              while preserving our rich heritage.
          </h1>

          <div className={clsx(
            "pt-8 opacity-0",
            isLoaded && "fade-in stagger-1"
          )}>
            <a
              href="#mission"
              className="inline-block rounded border border-red-600 px-7 py-4 font-mono text-red-600 transition-colors hover:bg-[#64ffda]/10"
            >
              Explore Us!
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}