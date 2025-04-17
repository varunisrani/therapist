'use client';

import AIChatBox from '../../components/AIChatBox';
import MusicTherapy from '../../components/MusicTherapy';
import { motion } from 'framer-motion';

export default function ToolsPage() {
  return (
    <div className="min-h-screen relative py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      
      {/* Page Header */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-grid bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent sm:text-6xl">
              <span className="block">Mental Health Tools</span>
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
              Premium tools to support your mental health journey
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* AI Chat Section */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative">
        <div className="absolute inset-0 bg-grid bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              24/7 AI Mental Health Assistant
            </h2>
            <p className="mt-2 text-xl text-gray-600 dark:text-gray-300">
              Get immediate support from our AI assistant anytime, anywhere. Perfect for moments when you need someone to talk to.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="premium-card overflow-hidden"
          >
            <AIChatBox />
          </motion.div>
        </div>
      </section>
      
      {/* Music Therapy Section */}
      <section className="py-12 bg-white dark:bg-gray-800 relative">
        <div className="absolute inset-0 bg-grid bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Premium Music Therapy
            </h2>
            <p className="mt-2 text-xl text-gray-600 dark:text-gray-300">
              Immerse yourself in therapeutic sounds crafted by experts to enhance your mental wellbeing
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="premium-card overflow-hidden"
          >
            <MusicTherapy />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
