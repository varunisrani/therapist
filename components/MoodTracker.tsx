'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type MoodEntry = {
  date: Date;
  rating: number;
  note: string;
};

export default function MoodTracker() {
  const [moodRating, setMoodRating] = useState<number | null>(null);
  const [moodNote, setMoodNote] = useState('');
  const [entries, setEntries] = useState<MoodEntry[]>([
    { date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000), rating: 7, note: 'Feeling pretty good today. Had a nice walk outside.' },
    { date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), rating: 5, note: 'Neutral day. Work was busy but manageable.' },
    { date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), rating: 3, note: 'Feeling down. Struggled with anxiety today.' },
    { date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), rating: 4, note: 'Slightly better than yesterday. Practiced meditation.' },
    { date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), rating: 6, note: 'Good day overall. Had a productive therapy session.' },
    { date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), rating: 8, note: 'Great day! Spent time with friends and felt connected.' },
  ]);

  const moodLabels = {
    1: 'Very Poor',
    2: 'Poor',
    3: 'Not Great',
    4: 'Below Average',
    5: 'Average',
    6: 'Above Average',
    7: 'Good',
    8: 'Very Good',
    9: 'Excellent',
    10: 'Amazing'
  };

  const getMoodColor = (rating: number) => {
    if (rating <= 3) return 'from-red-500 to-red-600';
    if (rating <= 5) return 'from-yellow-500 to-yellow-600';
    if (rating <= 7) return 'from-green-400 to-green-500';
    return 'from-green-500 to-green-600';
  };

  const getMoodGradient = (rating: number) => {
    return `bg-gradient-to-r ${getMoodColor(rating)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (moodRating === null) return;

    const newEntry: MoodEntry = {
      date: new Date(),
      rating: moodRating,
      note: moodNote,
    };

    setEntries([...entries, newEntry]);
    setMoodRating(null);
    setMoodNote('');
  };

  return (
    <div className="premium-card overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold">Mood Tracker</h3>
            <p className="text-sm text-white/80">Track your daily mood to identify patterns</p>
          </div>
        </div>
      </div>

      <div className="p-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              How are you feeling today?
            </label>
            <div className="flex justify-between items-center">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                <motion.button
                  key={rating}
                  type="button"
                  onClick={() => setMoodRating(rating)}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-medium shadow-lg ${getMoodGradient(rating)} ${moodRating === rating ? 'ring-2 ring-primary/50 ring-offset-2 dark:ring-offset-gray-800' : ''}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {rating}
                </motion.button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              {moodRating && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 text-center text-lg font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                >
                  {moodLabels[moodRating as keyof typeof moodLabels]}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div>
            <label htmlFor="note" className="block text-lg font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Add a note (optional)
            </label>
            <textarea
              id="note"
              rows={3}
              value={moodNote}
              onChange={(e) => setMoodNote(e.target.value)}
              className="w-full rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm p-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
              placeholder="How was your day? What affected your mood?"
            />
          </div>

          <motion.button
            type="submit"
            disabled={moodRating === null}
            className="w-full premium-button bg-gradient-to-r from-primary to-secondary text-white py-3 px-6 rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Save Entry
          </motion.button>
        </form>

        <div className="mt-10">
          <h4 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">Recent Mood History</h4>
          <div className="space-y-4">
            <AnimatePresence>
              {entries.slice().reverse().map((entry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="premium-card p-4 hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {entry.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                    </span>
                    <div className={`px-4 py-1.5 rounded-full text-sm text-white font-medium shadow-lg ${getMoodGradient(entry.rating)}`}>
                      {entry.rating}/10 - {moodLabels[entry.rating as keyof typeof moodLabels]}
                    </div>
                  </div>
                  {entry.note && (
                    <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">{entry.note}</p>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
