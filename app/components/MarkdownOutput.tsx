import ReactMarkdown from "react-markdown";

type MarkdownOutputProps = {
  output: string;
};

const MarkdownOutput = ({ output }: MarkdownOutputProps) => (
  <div className="w-full lg:w-1/2 flex flex-col bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
    <h2 className="text-xl font-semibold mb-4">Generated Output</h2>
    <div className="generator dark:generator-invert">
      <ReactMarkdown>{output}</ReactMarkdown>
    </div>
  </div>
);

export default MarkdownOutput;
