'use client';

import HeroSection from '../components/HeroSection';
import TherapistCard from '../components/TherapistCard';
import AIChatBox from '../components/AIChatBox';
import MoodTracker from '../components/MoodTracker';
import MusicTherapy from '../components/MusicTherapy';
import EmergencyResources from '../components/EmergencyResources';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Mock data for therapists
const mockTherapists = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialty: ['Anxiety', 'Depression'],
    rating: 4.9,
    sessions: 120,
    price: 85,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: true,
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: ['Trauma', 'PTSD'],
    rating: 4.8,
    sessions: 98,
    price: 90,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: false,
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialty: ['Relationships', 'Family'],
    rating: 4.7,
    sessions: 156,
    price: 75,
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: true,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
              <span className="block premium-text">How MindfulMate Works</span>
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
              Your all-in-one platform for mental health support and professional therapy services.
            </p>
          </motion.div>
          
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <motion.div 
              className="premium-card hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="h-14 w-14 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center transform -translate-y-7 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div className="px-6 pb-6">
                <h3 className="premium-text text-xl mb-3">24/7 AI Support</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Get immediate support from our AI assistant anytime, anywhere. Perfect for moments when you need someone to talk to.
                </p>
              </div>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div 
              className="premium-card hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="h-14 w-14 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center transform -translate-y-7 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="px-6 pb-6">
                <h3 className="premium-text text-xl mb-3">Elite Therapists</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Connect with licensed therapists specializing in various mental health areas. Book one-on-one sessions at your convenience.
                </p>
              </div>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div 
              className="premium-card hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="h-14 w-14 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center transform -translate-y-7 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="px-6 pb-6">
                <h3 className="premium-text text-xl mb-3">Premium Self-Care Tools</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Access a suite of premium self-care tools including mood tracking, guided meditations, and therapeutic music.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Therapists Section */}
      <section className="py-24 bg-white dark:bg-gray-800 relative">
        <div className="absolute inset-0 bg-grid bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="flex justify-between items-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
                <span className="premium-text">Featured Therapists</span>
              </h2>
              <p className="mt-2 text-xl text-gray-700 dark:text-gray-300">
                Connect with our top-rated mental health professionals
              </p>
            </div>
            <Link 
              href="/therapists"
              className="premium-button group"
            >
              View All
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mockTherapists.map((therapist, index) => (
              <motion.div
                key={therapist.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <TherapistCard {...therapist} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Mood Tracker Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative">
        <div className="absolute inset-0 bg-grid bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
              <span className="block premium-text">Premium Mental Health Tools</span>
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-700 dark:text-gray-300 mx-auto">
              State-of-the-art tools to support your mental health journey
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="premium-text text-2xl mb-6 text-center">Advanced Mood Analytics</h3>
              <div className="premium-card overflow-hidden">
                <MoodTracker />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Emergency Resources Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative">
        <div className="absolute inset-0 bg-grid bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
              <span className="block premium-text">24/7 Emergency Support</span>
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-700 dark:text-gray-300 mx-auto">
              Immediate professional help for crisis situations
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="premium-card"
          >
            <EmergencyResources />
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-center opacity-10" />
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
              <span className="block">Begin Your Premium Mental Health Journey</span>
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-white/90 mx-auto">
              Join thousands who have transformed their lives with MindfulMate&apos;s premium mental health services.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/signup"
                className="premium-button bg-white text-primary-600 hover:bg-gray-50 hover:text-primary-700 text-lg px-8 py-4"
              >
                Start Free Trial
              </Link>
              <Link 
                href="/therapists"
                className="premium-button bg-primary-700 text-white hover:bg-primary-800 text-lg px-8 py-4"
              >
                Meet Our Therapists
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
