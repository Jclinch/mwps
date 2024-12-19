'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const navbarRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname(); // Get current path

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 50) {
        setIsScrolledDown(true); // User is scrolling down
      } else {
        setIsScrolledDown(false); // User is scrolling up or at the top
      }

      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollPosition]);

  useEffect(() => {
    // Close the mobile nav when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About' },
    { href: '/practice-area', label: 'Practice Area' },
    { href: '/attorneys', label: 'Attorneys' },
    { href: '/publications', label: 'Publications' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 left-0 w-full z-20 backdrop-blur-md text-white font-semibold shadow-lg transition-transform duration-300 ${
        isScrolledDown ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="container mx-auto px-4 py-1 flex justify-between items-center">
        <div>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="max-md:w-[100px] shadow-amber-600 "
          />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-200 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex space-y-4 md:space-y-0 md:space-x-6 md:items-center`}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block md:inline text-shadow-md ${
                pathname === href
                  ? 'text-amber-600 font-bold' // Active link styles
                  : 'text-amber-200 hover:text-amber-600'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
