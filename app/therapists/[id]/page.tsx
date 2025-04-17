'use client';

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
// Mock therapist data - in production, this would come from an API
const therapists = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    title: "Clinical Psychologist",
    specialties: ["Anxiety", "Depression"],
    rating: 4.9,
    reviews: 127,
    experience: 12,
    price: 85,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Dr. Sarah Johnson is a compassionate clinical psychologist with over a decade of experience helping individuals overcome mental health challenges. She specializes in evidence-based therapies for anxiety, depression, and trauma.",
    availableSlots: {
      "2025-04-20": ["9:00 AM", "10:00 AM", "2:00 PM", "3:00 PM"],
      "2025-04-21": ["10:00 AM", "11:00 AM", "1:00 PM", "4:00 PM"],
      "2025-04-22": ["9:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"],
      "2025-04-23": ["10:00 AM", "1:00 PM", "3:00 PM"],
      "2025-04-24": ["9:00 AM", "11:00 AM", "2:00 PM"],
      "2025-04-25": ["10:00 AM", "1:00 PM", "4:00 PM"],
    },
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    title: "Trauma Specialist",
    specialties: ["Trauma", "PTSD"],
    rating: 4.8,
    reviews: 98,
    experience: 10,
    price: 90,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Dr. Michael Chen specializes in helping clients heal from traumatic experiences with evidence-based approaches. He creates a safe space for recovery and growth.",
    availableSlots: {
      "2025-04-20": ["9:00 AM", "10:00 AM"],
      "2025-04-21": ["10:00 AM", "11:00 AM", "1:00 PM"],
      "2025-04-22": ["9:00 AM", "11:00 AM"],
      "2025-04-23": ["10:00 AM", "1:00 PM"],
      "2025-04-24": ["9:00 AM", "11:00 AM"],
      "2025-04-25": ["10:00 AM", "1:00 PM"],
    },
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    title: "Relationship Counselor",
    specialties: ["Relationships", "Family"],
    rating: 4.7,
    reviews: 156,
    experience: 8,
    price: 75,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Dr. Emily Rodriguez helps couples and families strengthen their relationships through better communication and understanding.",
    availableSlots: {
      "2025-04-20": ["10:00 AM", "2:00 PM", "3:00 PM"],
      "2025-04-21": ["11:00 AM", "1:00 PM", "4:00 PM"],
      "2025-04-22": ["9:00 AM", "2:00 PM", "3:00 PM"],
      "2025-04-23": ["10:00 AM", "1:00 PM", "3:00 PM"],
      "2025-04-24": ["11:00 AM", "2:00 PM"],
      "2025-04-25": ["10:00 AM", "1:00 PM", "4:00 PM"],
    },
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    title: "Stress Management Expert",
    specialties: ["Stress", "Burnout", "Work-Life Balance"],
    rating: 4.9,
    reviews: 210,
    experience: 15,
    price: 95,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Dr. James Wilson helps professionals manage stress and prevent burnout with practical strategies for achieving work-life balance.",
    availableSlots: {
      "2025-04-20": ["9:00 AM", "10:00 AM", "2:00 PM", "3:00 PM"],
      "2025-04-21": ["10:00 AM", "11:00 AM", "1:00 PM", "4:00 PM"],
      "2025-04-22": ["9:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"],
      "2025-04-23": ["10:00 AM", "1:00 PM", "3:00 PM"],
      "2025-04-24": ["9:00 AM", "11:00 AM", "2:00 PM"],
      "2025-04-25": ["10:00 AM", "1:00 PM", "4:00 PM"],
    },
  },
  {
    id: "5",
    name: "Dr. Aisha Patel",
    title: "Grief Counselor",
    specialties: ["Depression", "Grief", "Loss"],
    rating: 4.8,
    reviews: 175,
    experience: 11,
    price: 80,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Dr. Aisha Patel provides compassionate support for individuals navigating grief and loss, helping them find hope and healing.",
    availableSlots: {
      "2025-04-20": ["9:00 AM", "10:00 AM"],
      "2025-04-21": ["10:00 AM", "11:00 AM", "1:00 PM"],
      "2025-04-22": ["9:00 AM", "11:00 AM"],
      "2025-04-23": ["10:00 AM", "1:00 PM"],
      "2025-04-24": ["9:00 AM", "11:00 AM"],
      "2025-04-25": ["10:00 AM", "1:00 PM"],
    },
  },
  {
    id: "6",
    name: "Dr. Robert Kim",
    title: "Addiction Specialist",
    specialties: ["Addiction", "Recovery"],
    rating: 4.6,
    reviews: 132,
    experience: 9,
    price: 85,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Dr. Robert Kim supports individuals on their journey to recovery from addiction with personalized treatment plans and ongoing guidance.",
    availableSlots: {
      "2025-04-20": ["9:00 AM", "10:00 AM", "2:00 PM", "3:00 PM"],
      "2025-04-21": ["10:00 AM", "11:00 AM", "1:00 PM", "4:00 PM"],
      "2025-04-22": ["9:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"],
      "2025-04-23": ["10:00 AM", "1:00 PM", "3:00 PM"],
      "2025-04-24": ["9:00 AM", "11:00 AM", "2:00 PM"],
      "2025-04-25": ["10:00 AM", "1:00 PM", "4:00 PM"],
    },
  },
  {
    id: "7",
    name: "Dr. Maria Gonzalez",
    title: "Anxiety Specialist",
    specialties: ["Anxiety", "Phobias"],
    rating: 4.7,
    reviews: 145,
    experience: 10,
    price: 75,
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Dr. Maria Gonzalez helps clients manage and overcome anxiety and phobias through targeted therapeutic techniques.",
    availableSlots: {
      "2025-04-20": ["9:00 AM", "10:00 AM", "2:00 PM", "3:00 PM"],
      "2025-04-21": ["10:00 AM", "11:00 AM", "1:00 PM", "4:00 PM"],
      "2025-04-22": ["9:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"],
      "2025-04-23": ["10:00 AM", "1:00 PM", "3:00 PM"],
      "2025-04-24": ["9:00 AM", "11:00 AM", "2:00 PM"],
      "2025-04-25": ["10:00 AM", "1:00 PM", "4:00 PM"],
    },
  },
  {
    id: "8",
    name: "Dr. David Thompson",
    title: "LGBTQ+ Counselor",
    specialties: ["LGBTQ+", "Identity"],
    rating: 4.9,
    reviews: 88,
    experience: 7,
    price: 90,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Dr. David Thompson provides affirming support for LGBTQ+ individuals exploring identity and facing unique challenges.",
    availableSlots: {
      "2025-04-20": ["9:00 AM", "10:00 AM"],
      "2025-04-21": ["10:00 AM", "11:00 AM", "1:00 PM"],
      "2025-04-22": ["9:00 AM", "11:00 AM"],
      "2025-04-23": ["10:00 AM", "1:00 PM"],
      "2025-04-24": ["9:00 AM", "11:00 AM"],
      "2025-04-25": ["10:00 AM", "1:00 PM"],
    },
  },
  {
    id: "9",
    name: "Dr. Olivia Martinez",
    title: "Teen and Family Therapist",
    specialties: ["Teen Counseling", "Family Therapy"],
    rating: 4.8,
    reviews: 112,
    experience: 8,
    price: 80,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Dr. Olivia Martinez specializes in supporting teenagers and their families through challenges and transitions with compassionate therapy.",
    availableSlots: {
      "2025-04-20": ["9:00 AM", "10:00 AM", "2:00 PM", "3:00 PM"],
      "2025-04-21": ["10:00 AM", "11:00 AM", "1:00 PM", "4:00 PM"],
      "2025-04-22": ["9:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"],
      "2025-04-23": ["10:00 AM", "1:00 PM", "3:00 PM"],
      "2025-04-24": ["9:00 AM", "11:00 AM", "2:00 PM"],
      "2025-04-25": ["10:00 AM", "1:00 PM", "4:00 PM"],
    },
  },
];

const TherapistProfile = () => {
  const params = useParams();
  const id = params.id as string;
  const router = useRouter();
  const [therapist, setTherapist] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<string>("2025-04-20");
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingStatus, setBookingStatus] = useState<"idle" | "pending" | "confirmed">("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTherapist = async () => {
      if (!id) {
        setError('No therapist ID provided');
        setLoading(false);
        return;
      }

      try {
        // Find therapist by ID
        const foundTherapist = therapists.find(t => t.id === id);
        
        if (foundTherapist) {
          setTherapist(foundTherapist);
        } else {
          setError('Therapist not found');
          // Wait a bit before redirecting
          setTimeout(() => {
            router.push('/therapists');
          }, 2000);
        }
      } catch (error) {
        setError('Error loading therapist profile');
        console.error('Error fetching therapist:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTherapist();
  }, [id, router]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-white dark:bg-gray-900">
        <motion.div 
          className="text-primary"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </motion.div>
        <p className="mt-4 text-gray-600 dark:text-gray-400">Loading therapist profile...</p>
      </div>
    );
  }

  if (error || !therapist) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-white dark:bg-gray-900">
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{error || 'Therapist not found'}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Redirecting you to the therapists list...</p>
          <Link 
            href="/therapists"
            className="premium-button inline-flex items-center px-6 py-3 text-sm font-medium bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            View All Therapists
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    );
  }

  const handleBooking = () => {
    if (selectedTime) {
      setBookingStatus("pending");
      // Simulate booking process
      setTimeout(() => {
        setBookingStatus("confirmed");
        setTimeout(() => {
          router.push("/booking-confirmation"); // You'll need to create this page
        }, 2000);
      }, 1500);
    }
  };

  const availableDates = Object.keys(therapist.availableSlots);
  const availableTimes = therapist.availableSlots[selectedDate] || [];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="relative h-64 bg-gradient-to-r from-primary via-secondary to-accent overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src={therapist.image} 
            alt={therapist.name} 
            fill 
            className="object-cover blur-sm" 
          />
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <Link href="/therapists" className="text-white flex items-center hover:opacity-80 transition-opacity mr-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Therapists
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column - Therapist Info */}
          <div className="lg:w-1/3">
            <motion.div 
              className="premium-card p-8 relative z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto -mt-16 mb-6 rounded-full overflow-hidden ring-4 ring-primary/20">
                <Image 
                  src={therapist.image} 
                  alt={therapist.name} 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 mix-blend-multiply" />
              </div>
              
              <h1 className="text-3xl font-bold premium-text text-center mb-2">{therapist.name}</h1>
              <h2 className="text-xl text-gray-700 dark:text-gray-300 text-center mb-6">{therapist.title}</h2>
              
              <div className="flex justify-center mb-6">
                <div className="flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
                  <svg className="w-4 h-4 text-primary mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-medium">{therapist.rating.toFixed(1)}</span>
                  <span className="text-gray-700 dark:text-gray-400 ml-1">({therapist.reviews} reviews)</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{therapist.experience} years of experience</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>${therapist.price}/session (50 mins)</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {therapist.specialties.map((spec: string, index: number) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                  >
                    {spec}
                  </span>
                ))}
              </div>
              
              <div className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                <h3 className="text-lg font-semibold text-primary mb-3">About {therapist.name}</h3>
                <p>{therapist.bio}</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Booking Calendar */}
          <div className="lg:w-2/3">
            <motion.div 
              className="premium-card p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold premium-text mb-6">Book a Session</h2>
              
              {bookingStatus === "confirmed" ? (
                <motion.div 
                  className="bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-800/20 rounded-xl p-8 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Booking Confirmed!</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">Your session with {therapist.name} on {selectedDate} at {selectedTime} has been confirmed. You will receive a confirmation email shortly.</p>
                  <p className="text-gray-700 dark:text-gray-300">Redirecting to confirmation page...</p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-primary mb-4">Select Date</h3>
                    <div className="grid grid-cols-7 gap-2">
                      {availableDates.map((date) => {
                        const day = new Date(date).getDate();
                        const weekday = new Date(date).toLocaleString('default', { weekday: 'short' });
                        const isSelected = date === selectedDate;
                        return (
                          <motion.button
                            key={date}
                            className={`flex flex-col items-center justify-center py-3 rounded-lg border transition-colors duration-200 ${
                              isSelected 
                                ? "bg-primary text-white border-primary" 
                                : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-primary/10 hover:border-primary/30 text-gray-800 dark:text-gray-200"
                            }`}
                            onClick={() => {
                              setSelectedDate(date);
                              setSelectedTime(null);
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span className="text-sm">{weekday}</span>
                            <span className={`text-lg font-bold ${isSelected ? "text-white" : "text-primary"}`}>{day}</span>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-primary mb-4">Available Times on {new Date(selectedDate).toLocaleDateString()}</h3>
                    {availableTimes.length > 0 ? (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {availableTimes.map((time: string) => {
                          const isSelected = time === selectedTime;
                          return (
                            <motion.button
                              key={time}
                              className={`py-3 px-4 rounded-lg border transition-colors duration-200 ${
                                isSelected 
                                  ? "bg-primary text-white border-primary" 
                                  : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-primary/10 hover:border-primary/30 text-gray-800 dark:text-gray-200"
                              }`}
                              onClick={() => setSelectedTime(time)}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <span className="font-medium">{time}</span>
                            </motion.button>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center border border-gray-200 dark:border-gray-700">
                        <p className="text-gray-700 dark:text-gray-400">No available slots for this date. Please select another date.</p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <button 
                      onClick={handleBooking} 
                      disabled={!selectedTime || bookingStatus === "pending"} 
                      className={`premium-button w-full sm:w-auto flex items-center justify-center px-6 py-3 text-sm font-medium bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      {bookingStatus === "pending" ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing Booking...
                        </>
                      ) : (
                        <>
                          Book Session for ${therapist.price}
                        </>
                      )}
                    </button>
                    
                    {selectedTime && bookingStatus !== "pending" && (
                      <div className="text-gray-700 dark:text-gray-300 text-sm">
                        Session on {new Date(selectedDate).toLocaleDateString()} at {selectedTime}
                      </div>
                    )}
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapistProfile;
