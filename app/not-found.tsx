// pages/404.tsx

import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-4">Page Not Found</h2>
      <p className="text-gray-500">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-300">Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
