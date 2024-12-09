"use client";

import { generateContent } from "../utils/api";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MarkdownOutput from "./components/MarkdownOutput";
import TextArea from "./components/TextArea";
import React, { useState } from "react";

export default function Home() {
  const [code, setCode] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleGenerate = async (type: "explain" | "blog") => {
    setLoading(true);
    try {
      const result = await generateContent(code, type);
      setOutput(result);
    } catch (error) {
      console.error("Error occurred", error);
      alert("An error occurred while generating documentation.");
    }
    setLoading(false);
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />
        <main className="flex flex-col lg:flex-row flex-1 w-full p-4">
          <TextArea
            code={code}
            setCode={setCode}
            loading={loading}
            onGenerate={handleGenerate}
          />
          <MarkdownOutput output={output} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
