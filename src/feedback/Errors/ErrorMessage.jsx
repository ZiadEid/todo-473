
const ErrorMessage = () => {
  return (
    <div className="flex min-h-75 w-full items-center justify-center px-4">
      <div className="flex flex-col items-center text-center">
        {/* Animated Error Icon */}
        <div className="relative mb-6">
          <div className="absolute inset-0 animate-ping rounded-full bg-red-100 opacity-40" />

          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path
                strokeLinecap="round"
                d="M12 7v6"
              />
              <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
            </svg>
          </div>
        </div>

        {/* Error Content */}
        <h2 className="text-xl font-semibold text-gray-900">
          Something went wrong
        </h2>

        <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
          An unexpected error occurred. Please try again later.
        </p>
      </div>
    </div>
  );
};

export default ErrorMessage;
