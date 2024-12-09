import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as atomDarkStyle } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";

type MarkdownOutputProps = {
  output: string;
};

interface CodeProps extends React.HTMLProps<HTMLElement> {
  inline?: boolean;
  node?: any;
}

const MarkdownOutput = ({ output }: MarkdownOutputProps) => (
  <div className="w-full lg:w-1/2 flex flex-col bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
    <h2 className="text-xl font-semibold mb-4">Generated Content</h2>
    <div className="generator dark:generator-invert prose dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }: CodeProps) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={atomDarkStyle as any}
                language={match[1]}
                PreTag="div">
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}>
        {output}
      </ReactMarkdown>
    </div>
  </div>
);

export default MarkdownOutput;
