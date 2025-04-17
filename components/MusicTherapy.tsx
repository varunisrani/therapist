'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Track = {
  id: string;
  title: string;
  artist: string;
  duration: number; // in seconds
  category: string;
  imageUrl: string;
  audioUrl: string;
};

const mockTracks: Track[] = [
  {
    id: '1',
    title: 'Calm Waters',
    artist: 'Serenity Sounds',
    duration: 180,
    category: 'meditation',
    imageUrl: '/images/calm-waters.jpg',
    audioUrl: '/audio/calm-waters.mp3'
  },
  {
    id: '2',
    title: 'Forest Whispers',
    artist: 'Nature Melodies',
    duration: 240,
    category: 'relaxation',
    imageUrl: '/images/forest-whispers.jpg',
    audioUrl: '/audio/forest-whispers.mp3'
  },
  {
    id: '3',
    title: 'Gentle Rain',
    artist: 'Ambient Moods',
    duration: 300,
    category: 'sleep',
    imageUrl: '/images/gentle-rain.jpg',
    audioUrl: '/audio/gentle-rain.mp3'
  },
  {
    id: '4',
    title: 'Ocean Waves',
    artist: 'Coastal Sounds',
    duration: 360,
    category: 'relaxation',
    imageUrl: '/images/ocean-waves.jpg',
    audioUrl: '/audio/ocean-waves.mp3'
  },
  {
    id: '5',
    title: 'Starlight Dreams',
    artist: 'Night Melodies',
    duration: 420,
    category: 'sleep',
    imageUrl: '/images/starlight-dreams.jpg',
    audioUrl: '/audio/starlight-dreams.mp3'
  },
];

export default function MusicTherapy() {
  const [tracks] = useState<Track[]>(mockTracks);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const categories = ['all', 'meditation', 'relaxation', 'sleep'];

  useEffect(() => {
    if (!currentTrack && tracks.length > 0) {
      setCurrentTrack(tracks[0]);
    }
  }, [tracks, currentTrack]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error('Error playing audio:', error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrack]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTrackSelect = (track: Track) => {
    setCurrentTrack(track);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleTrackEnd = () => {
    // Find next track
    const currentIndex = tracks.findIndex(track => track.id === currentTrack?.id);
    const nextIndex = (currentIndex + 1) % tracks.length;
    setCurrentTrack(tracks[nextIndex]);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const filteredTracks = activeCategory === 'all' 
    ? tracks 
    : tracks.filter(track => track.category === activeCategory);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700"
    >
      <motion.div 
        className="p-6 bg-gradient-to-r from-primary to-secondary text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100">Music Therapy</h3>
        <p className="text-sm text-gray-100">Relax and unwind with therapeutic sounds</p>
      </motion.div>

      <div className="p-6">
        {currentTrack && (
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="relative aspect-w-16 aspect-h-9 bg-gradient-to-br from-primary via-primary to-secondary rounded-2xl overflow-hidden mb-6 shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 backdrop-blur-sm bg-black/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <motion.h3 
                    className="text-2xl font-bold mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {currentTrack.title}
                  </motion.h3>
                  <motion.p 
                    className="text-lg opacity-90"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {currentTrack.artist}
                  </motion.p>
                </div>
              </div>
            </motion.div>
            
            <audio 
              ref={audioRef} 
              src={currentTrack.audioUrl} 
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleTrackEnd}
              className="hidden"
            />
            
            <div className="flex flex-col space-y-3">
              <div className="flex justify-between text-sm font-medium text-gray-600 dark:text-gray-300">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(currentTrack.duration)}</span>
              </div>
              
              <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div 
                  className="absolute h-full bg-gradient-to-r from-primary to-secondary"
                  style={{ width: `${(currentTime / currentTrack.duration) * 100}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${(currentTime / currentTrack.duration) * 100}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              
              <div className="flex justify-center space-x-6 mt-6">
                <motion.button 
                  className="p-4 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-md"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const currentIndex = tracks.findIndex(track => track.id === currentTrack.id);
                    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
                    handleTrackSelect(tracks[prevIndex]);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                
                <motion.button 
                  className="p-5 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary hover:to-secondary text-white shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePlayPause}
                >
                  {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </motion.button>
                
                <motion.button 
                  className="p-4 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-md"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const currentIndex = tracks.findIndex(track => track.id === currentTrack.id);
                    const nextIndex = (currentIndex + 1) % tracks.length;
                    handleTrackSelect(tracks[nextIndex]);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        <div className="mb-6">
          <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">Categories</h4>
          <motion.div 
            className="flex space-x-3 overflow-x-auto pb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category 
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <div>
          <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">Tracks</h4>
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <AnimatePresence>
              {filteredTracks.map((track) => (
                <motion.div 
                  key={track.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  onClick={() => handleTrackSelect(track)}
                  className={`flex items-center p-4 rounded-xl cursor-pointer transition-all ${
                    currentTrack?.id === track.id 
                      ? 'bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 shadow-md' 
                      : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex-shrink-0 flex items-center justify-center shadow-md">
                    {currentTrack?.id === track.id && isPlaying ? (
                      <motion.svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6 text-white" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </motion.svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div className="ml-4 flex-1">
                    <h5 className="text-base font-semibold text-gray-900 dark:text-white">{track.title}</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{track.artist}</p>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {formatTime(track.duration)}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
