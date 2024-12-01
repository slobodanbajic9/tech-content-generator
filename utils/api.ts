export const generateContent = async (
  code: string,
  type: "explain" | "blog"
) => {
  const response = await fetch("/api/generate-doc", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code, type }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate content");
  }

  const data = await response.json();
  return data.markdown || "No output generated.";
};
