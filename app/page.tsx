"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const [code, setCode] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleGenerate = async (type: "explain" | "blog") => {
    setLoading(true);
    try {
      const response = await fetch("/api/generate-doc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, type }),
      });

      const data = await response.json();
      if (data.error) {
        alert(data.error);
      } else {
        setOutput(data.markdown || "No output generated.");
      }
    } catch (error) {
      console.error("Error occured", error);
      alert("An error occurred while generating documentation.");
    }
    setLoading(false);
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Header */}
        <header className="p-4 bg-white dark:bg-gray-800 shadow">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-xl font-bold">Tech Content Generator</h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-600">
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-col lg:flex-row flex-1 w-full p-4">
          {/* Left Panel */}
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
                className={`w-full px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none ${
                  loading ? "bg-gray-400" : ""
                }`}>
                {loading ? "Explaining..." : "Explain this code"}
              </button>
              <button
                onClick={() => handleGenerate("blog")}
                disabled={loading}
                className={`w-full px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none ${
                  loading ? "bg-gray-400" : ""
                }`}>
                {loading ? "Generating..." : "Generate blog post"}
              </button>
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-full lg:w-1/2 flex flex-col bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Generated Output</h2>
            <div className="prose dark:prose-invert">
              <ReactMarkdown>{output}</ReactMarkdown>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
