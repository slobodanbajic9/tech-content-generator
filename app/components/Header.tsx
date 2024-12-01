"use client";

import { FiSun, FiMoon } from "react-icons/fi";

type HeaderProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => (
  <header className="p-4 bg-white dark:bg-gray-800 shadow">
    <div className="flex justify-between items-center w-full">
      <h1 className="text-xl font-bold">Tech Content Generator</h1>
      <button
        onClick={toggleDarkMode}
        className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-600">
        {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
      </button>
    </div>
  </header>
);

export default Header;
