'use client'
import { useEffect, useState } from 'react'
import { FaInstagram, FaEnvelope, FaFacebook } from 'react-icons/fa'
import clsx from 'clsx'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <FaFacebook className="h-6 w-6" />,
      url: 'https://www.facebook.com/profile.php?id=61557733141622&mibextid=LQQJ4d',
      hoverColor: 'hover:text-red'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="h-6 w-6" />,
      url: 'https://www.instagram.com/uts.msa/',
      hoverColor: 'hover:text-red'
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="h-6 w-6" />,
      url: 'mailto:myanmar@activateuts.com.au',
      hoverColor: 'hover:text-red'
    }
  ]

  return (
    <section id="contact" className="relative flex min-h-screen items-center bg-white px-6">
      <div className="mx-auto max-w-7xl">
        <div className={clsx(
          "flex flex-col items-center justify-center opacity-0",
          isVisible && "fade-in"
        )}>
          {/* Section Title */}
          <div className='flex flex-col md:flex-row items-start justify-between gap-10 relative'>
            <div className="flex-1">
              <h2 className="font-mono text-3xl text-black/80 mb-6">Contact Details</h2>
              <p className="text-gray-800 leading-relaxed text-justify">
              The Myanmar Student Association (MSA) aims to foster a vibrant and supportive community for Myanmar students at UTS, 
              promoting cultural awareness and unity among its members. MSA serves as a platform for students to connect, celebrate 
              their heritage, and share their experiences, regardless of their background or interests.
              MSA strives to create an inclusive environment where students can develop friendships, support one another, 
              and contribute to a strong sense of belonging within the university community.
              </p>
            </div>
            <div className="hidden md:block w-px bg-gray-700 self-stretch mx-10"></div>
            <div className='flex-1'>

              <h2 className="mb-6 font-mono text-2xl text-red-600 text-center">
                Let&apos;s Connect with Us!
              </h2>

              {/* Social Links */}
              <div className="flex items-center space-x-8 justify-center">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx(
                      "transform text-gray-900 transition-all duration-200",
                      link.hoverColor,
                      "hover:scale-110"
                    )}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>

              {/* Optional: Small text below icons */}
              <p className="mt-4 font-mono text-sm text-gray-900 text-center">
                Get in touch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}