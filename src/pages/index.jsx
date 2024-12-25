"use client";
import { useEffect, useState } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Intro from "@/components/sections";
import AboutMe from "@/components/sections/aboutMe";
import ExperienceCard from "@/components/sections/experience";
import Skills from "@/components/sections/skills";
import Work from "@/components/sections/work";
import Titles from "@/components/small_components";
import { LuCopyright } from "react-icons/lu";

const experiences = [
  {
    jobTitle: "人事管理専門家",
    companyLogo: "/images/gobi.png",
    jobRoles: [
      "営業部門の人材採用プロセスの管理",
      "入退社手続き、雇用契約書の作成、勤怠管理",
      "給与計算および福利厚生管理",
      "休職・異動等の手続き管理",
    ],
    date: "2023.05-2024.05",
  },
  {
    jobTitle: "法務担当者",
    companyLogo: "/images/mds.png",
    jobRoles: [
      "法律文書の作成",
      "契約書の作成及び準備",
      "英語からモンゴル語への法律文書の翻訳",
      "事件に関する法律調査",
    ],
    date: "2022.12-2023.04",
  },
  {
    jobTitle: "法律顧問",
    companyLogo: "/images/wpi.jpg",
    jobRoles: [
      "トラブル発生時の法的な対応・相談",
      "法律文書の作成",
      "契約書の作成及び準備",
      "法廷での代理人",
    ],
    date: "2022.09-2022.10",
  },
];

const allJobs = [
  {
    projectName: "Pawchig",
    image: "/images/pawchig.png",
    description: [
      { des: "動物を引き取る及び寄付する及び救出するためのサイトです。" },
      { des: "自分の枠割" },
      {
        des: "チームリーダー: チームメンバーのコードレビューおよびプロジェクト全体の進行管理 ",
      },
      {
        des: "管理者用サイトの制作: 動物登録・引取ポスト挿入・寄付ポストの挿入及び管理",
      },
      { des: "登録・ログイン機能: 会員登録およびログイン機能の実装" },
      {
        des: "引き取り機能担当: 引き取りページのフロントエンドとバックエンドを設計・実装",
      },

      // 寄付の支払い機能
      //
      // Stripeを利用した寄付支払い機能のバックエンド構築
      //
      // "}
    ],
    technologies: [
      { title: "React.js" },
      { title: "Next.js" },
      { title: "Node.js" },
      { title: "Typescript" },
      { title: "Shadcnui" },
      { title: "MongoDB" },
      { title: "Tailwindcss" },
      { title: "Figma" },
      { title: "Express.js" },
      { title: "Vercel" },
      { title: "Git" },
      { title: "NPM" },
    ],
  },
  {
    projectName: "E-commerce",
    image: "/images/ecommerce.png",
    description: [
      { des: "服装売買のためのオンラインショッピングサイトです。" },
      {
        des: "ログイン/ログアウト、注文処理、商品リスト、商品評価、コメント、商品検索などの機能があるサイトです。また、管理者ページが別にあります。",
      },
    ],
    technologies: [
      { title: "React.js" },
      { title: "Next.js" },
      { title: "Node.js" },
      { title: "Typescript" },
      { title: "Shadcnui" },
      { title: "MongoDB" },
      { title: "Tailwindcss" },
      { title: "Express.js" },
      { title: "Vercel" },
      { title: "Git" },
      { title: "NPM" },
    ],
  },
  {
    projectName: "Expense-tracker",
    image: "/images/expense-tracker.png",
    description: [
      {
        des: "1っか月にどれぐらいの収入を得たのか、また、どれぐらいお金を使ったのかを管理するためのサイトです。",
      },
      {
        des: "ログイン/ログアウト��掲示板、収入と支出の登録及びリスト、リスト検索などの機能があります。",
      },
    ],
    technologies: [
      { title: "React.js" },
      { title: "Next.js" },
      { title: "Node.js" },
      { title: "Daisyui" },
      { title: "PostgreSQL" },
      { title: "Tailwindcss" },
      { title: "Figma" },
      { title: "Express.js" },
      { title: "Vercel" },
      { title: "Git" },
      { title: "NPM" },
    ],
  },
];

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className="w-screen">
        <Header />
      </div>

      <main>
        <Intro />
        <div id="about" className="bg-gray-50 dark:bg-slate-900">
          <AboutMe />
        </div>
        <section id="skills">
          <Skills />
        </section>
        <div className="bg-gray-50 py-24 dark:bg-slate-900" id="experience">
          <div className="experienceWidth">
            <div className="flex flex-col items-center">
              <Titles title="職歴" />
              <p className="mt-4 mb-12"></p>
            </div>
            <div className="mx-24">
              {experiences?.map((experience, i) => (
                <ExperienceCard
                  key={i}
                  jobTitle={experience.jobTitle}
                  companyLogo={experience.companyLogo}
                  jobRoles={experience.jobRoles}
                  date={experience.date}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="work py-24" id="work">
          <div className="flex flex-col items-center justify-center mt-24">
            <Titles title="プロジェクト" />
            <p className="mt-4 mb-12"></p>

            {allJobs?.map((project, i) => (
              <Work
                key={i}
                projectName={project.projectName}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                swap={i % 2}
              />
            ))}
          </div>
        </div>
        <div id="footer">
          <Footer />
        </div>
      </main>

      <div className="bg-gray-50 dark:bg-slate-900">
        <div className="copyrightWidth flex justify-center items-center gap-2 py-6">
          <LuCopyright />
          <span>2024 | Greetings with ❤️️ from Ulaanbaatar</span>
        </div>
      </div>
    </>
  );
};

export default Home;
