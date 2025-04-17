import EmergencyResources from '../../components/EmergencyResources';

export default function EmergencyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Emergency Resources
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            Immediate help for crisis situations
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-soft overflow-hidden p-6">
          <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-600 dark:text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800 dark:text-red-200">If you or someone you know is in immediate danger</h3>
                <div className="mt-2 text-sm text-red-700 dark:text-red-300">
                  <p>
                    Please call emergency services (911 in the US) or go to your nearest emergency room immediately.
                    Do not wait. Your safety is the top priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-2">When to Seek Emergency Help</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Mental health emergencies require immediate attention. Consider seeking emergency help if you or someone you know is experiencing:
            </p>
            <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
              <li>Thoughts of harming yourself or others</li>
              <li>A suicide attempt or serious thoughts about suicide</li>
              <li>Severe disorientation or confusion</li>
              <li>Extreme emotional distress that cannot be managed</li>
              <li>Dangerous or out-of-control behavior</li>
            </ul>
          </div>
          
          <EmergencyResources />
          
          <div className="mt-8 bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="text-md font-medium text-gray-900 dark:text-white mb-2">After a Crisis</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Once the immediate crisis has passed, it's important to connect with ongoing mental health support. 
              Our platform can help you find a therapist who specializes in crisis recovery and ongoing care.
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
  );
}
