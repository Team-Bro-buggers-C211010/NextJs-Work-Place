"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

// reset is rerender the client component
// error is the error that was thrown in the server component
// for rerender in server component, we can use `useRouter()` and startTransition
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div>
      <div className="text-center">
        <p className="text-4xl text-red-500 font-extrabold">{error.message}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={reload}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
