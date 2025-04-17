'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`backdrop-blur-md sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 dark:bg-luxury-black/90 shadow-premium border-b border-luxury-gold/20' 
        : 'bg-white/60 dark:bg-luxury-black/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center group">
                <span className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] group-hover:animate-shine" style={{textShadow: '0 0 1px rgba(0,0,0,0.1)'}}>MindfulMate</span>
              </Link>
            </div>
            <div className="hidden sm:ml-10 sm:flex sm:space-x-10">
              <Link href="/" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-luxury-gold hover:border-luxury-gold transition-all duration-200">
                Home
              </Link>
              <Link href="/therapists" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-luxury-gold hover:border-luxury-gold transition-all duration-200">
                Therapists
              </Link>
              <Link href="/chat" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-luxury-gold hover:border-luxury-gold transition-all duration-200">
                AI Chat
              </Link>
              <Link href="/music" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-luxury-gold hover:border-luxury-gold transition-all duration-200">
                Music Therapy
              </Link>
              <Link href="/contact" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-luxury-gold hover:border-luxury-gold transition-all duration-200">
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="/login" className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-full text-luxury-gold bg-transparent hover:bg-luxury-gold/10 border border-luxury-gold/30 hover:border-luxury-gold transition-all duration-300">
              Sign In
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-500 hover:text-luxury-gold hover:bg-luxury-gold/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-luxury-gold transition-all duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden backdrop-blur-md bg-white/90 dark:bg-luxury-black/90 border-t border-luxury-gold/10">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-luxury-gold/5 hover:border-luxury-gold hover:text-luxury-gold transition-all duration-200">
              Home
            </Link>
            <Link href="/therapists" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-luxury-gold/5 hover:border-luxury-gold hover:text-luxury-gold transition-all duration-200">
              Therapists
            </Link>
            <Link href="/chat" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-luxury-gold/5 hover:border-luxury-gold hover:text-luxury-gold transition-all duration-200">
              AI Chat
            </Link>
            <Link href="/music" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-luxury-gold/5 hover:border-luxury-gold hover:text-luxury-gold transition-all duration-200">
              Music Therapy
            </Link>
            <Link href="/contact" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-luxury-gold/5 hover:border-luxury-gold hover:text-luxury-gold transition-all duration-200">
              Contact
            </Link>
            <Link href="/login" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-luxury-gold/5 hover:border-luxury-gold hover:text-luxury-gold transition-all duration-200">
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
