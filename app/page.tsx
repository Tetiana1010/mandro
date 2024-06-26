import Link from 'next/link'

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">Master New Skills with Personalized Training</h1>
      <h2 className="text-lg md:text-xl mb-8 text-center max-w-2xl">
        Self Tutor helps you organize your learning material and creates a customized training schedule to ensure you achieve your learning goals
      </h2>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <Link  href="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Get Started</Link>
        <Link  href="/learn-more" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Learn More</Link>
      </div>
    </div>
  );
}

