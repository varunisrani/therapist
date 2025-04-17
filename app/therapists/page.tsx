'use client';

import { useState } from 'react';
import TherapistCard from '../../components/TherapistCard';
import Link from 'next/link';

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
  {
    id: '4',
    name: 'Dr. James Wilson',
    specialty: ['Stress', 'Burnout', 'Work-Life Balance'],
    rating: 4.9,
    sessions: 210,
    price: 95,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: true,
  },
  {
    id: '5',
    name: 'Dr. Aisha Patel',
    specialty: ['Depression', 'Grief', 'Loss'],
    rating: 4.8,
    sessions: 175,
    price: 80,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: false,
  },
  {
    id: '6',
    name: 'Dr. Robert Kim',
    specialty: ['Addiction', 'Recovery'],
    rating: 4.6,
    sessions: 132,
    price: 85,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: true,
  },
  {
    id: '7',
    name: 'Dr. Maria Gonzalez',
    specialty: ['Anxiety', 'Phobias'],
    rating: 4.7,
    sessions: 145,
    price: 75,
    image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: true,
  },
  {
    id: '8',
    name: 'Dr. David Thompson',
    specialty: ['LGBTQ+', 'Identity'],
    rating: 4.9,
    sessions: 88,
    price: 90,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: false,
  },
  {
    id: '9',
    name: 'Dr. Olivia Martinez',
    specialty: ['Teen Counseling', 'Family Therapy'],
    rating: 4.8,
    sessions: 112,
    price: 80,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    available: true,
  },
];

// Specialty options for filtering
const specialties = [
  'All',
  'Anxiety',
  'Depression',
  'Trauma',
  'PTSD',
  'Relationships',
  'Family',
  'Stress',
  'Addiction',
  'LGBTQ+',
  'Teen Counseling',
];

export default function TherapistsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [availableOnly, setAvailableOnly] = useState(false);

  // Filter therapists based on search, specialty, price, and availability
  const filteredTherapists = mockTherapists.filter((therapist) => {
    // Filter by search term
    const matchesSearch = therapist.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by specialty
    const matchesSpecialty = selectedSpecialty === 'All' || 
      therapist.specialty.some(spec => spec.toLowerCase() === selectedSpecialty.toLowerCase());
    
    // Filter by price range
    const matchesPrice = therapist.price >= priceRange[0] && therapist.price <= priceRange[1];
    
    // Filter by availability
    const matchesAvailability = !availableOnly || therapist.available;
    
    return matchesSearch && matchesSpecialty && matchesPrice && matchesAvailability;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Find Your Therapist
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            Browse our network of licensed therapists specializing in various mental health areas
          </p>
        </div>

        <div className="mt-12 bg-white dark:bg-gray-800 shadow-soft rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="grid gap-6 md:grid-cols-4">
              {/* Search */}
              <div className="col-span-4 md:col-span-1">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Search Therapists
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-3 pr-10 py-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
                    placeholder="Search by name"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Specialty Filter */}
              <div className="col-span-4 md:col-span-1">
                <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Specialty
                </label>
                <select
                  id="specialty"
                  name="specialty"
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-primary-500 focus:border-primary-500 rounded-md"
                >
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="col-span-4 md:col-span-1">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <input
                  type="range"
                  min="50"
                  max="200"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([50, parseInt(e.target.value)])}
                  className="mt-1 w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Availability Filter */}
              <div className="col-span-4 md:col-span-1 flex items-end">
                <div className="flex items-center h-10">
                  <input
                    id="available"
                    name="available"
                    type="checkbox"
                    checked={availableOnly}
                    onChange={(e) => setAvailableOnly(e.target.checked)}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 dark:border-gray-600 rounded"
                  />
                  <label htmlFor="available" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    Available Now
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredTherapists.length > 0 ? (
            filteredTherapists.map((therapist) => (
              <TherapistCard key={therapist.id} {...therapist} />
            ))
          ) : (
            <div className="col-span-3 py-12 text-center">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">No therapists found</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Try adjusting your search filters to find more therapists.
              </p>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-gray-500 dark:text-gray-400">
            Don't see what you're looking for? 
            <Link href="/contact" className="ml-1 text-primary-600 hover:text-primary-500 dark:text-primary-400">
              Contact us for personalized recommendations.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
