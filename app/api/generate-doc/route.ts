import { NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  const { code, type }: { code: string; type: "explain" | "blog" } =
    await req.json();

  if (!code || !type) {
    return NextResponse.json(
      { error: "Code and type are required" },
      { status: 400 }
    );
  }

  const truncatedCode = code.slice(0, 5000);

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            type === "explain"
              ? "You are a helpful assistant that explains code in markdown."
              : "You are a skilled technical writer that generates blog posts about code.",
        },
        {
          role: "user",
          content:
            type === "explain"
              ? `Explain this code in markdown:\n${truncatedCode}`
              : `Write a blog post about this code:\n${truncatedCode}`,
        },
      ],
    });

    const markdown = response.choices[0]?.message?.content || "";
    return NextResponse.json({ markdown });
  } catch (error) {
    console.error("Error generating documentation:", error);
    return NextResponse.json(
      { error: "Failed to generate content" },
      { status: 500 }
    );
  }
}
