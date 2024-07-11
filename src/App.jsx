import React, { useState, useEffect } from "react";
const App = () => {
  const [show, setShow] = useState("");
  const [debounce, setDebounce] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(show);
    }, 700);
    return () => clearTimeout(timer);
  }, [show]);

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-gradient-to-bl from-green-200 via-gray-200 to-yellow-200 ">
      <h1 className="mt-4 rounded-lg p-4 text-4xl bg-yellow-200 text-indigo-900 font-semibold tracking-tight shadow-md">
        Debouncing In React
      </h1>
      <div className="flex p-5">
        <input
          type="text"
          className="border p-2 "
          value={show}
          onChange={(event) => setShow(event.target.value)}
        />
        <button className="rounded bg-blue-500 p-2 text-white">
          Click here
        </button>
      </div>
      <h1 className="text-3xl font-semibold text-gray-700">{debounce}</h1>
    </div>
  );
};

export default App;
