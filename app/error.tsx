"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <>
      {error.message}
      <button onClick={reset}>Try Again</button>
    </>
  );
};

export default Error;
