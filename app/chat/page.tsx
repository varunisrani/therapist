import AIChatBox from '../../components/AIChatBox';

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            24/7 AI Mental Health Assistant
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            Get immediate support and guidance from our AI assistant
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-soft overflow-hidden p-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-2">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Our AI assistant is designed to provide immediate support for common mental health concerns. 
              While it's not a replacement for professional therapy, it can help with:
            </p>
            <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
              <li>Coping strategies for anxiety and stress</li>
              <li>Mindfulness and relaxation techniques</li>
              <li>Self-care recommendations</li>
              <li>General mental health information</li>
              <li>Crisis resources when needed</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-600 dark:text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">Important Note</h3>
                <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
                  <p>
                    This AI assistant is not a replacement for professional mental health care. 
                    If you're experiencing a mental health emergency, please call your local emergency services 
                    or use the resources in our Emergency section.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <AIChatBox />
          
          <div className="mt-8 bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="text-md font-medium text-gray-900 dark:text-white mb-2">Want to talk to a real therapist?</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Our AI assistant is helpful for many situations, but sometimes you need human support.
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
