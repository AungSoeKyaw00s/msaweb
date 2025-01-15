// File: components/Navbar.tsx
'use client'
import { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 px-6 py-4 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link
          href='#home'
          className="group text-sm text-slate-300 transition-colors hover:text-red-600">
        <Image
          src="/msa.jpg"
          width={50}
          height={50}
          alt="MSA"
        />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group text-sm text-gray-900 transition-colors hover:text-red-600"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-300 md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "absolute left-0 right-0 bg-black px-6 py-4 md:hidden",
          isOpen ? "block" : "hidden"
        )}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="block py-2 text-sm text-slate-300 transition-colors hover:text-red-600"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}