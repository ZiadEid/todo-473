import { Link, useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="text-center">
        <h1 className="animate-bounce text-8xl font-bold tracking-tight text-gray-900 sm:text-9xl">
          404
        </h1>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        <p className="mx-auto mt-3 max-w-md text-gray-500">
          Sorry, the page you're looking for doesn't exist or may have been
          moved.
        </p>

        <Link
          to={"/"}
          className="mt-8 inline-flex rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-700 hover:shadow-lg"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
