"use client";
import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useEffect, useState } from "react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-slate-900 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl md:text-3xl font-bold">MERY</h1>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {["自己紹介", "スキル", "職歴", "プロジェクト", "連絡先"].map(
                (item, index) => (
                  <li key={index}>
                    <button
                      onClick={() =>
                        scrollToSection(
                          ["about", "skills", "experience", "work", "footer"][
                            index
                          ]
                        )
                      }
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              {theme === "light" ? (
                <MdOutlineLightMode size={20} />
              ) : (
                <MdOutlineDarkMode size={20} />
              )}
            </button>
          </nav>
        </div>

        {/* Mobile navigation */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {["自己紹介", "スキル", "職歴", "プロジェクト", "連絡先"].map(
              (item, index) => (
                <button
                  key={index}
                  onClick={() =>
                    scrollToSection(
                      ["about", "skills", "experience", "work", "footer"][index]
                    )
                  }
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800">
                  {item}
                </button>
              )
            )}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 flex items-center">
              {theme === "light" ? (
                <>
                  <MdOutlineLightMode className="mr-2" /> ライトモード
                </>
              ) : (
                <>
                  <MdOutlineDarkMode className="mr-2" /> ダークモード
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
