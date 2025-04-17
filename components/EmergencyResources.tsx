import Link from 'next/link';

type EmergencyResource = {
  id: string;
  name: string;
  description: string;
  phone: string;
  website: string;
  hours: string;
};

const emergencyResources: EmergencyResource[] = [
  {
    id: '1',
    name: 'National Suicide Prevention Lifeline',
    description: 'Free and confidential support for people in distress, prevention and crisis resources.',
    phone: '1-800-273-8255',
    website: 'https://suicidepreventionlifeline.org',
    hours: '24/7',
  },
  {
    id: '2',
    name: 'Crisis Text Line',
    description: 'Free mental health support via text message.',
    phone: 'Text HOME to 741741',
    website: 'https://www.crisistextline.org',
    hours: '24/7',
  },
  {
    id: '3',
    name: 'SAMHSA National Helpline',
    description: 'Treatment referral and information service for individuals facing mental health or substance use disorders.',
    phone: '1-800-662-4357',
    website: 'https://www.samhsa.gov/find-help/national-helpline',
    hours: '24/7',
  },
  {
    id: '4',
    name: 'National Domestic Violence Hotline',
    description: 'Support, crisis intervention, and referral service for domestic violence survivors.',
    phone: '1-800-799-7233',
    website: 'https://www.thehotline.org',
    hours: '24/7',
  },
];

export default function EmergencyResources() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-soft overflow-hidden">
      <div className="p-4 bg-red-600 text-white">
        <h3 className="text-lg font-semibold">Emergency Resources</h3>
        <p className="text-sm opacity-80">Immediate help for crisis situations</p>
      </div>

      <div className="p-6">
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
                <p>Please call emergency services (911 in the US) or go to your nearest emergency room.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {emergencyResources.map((resource) => (
            <div key={resource.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white">{resource.name}</h4>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{resource.description}</p>
              
              <div className="mt-3 space-y-2">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">{resource.phone}</span>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <a href={resource.website} target="_blank" rel="noopener noreferrer" className="ml-2 text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                    {resource.website.replace('https://', '')}
                  </a>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">Available {resource.hours}</span>
                </div>
              </div>
              
              <div className="mt-4">
                <a 
                  href={`tel:${resource.phone.replace(/\D/g, '')}`}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Call Now
                </a>
                <a 
                  href={resource.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <h4 className="text-md font-medium text-gray-900 dark:text-white">Additional Resources</h4>
          <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-gray-500 dark:text-gray-400">
            <li>Local community mental health centers</li>
            <li>Primary care physicians who can provide referrals</li>
            <li>Employee assistance programs (if available through your workplace)</li>
            <li>University or school counseling services</li>
            <li>Faith-based organizations and leaders</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
