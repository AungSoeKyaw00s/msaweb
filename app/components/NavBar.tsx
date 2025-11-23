// File: components/Navbar.tsx
'use client'
import { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'
import DarkModeToggle from './DarkModeToggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/90 dark:bg-gray-900/90 px-6 py-4 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
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
          className='rounded-xl ring-2 ring-transparent hover:ring-red-600 transition-all duration-300'
        />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group font-heading font-semibold text-gray-900 dark:text-gray-100 transition-colors hover:text-red-600 dark:hover:text-red-500 hover:underline"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <DarkModeToggle />
        </div>

        {/* Mobile Menu Button & Dark Mode Toggle */}
        <div className="flex items-center space-x-3 md:hidden">
          <DarkModeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-900 dark:text-slate-100"
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
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "absolute left-0 right-0 bg-white dark:bg-gray-900 px-6 py-4 md:hidden border-b border-gray-200 dark:border-gray-800 transition-colors duration-300",
          isOpen ? "block" : "hidden"
        )}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="block py-2 text-sm font-heading font-semibold text-slate-900 dark:text-slate-100 transition-colors hover:text-red-600 dark:hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}