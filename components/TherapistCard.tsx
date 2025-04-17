'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type TherapistProps = {
  id: string;
  name: string;
  specialty: string[];
  rating: number;
  sessions: number;
  price: number;
  image: string;
  available: boolean;
};

export default function TherapistCard({ id, name, specialty, rating, sessions, price, image, available }: TherapistProps) {
  return (
    <Link href={`/therapists/${id}`} className="block">
      <motion.div
        className="group relative premium-card hover:scale-[1.02] transition-all duration-500 cursor-pointer"
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
      {/* Premium gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl" />

      <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

        {available && (
          <motion.div
            className="absolute top-4 right-4 premium-button bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium px-4 py-2 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
              Available Now
            </span>
          </motion.div>
        )}

        <div className="absolute bottom-4 left-4 flex items-center space-x-2">
          <motion.div
            className="flex items-center bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <svg className="w-4 h-4 text-primary mr-1.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-medium">{rating.toFixed(1)}</span>
          </motion.div>

          <motion.div
            className="bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="font-medium">{sessions}</span> sessions
          </motion.div>
        </div>
      </div>

      <div className="p-6">
        <motion.h3
          className="text-2xl font-bold premium-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {name}
        </motion.h3>

        <motion.div
          className="flex flex-wrap gap-2 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {specialty.map((spec, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
            >
              {spec}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="mt-6 flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-baseline">
            <span className="text-2xl font-bold premium-text">
              ${price}
            </span>
            <span className="ml-1 text-sm text-gray-700 dark:text-gray-400">/session</span>
          </div>

          <button
            className="premium-button group flex items-center px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </span>
            View Profile
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </motion.div>
    </Link>
  );
}
