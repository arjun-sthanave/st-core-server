import { Home, RefreshCw } from "lucide-react";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  const status = isRouteErrorResponse(error) ? error.status : 500;
  const title =
    status === 404 ? "Page Not Found" : "Something Went Wrong";
  const message = isRouteErrorResponse(error)
    ? error.statusText || "The page you are looking for does not exist."
    : "An unexpected error occurred. Please try again.";

  return (
    <div className="flex min-h-screen items-center justify-center px-5">
      <div className="w-full max-w-lg text-center">
        <p className="text-7xl font-bold text-primary-500 md:text-8xl">
          {status}
        </p>

        <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">
          {title}
        </h1>

        <p className="mt-4 text-base leading-7 text-white/70">{message}</p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <button
            type="button"
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-white transition hover:bg-white/10"
          >
            <RefreshCw size={18} />
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
