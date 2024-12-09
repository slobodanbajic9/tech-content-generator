# Tech Content Generator

A modern Next.js application powered by AI to help developers generate technical documentation and blog posts from code snippets. Built with Next.js 14, TypeScript, and Tailwind CSS, featuring a clean, responsive interface with light and dark mode support.

## Features

- 🤖 **AI-Powered Content Generation**: Transform code snippets into detailed documentation and blog posts
- 🎨 **Modern UI/UX**: Clean interface with Geist font family integration
- 🌓 **Theme Switching**: Seamless light and dark mode toggle
- 📱 **Responsive Design**: Optimized for both desktop and mobile devices
- 🚀 **Built with Modern Stack**: Next.js 14, TypeScript, Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist & Geist Mono
- **AI Integration**: OpenAI API

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn
- OpenAI API key

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/slobodanbajic9/tech-content-generator.git
   cd tech-content-generator
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following:

   ```env
   OPENAI_API_KEY=your_openai_api_key
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
tech-content-generator/
├── app/
│   ├── api/
│   │   └── generate-doc/
│   ├── fonts/
│   └── page.tsx
├── lib/
│   └── mongodb.ts
├── public/
│   └── assets/
└── ...configuration files
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
