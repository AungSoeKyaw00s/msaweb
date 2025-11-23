'use client'
import { useEffect, useState, useRef } from 'react'
import { FaInstagram, FaEnvelope, FaFacebook } from 'react-icons/fa'

export default function Contact() {
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

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <FaFacebook className="h-6 w-6" />,
      url: 'https://www.facebook.com/profile.php?id=61557733141622&mibextid=LQQJ4d',
      hoverColor: 'hover:text-red-600'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="h-6 w-6" />,
      url: 'https://www.instagram.com/uts.msa/',
      hoverColor: 'hover:text-red-600'
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="h-6 w-6" />,
      url: 'mailto:myanmar@activateuts.com.au',
      hoverColor: 'hover:text-red-600'
    }
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative flex min-h-screen items-center bg-white dark:bg-gray-950 px-6 pt-8 lg:pt-0 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl w-full">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 relative w-full">
            {/* Left Section */}
            <div
              className={`flex-1 transform transition-all duration-1000 ease-out
                ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
            >
              <h2 className="font-heading font-bold text-3xl text-black/80 dark:text-white/90 mb-6 transition-colors duration-300">Contact Details</h2>
              <p className="font-sans text-gray-800 dark:text-gray-300 leading-relaxed text-justify transition-colors duration-300">
                The Myanmar Student Association (MSA) aims to foster a vibrant and supportive community for Myanmar students at UTS,
                promoting cultural awareness and unity among its members. MSA serves as a platform for students to connect, celebrate
                their heritage, and share their experiences, regardless of their background or interests.
                MSA strives to create an inclusive environment where students can develop friendships, support one another,
                and contribute to a strong sense of belonging within the university community.
              </p>
            </div>

            {/* Divider */}
            <div
              className={`hidden md:block w-px bg-gray-700 dark:bg-gray-600 self-stretch mx-10 transform transition-all duration-1000 ease-out origin-top
                ${isVisible ? 'scale-y-100 delay-500' : 'scale-y-0'}`}
            />

            {/* Right Section */}
            <div
              className={`flex-1 transform transition-all duration-1000 ease-out
                ${isVisible ? 'translate-x-0 opacity-100 delay-300' : 'translate-x-full opacity-0'}`}
            >
              <h2 className="mb-6 font-heading font-bold text-2xl text-red-600 dark:text-red-500 text-center transition-colors duration-300">
                Let&apos;s Connect with Us!
              </h2>

              {/* Social Links with staggered animation */}
              <div className="flex items-center space-x-8 justify-center">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative transform text-gray-900 dark:text-gray-100 transition-all duration-300 hover:text-red-600 dark:hover:text-red-500 hover:scale-125 hover:-translate-y-2"
                    style={{
                      transform: `translateY(${isVisible ? '0' : '100%'})`,
                      opacity: isVisible ? 1 : 0,
                      transitionDelay: `${800 + index * 200}ms`
                    }}
                    aria-label={link.name}
                  >
                    <div className="absolute -inset-3 bg-red-500/20 dark:bg-red-500/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                      {link.icon}
                    </div>
                  </a>
                ))}
              </div>

              {/* Bottom text with fade up animation */}
              <p
                className="mt-4 font-sans text-sm text-gray-900 dark:text-gray-300 text-center transform transition-all duration-500"
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: '1400ms'
                }}
              >
                Get in touch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}