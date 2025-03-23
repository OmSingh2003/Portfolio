import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-6 text-9xl font-bold text-blue-600 dark:text-blue-400">404</h1>
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Page Not Found</h2>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
