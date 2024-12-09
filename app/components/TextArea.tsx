"use client";

import { useState } from "react";

type TextAreaProps = {
  code: string;
  setCode: (value: string) => void;
  loading: boolean;
  onGenerate: (type: "explain" | "blog") => void;
};

const TextArea = ({ code, setCode, loading, onGenerate }: TextAreaProps) => {
  const [activeButton, setActiveButton] = useState<"explain" | "blog" | null>(
    null
  );

  const handleGenerate = (type: "explain" | "blog") => {
    setActiveButton(type);
    onGenerate(type);
  };

  return (
    <div className="w-full lg:w-1/2 flex flex-col p-4">
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
        className="flex-grow h-64 lg:h-auto border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-4 resize-none"
      />
      <div className="mt-4 flex space-x-4">
        <button
          onClick={() => handleGenerate("explain")}
          disabled={loading}
          className={`w-full px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none flex items-center justify-center ${
            loading && activeButton === "explain" ? "bg-gray-400" : ""
          }`}>
          {loading && activeButton === "explain" ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Explaining...
            </>
          ) : (
            "Explain this code"
          )}
        </button>
        <button
          onClick={() => handleGenerate("blog")}
          disabled={loading}
          className={`w-full px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none flex items-center justify-center ${
            loading && activeButton === "blog" ? "bg-gray-400" : ""
          }`}>
          {loading && activeButton === "blog" ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            "Generate blog post"
          )}
        </button>
      </div>
    </div>
  );
};

export default TextArea;
