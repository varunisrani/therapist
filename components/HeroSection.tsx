'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className="relative bg-white dark:bg-gray-900 overflow-hidden py-20">
      {/* Simple background */}
      <div className="absolute inset-0 bg-grid bg-center opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">

          <motion.h1 
            className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="block mb-2">Your journey to</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent" style={{textShadow: '0 0 1px rgba(0,0,0,0.1)'}}>better mental health</span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg text-gray-600 dark:text-gray-300 sm:mt-8 sm:text-xl max-w-3xl mx-auto md:mt-8 md:text-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Connect with our elite network of licensed therapists, access exclusive mental health resources, and receive personalized support when you need it most. Experience mental healthcare reimagined for the modern world.
          </motion.p>
              
          <motion.div 
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/therapists"
              className="premium-button group flex items-center justify-center px-8 py-4 text-lg font-medium"
            >
              Find a Therapist
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/chat"
              className="premium-button group flex items-center justify-center px-8 py-4 text-lg font-medium bg-white/5 border border-primary/20 text-primary hover:bg-primary/5"
            >
              <span className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
              Chat with AI Assistant
            </Link>
          </motion.div>
              
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="inline-flex items-center justify-center bg-primary/5 px-4 py-2 rounded-full">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs text-white font-medium mr-2">5k+</div>
              <span className="text-base text-gray-600 dark:text-gray-400">Trusted by 5,000+ clients worldwide</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

