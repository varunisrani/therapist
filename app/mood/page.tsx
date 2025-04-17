import MoodTracker from '../../components/MoodTracker';

export default function MoodPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Mood Tracker
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            Track your daily mood to identify patterns and improve your mental wellbeing
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-soft overflow-hidden p-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Why Track Your Mood?</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Mood tracking is a powerful tool for understanding your mental health patterns. Regular tracking can help you:
            </p>
            <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
              <li>Identify triggers that affect your mood</li>
              <li>Recognize patterns in your emotional wellbeing</li>
              <li>Track the effectiveness of treatments or self-care practices</li>
              <li>Provide valuable insights to share with your therapist</li>
              <li>Develop greater self-awareness</li>
            </ul>
          </div>
          
          <MoodTracker />
          
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="bg-primary-50 dark:bg-primary-900/30 rounded-lg p-4">
              <h3 className="text-md font-medium text-gray-900 dark:text-white mb-2">Tips for Effective Mood Tracking</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>Track at the same time each day for consistency</li>
                <li>Note any significant events that may have affected your mood</li>
                <li>Be honest with yourself about how you're feeling</li>
                <li>Look for patterns over weeks, not just day to day</li>
                <li>Share insights with your therapist during sessions</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 className="text-md font-medium text-gray-900 dark:text-white mb-2">Need More Support?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Tracking your mood is just one part of a comprehensive mental health approach. Consider connecting with a professional therapist for personalized guidance.
              </p>
              <a 
                href="/therapists" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Find a Therapist
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
