"use client";
import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useEffect, useState } from "react";
import { BsTranslate } from "react-icons/bs";
import { useLanguage } from "@/context/languageContext";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navByLanguage = {
    en: ["About me", "Skills", "Work experience", "Projects", "Contact"],
    mn: [
      "Миний тухай",
      "Ур чадвар",
      "Ажлын туршлага",
      "Төслүүд",
      "Холбоо барих",
    ],
    ja: ["自己紹介", "スキル", "職務経験", "プロジェクト", "連絡先"],
  };

  const modeLabelByLanguage = {
    en: { light: "Light mode", dark: "Dark mode" },
    mn: { light: "Цайвар горим", dark: "Харанхуй горим" },
    ja: { light: "ライトモード", dark: "ダークモード" },
  };

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
    <div className="w-screen bg-transparent dark:bg-slate-900 z-50">
      <header className="w-screen mx-auto fixed top-0 left-0 right-0 z-50 border-b border-gray-200/70 bg-white/90 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/90">
        <div className="w-[92%] md:w-[85%] lg:w-2/3 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-gray-900 dark:text-white">
              MERY
            </h1>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-slate-800">
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
            <nav className="hidden md:flex items-center space-x-5">
              <ul className="flex space-x-6">
                {navByLanguage[language].map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() =>
                        scrollToSection(
                          ["about", "skills", "experience", "work", "footer"][
                            index
                          ],
                        )
                      }
                      className="text-sm font-medium text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-300 transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
              {/* <div className="flex items-center gap-2 border border-gray-200 dark:border-slate-700 rounded-full px-2 py-1">
                <BsTranslate
                  size={16}
                  className="text-gray-600 dark:text-gray-300"
                />
                {[
                  { code: "en", label: "EN" },
                  { code: "mn", label: "MN" },
                  { code: "ja", label: "JP" },
                ].map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`text-xs font-semibold px-2 py-1 rounded-full transition-colors ${
                      language === lang.code
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                        : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    }`}>
                    {lang.label}
                  </button>
                ))}
              </div> */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 dark:border-slate-700 dark:hover:bg-gray-800 transition-colors">
                {theme === "dark" ? (
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
              {navByLanguage[language].map((item, index) => (
                <button
                  key={index}
                  onClick={() =>
                    scrollToSection(
                      ["about", "skills", "experience", "work", "footer"][
                        index
                      ],
                    )
                  }
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800">
                  {item}
                </button>
              ))}
              <div className="px-3 py-2">
                <div className="flex items-center gap-2 border border-gray-200 dark:border-slate-700 rounded-lg px-2 py-2">
                  <BsTranslate
                    size={16}
                    className="text-gray-600 dark:text-gray-300"
                  />
                  {[
                    { code: "en", label: "EN" },
                    { code: "mn", label: "MN" },
                    // { code: "ja", label: "JP" },
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`text-xs font-semibold px-2 py-1 rounded-full transition-colors ${
                        language === lang.code
                          ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                          : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                      }`}>
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 flex items-center">
                {theme === "light" ? (
                  <>
                    <MdOutlineLightMode className="mr-2" />{" "}
                    {modeLabelByLanguage[language].light}
                  </>
                ) : (
                  <>
                    <MdOutlineDarkMode className="mr-2" />{" "}
                    {modeLabelByLanguage[language].dark}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
