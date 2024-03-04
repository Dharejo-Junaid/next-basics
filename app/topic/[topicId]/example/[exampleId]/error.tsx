"use client";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorBoundary = ({ error, reset }: Props) => {
  return (
    <>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </>
  );
};

export default ErrorBoundary;
