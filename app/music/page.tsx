import MusicTherapy from '../../components/MusicTherapy';

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Music Therapy
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            Relax and unwind with therapeutic sounds designed to improve your mental wellbeing
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-soft overflow-hidden p-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-2">The Power of Music Therapy</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Music therapy is a clinical and evidence-based practice that uses music to accomplish individualized goals. Research shows that music can have significant benefits for mental health, including:
            </p>
            <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
              <li>Reducing stress and anxiety</li>
              <li>Improving mood and emotional regulation</li>
              <li>Enhancing relaxation and sleep quality</li>
              <li>Supporting meditation and mindfulness practices</li>
              <li>Providing an outlet for emotional expression</li>
            </ul>
          </div>
          
          <MusicTherapy />
          
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="bg-primary-50 dark:bg-primary-900/30 rounded-lg p-4">
              <h3 className="text-md font-medium text-gray-900 dark:text-white mb-2">How to Use Music for Mental Health</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>Set aside dedicated time for listening without distractions</li>
                <li>Create a comfortable environment with minimal interruptions</li>
                <li>Consider using headphones for a more immersive experience</li>
                <li>Pair music with deep breathing or progressive muscle relaxation</li>
                <li>Be consistent with your practice for best results</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 className="text-md font-medium text-gray-900 dark:text-white mb-2">Explore More Therapeutic Options</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Music therapy works well alongside other mental health approaches. Consider combining it with professional therapy for a comprehensive approach to your wellbeing.
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
