"use client";

type TextAreaProps = {
  code: string;
  setCode: (value: string) => void;
  loading: boolean;
  onGenerate: (type: "explain" | "blog") => void;
};

const TextArea = ({ code, setCode, loading, onGenerate }: TextAreaProps) => (
  <div className="w-full lg:w-1/2 flex flex-col p-4">
    <textarea
      value={code}
      onChange={(e) => setCode(e.target.value)}
      placeholder="Paste your code here..."
      className="flex-grow h-64 lg:h-auto border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-4 resize-none"
    />
    <div className="mt-4 flex space-x-4">
      <button
        onClick={() => onGenerate("explain")}
        disabled={loading}
        className={`w-full px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none ${
          loading ? "bg-gray-400" : ""
        }`}>
        {loading ? "Explaining..." : "Explain this code"}
      </button>
      <button
        onClick={() => onGenerate("blog")}
        disabled={loading}
        className={`w-full px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none ${
          loading ? "bg-gray-400" : ""
        }`}>
        {loading ? "Generating..." : "Generate blog post"}
      </button>
    </div>
  </div>
);

export default TextArea;
