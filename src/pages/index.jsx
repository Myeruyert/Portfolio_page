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
import { useLanguage } from "@/context/languageContext";

const experiencesByLanguage = {
  en: [
    {
      jobTitle: "Software Engineer",
      position: "Tokyo, Japan",
      companyLogo: "/images/metro-logo.gif",
      subRoles1: [
        { title: "AWS Data Pipeline Development" },
        {
          des: "Built and automated ETL pipelines on AWS to process large-scale data and load into Iceberg tables",
        },
        {
          des: "Orchestrated data workflows with EventBridge and Step Functions, with storage/querying via S3 and Athena",
        },
      ],
      subRoles2: [
        { title: "Backend & Full-Stack Development" },
        {
          des: "Developed backend and frontend features for enterprise systems",
        },
        {
          des: "Performed unit and integration testing, and resolved system issues in production-like environments",
        },
      ],
      date: "2025.02-2026.04",
    },
    {
      jobTitle: "Human Resources Specialist",
      position: "Ulaanbaatar, Mongolia",
      companyLogo: "/images/gobi.png",
      jobRoles: [
        "Managed recruitment processes for the sales department",
        "Handled onboarding/offboarding, employment contracts, and attendance records",
        "Managed payroll processing and employee benefits",
        "Coordinated procedures for leave and internal transfers",
      ],
      date: "2023.05-2024.05",
    },
  ],
  mn: [
    {
      jobTitle: "Программ хангамжийн инженер",
      position: "Токио, Япон",
      companyLogo: "/images/metro-logo.gif",
      subRoles1: [
        { title: "AWS өгөгдлийн пайплайн хөгжүүлэлт" },
        {
          des: "AWS дээр их хэмжээний өгөгдөл боловсруулах ETL pipeline-уудыг бүтээж автоматжуулан, Iceberg хүснэгтэд ачаалсан",
        },
        {
          des: "EventBridge болон Step Functions ашиглан өгөгдлийн урсгалыг зохион байгуулж, S3 ба Athena-гаар хадгалалт/асуулгыг шийдсэн",
        },
      ],
      subRoles2: [
        { title: "Backend ба Full-Stack хөгжүүлэлт" },
        {
          des: "Enterprise системүүдийн backend болон frontend боломжуудыг хөгжүүлсэн",
        },
        {
          des: "Unit болон integration тест хийж, production-тэй төстэй орчин дахь системийн асуудлуудыг шийдвэрлэсэн",
        },
      ],
      date: "2025.02-2026.04",
    },
    {
      jobTitle: "Хүний нөөцийн мэргэжилтэн",
      position: "Улаанбаатар, Монгол",
      companyLogo: "/images/gobi.png",
      jobRoles: [
        "Борлуулалтын хэлтсийн сонгон шалгаруулалтын процессыг удирдсан",
        "Onboarding/offboarding, хөдөлмөрийн гэрээ, ирцийн бүртгэлийг хариуцсан",
        "Цалин бодолт болон ажилтны хангамжийн процессыг хариуцсан",
        "Чөлөө болон дотоод шилжилтийн үйл явцыг зохицуулсан",
      ],
      date: "2023.05-2024.05",
    },
  ],
  ja: [
    {
      jobTitle: "ソフトウェアエンジニア",
      position: "東京、日本",
      companyLogo: "/images/metro-logo.gif",
      subRoles1: [
        { title: "AWSデータパイプライン開発" },
        {
          des: "AWS上で大規模データを処理するETLパイプラインを構築・自動化し、Icebergテーブルにロード",
        },
        {
          des: "EventBridge と Step Functions でデータワークフローをオーケストレーションし、S3 と Athena で保存/クエリを実現",
        },
      ],
      subRoles2: [
        { title: "バックエンド/フルスタック開発" },
        {
          des: "業務システム向けにバックエンドおよびフロントエンド機能を開発",
        },
        {
          des: "単体・結合テストを実施し、本番相当環境でのシステム課題を解決",
        },
      ],
      date: "2025.02-2026.04",
    },
    {
      jobTitle: "人事スペシャリスト",
      position: "ウランバートル、モンゴル",
      companyLogo: "/images/gobi.png",
      jobRoles: [
        "営業部門の採用プロセスを管理",
        "オンボーディング/オフボーディング、雇用契約、勤怠記録を対応",
        "給与処理と福利厚生運用を管理",
        "休暇手続きと社内異動手続きを調整",
      ],
      date: "2023.05-2024.05",
    },
  ],
};

const allJobsByLanguage = {
  en: [
    {
      projectName: "MS&AD",
      image: "/images/Amazon_Web_Services-Logo.wine.png",
      description: [
        {
          des: "Designed and implemented data processing pipelines on AWS for large-scale datasets (100M+ rows, 7,000+ columns)",
        },
        {
          des: "Developed ETL processes using AWS Glue (Apache Spark) and Python to transform and load data into Iceberg tables.",
        },
        {
          des: "Built automated workflows using EventBridge and Step Functions.",
        },
        {
          des: "Managed data storage in S3 and enabled querying using Athena.",
        },
        {
          des: "Implemented data validation and processing steps within AWS pipeline.",
        },
        {
          des: "Worked with data lake architecture and large-scale data ingestion.",
        },
      ],
      technologies: [
        { title: "AWS Glue" },
        { title: "Apache Spark" },
        { title: "Apache Iceberg" },
        { title: "AWS S3" },
        { title: "AWS Athena" },
        { title: "AWS Event Bridge" },
        { title: "AWS Step Functions" },
        { title: "AWS IAM" },
        { title: "AWS CloudWatch" },
        { title: "AWS Lake Formation" },
        { title: "Python" },
      ],
      link: "",
    },
    {
      projectName: "Pawchig",
      image: "/images/pawchig.png",
      description: [
        { des: "A platform for animal adoption, donations and rescue." },
        {
          des: "Team leader: Reviewed team members' code and managed overall project progress.",
        },
        {
          des: "Built the admin site: Animal registration, adoption post creation, and donation post management.",
        },
        {
          des: "Registration/login feature: Implemented sign-up and sign-in functionality.",
        },
        {
          des: "Adoption feature owner: Designed and implemented both frontend and backend for the adoption page.",
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
        { title: "Figma" },
        { title: "Express.js" },
        { title: "Vercel" },
        { title: "Git" },
        { title: "NPM" },
      ],
      link: "",
    },
    {
      projectName: "Smart Industry System",
      image: "/images/bg_advantages.jpg",
      description: [
        {
          des: "Developed backend and frontend features for enterprise applications using Java-based frameworks.",
        },
        {
          des: "Implemented features such as: Batch update processing, Application/approval workflows, File input/output handling, Data validation and checking functions.",
        },
        {
          des: "Investigated and resolved system issues and bugs.",
        },
        {
          des: "Contributed to system enhancements and version updates.",
        },
      ],
      technologies: [
        { title: "Java" },
        { title: "JavaScript" },
        { title: "PostgreSQL" },
        { title: "Struts2" },
        { title: "SVN" },
        { title: "Bootstrap" },
        { title: "TeraTerm" },
        { title: "Eclipse" },
      ],
      link: "",
    },
  ],
  mn: [
    {
      projectName: "MS&AD",
      image: "/images/Amazon_Web_Services-Logo.wine.png",
      description: [
        {
          des: "AWS дээрх том хэмжээний өгөгдөлд (100M+ мөр, 7,000+ багана) зориулсан өгөгдөл боловсруулах пайплайнуудыг зохион байгуулж хэрэгжүүлсэн",
        },
        {
          des: "AWS Glue (Apache Spark) болон Python ашиглан өгөгдлийг хувиргаж Iceberg хүснэгтэд ачаалах ETL процессуудыг хөгжүүлсэн.",
        },
        {
          des: "EventBridge болон Step Functions ашигласан автомат workflow-уудыг бүтээсэн.",
        },
        {
          des: "S3 дээр өгөгдлийн хадгалалтыг удирдаж, Athena ашиглан асуулга хийх боломж бүрдүүлсэн.",
        },
        {
          des: "AWS pipeline дотор өгөгдөл шалгах болон боловсруулах алхмуудыг хэрэгжүүлсэн.",
        },
        {
          des: "Data lake архитектур болон том хэмжээний өгөгдөл татан төвлөрүүлэх ажиллагаан дээр ажилласан.",
        },
      ],
      technologies: [
        { title: "AWS Glue" },
        { title: "Apache Spark" },
        { title: "Apache Iceberg" },
        { title: "AWS S3" },
        { title: "AWS Athena" },
        { title: "AWS Event Bridge" },
        { title: "AWS Step Functions" },
        { title: "AWS IAM" },
        { title: "AWS CloudWatch" },
        { title: "AWS Lake Formation" },
        { title: "Python" },
      ],
      link: "",
    },
    {
      projectName: "Pawchig",
      image: "/images/pawchig.png",
      description: [
        {
          des: "Амьтан үрчлүүлэх, хандив, аврах ажиллагаанд зориулсан платформ.",
        },
        {
          des: "Багийн ахлагч: Багийн гишүүдийн кодыг хянаж, төслийн ерөнхий явцыг удирдсан.",
        },
        {
          des: "Админ сайт хөгжүүлсэн: амьтны бүртгэл, үрчлэлтийн пост үүсгэх, хандивын пост удирдах.",
        },
        {
          des: "Бүртгэл/нэвтрэх боломж: sign-up болон sign-in функцийг хэрэгжүүлсэн.",
        },
        {
          des: "Үрчлэлтийн feature-ийн эзэн: үрчлэлтийн хуудсын frontend болон backend-ийг хоёуланг нь зохион бүтээж хэрэгжүүлсэн.",
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
        { title: "Figma" },
        { title: "Express.js" },
        { title: "Vercel" },
        { title: "Git" },
        { title: "NPM" },
      ],
      link: "",
    },
    {
      projectName: "Ухаалаг Үйлдвэрийн Систем",
      image: "/images/bg_advantages.jpg",
      description: [
        {
          des: "Java-д суурилсан framework ашиглан enterprise аппликейшнуудын backend болон frontend боломжуудыг хөгжүүлсэн.",
        },
        {
          des: "Дараах боломжуудыг хэрэгжүүлсэн: batch update processing, өргөдөл/баталгаажуулалтын workflow, файл input/output, өгөгдөл шалгах болон баталгаажуулах функцууд.",
        },
        {
          des: "Системийн асуудал, алдааг шинжилж шийдвэрлэсэн.",
        },
        {
          des: "Системийн сайжруулалт болон хувилбарын шинэчлэлтэд хувь нэмэр оруулсан.",
        },
      ],
      technologies: [
        { title: "Java" },
        { title: "JavaScript" },
        { title: "PostgreSQL" },
        { title: "Struts2" },
        { title: "SVN" },
        { title: "Bootstrap" },
        { title: "TeraTerm" },
        { title: "Eclipse" },
      ],
      link: "",
    },
  ],
  ja: [
    {
      projectName: "MS&AD",
      image: "/images/Amazon_Web_Services-Logo.wine.png",
      description: [
        {
          des: "AWS上で大規模データセット（1億行以上、7,000列以上）向けのデータ処理パイプラインを設計・実装",
        },
        {
          des: "AWS Glue（Apache Spark）と Python を用いて、データを変換し Iceberg テーブルへロードするETL処理を開発。",
        },
        {
          des: "EventBridge と Step Functions による自動ワークフローを構築。",
        },
        {
          des: "S3でのデータ保管を管理し、Athenaによるクエリ実行を実現。",
        },
        {
          des: "AWSパイプライン内でデータ検証および処理ステップを実装。",
        },
        {
          des: "データレイクアーキテクチャと大規模データ取り込みに対応。",
        },
      ],
      technologies: [
        { title: "AWS Glue" },
        { title: "Apache Spark" },
        { title: "Apache Iceberg" },
        { title: "AWS S3" },
        { title: "AWS Athena" },
        { title: "AWS Event Bridge" },
        { title: "AWS Step Functions" },
        { title: "AWS IAM" },
        { title: "AWS CloudWatch" },
        { title: "AWS Lake Formation" },
        { title: "Python" },
      ],
      link: "",
    },
    {
      projectName: "Pawchig",
      image: "/images/pawchig.png",
      description: [
        { des: "動物の里親募集、寄付、保護を支援するプラットフォーム。" },
        {
          des: "チームリーダーとして、メンバーのコードレビューとプロジェクト全体の進行管理を担当。",
        },
        {
          des: "管理画面を開発：動物登録、里親投稿作成、寄付投稿管理を実装。",
        },
        {
          des: "登録/ログイン機能：サインアップとサインイン機能を実装。",
        },
        {
          des: "里親機能オーナーとして、里親ページのフロントエンドとバックエンドの両方を設計・実装。",
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
        { title: "Figma" },
        { title: "Express.js" },
        { title: "Vercel" },
        { title: "Git" },
        { title: "NPM" },
      ],
      link: "",
    },
    {
      projectName: "スマート産業システム",
      image: "/images/bg_advantages.jpg",
      description: [
        {
          des: "Javaベースのフレームワークを用いて、業務アプリケーションのバックエンド/フロントエンド機能を開発。",
        },
        {
          des: "バッチ更新処理、申請/承認ワークフロー、ファイル入出力、データ検証機能などを実装。",
        },
        {
          des: "システム不具合やバグの調査・解決を実施。",
        },
        {
          des: "システム改善およびバージョンアップに貢献。",
        },
      ],
      technologies: [
        { title: "Java" },
        { title: "JavaScript" },
        { title: "PostgreSQL" },
        { title: "Struts2" },
        { title: "SVN" },
        { title: "Bootstrap" },
        { title: "TeraTerm" },
        { title: "Eclipse" },
      ],
      link: "",
    },
  ],
};

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguage();

  const copy = {
    en: {
      experienceTitle: "Work Experience",
      experienceSubtitle:
        "A journey across engineering, operations, and problem solving.",
      projectTitle: "Projects",
      projectSubtitle:
        // "Selected projects focused on real users and practical outcomes.",
        "",
      copyright: "2026 | Greetings with ❤️ from Ulaanbaatar, Mongolia",
    },
    mn: {
      experienceTitle: "Ажлын туршлага",
      experienceSubtitle:
        // "Инженерчлэл, үйл ажиллагаа, асуудал шийдлийн замнал.",
        "",
      projectTitle: "Төслүүд",
      projectSubtitle:
        // "Бодит хэрэглэгч болон практик үр дүнд төвлөрсөн сонгомол төслүүд.",
        "",
      copyright: "2026 | Улаанбаатараас мэндчилж байна ❤️",
    },
    ja: {
      experienceTitle: "職務経験",
      experienceSubtitle:
        "エンジニアリング、オペレーション、課題解決に取り組んだ歩みです。",
      projectTitle: "プロジェクト",
      projectSubtitle:
        "実ユーザーと実用的な成果にフォーカスした代表的なプロジェクトです。",
      copyright: "2026 | ウランバートルからごあいさつ ❤️",
    },
  };
  const experiences =
    experiencesByLanguage[language] ?? experiencesByLanguage.en;
  const allJobs = allJobsByLanguage[language] ?? allJobsByLanguage.en;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className="w-screen bg-transparent dark:bg-slate-900">
        <Header />
      </div>

      <main className="bg-white dark:bg-slate-900">
        <Intro />
        <div id="about" className="bg-gray-50/80 dark:bg-slate-900">
          <AboutMe />
        </div>
        <section id="skills" className="bg-white dark:bg-slate-900">
          <Skills />
        </section>
        <div
          className="bg-gray-50/80 py-20 md:py-24 dark:bg-slate-900"
          id="experience">
          <div className="experienceWidth">
            <div className="flex flex-col items-center">
              <Titles title={copy[language].experienceTitle} />
              <p className="mt-4 mb-10 text-gray-600 dark:text-gray-300 text-center">
                {copy[language].experienceSubtitle}
              </p>
            </div>
            <div className="mx-2 md:mx-10">
              {experiences?.map((experience, i) => (
                <ExperienceCard
                  key={i}
                  jobTitle={experience.jobTitle}
                  position={experience.position}
                  companyLogo={experience.companyLogo}
                  jobRoles={experience.jobRoles}
                  subRoles1={experience.subRoles1}
                  subRoles2={experience.subRoles2}
                  date={experience.date}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="work py-20 md:py-24" id="work">
          <div className="flex flex-col items-center justify-center">
            <Titles title={copy[language].projectTitle} />
            <p className="mt-4 mb-10 text-gray-600 dark:text-gray-300 text-center">
              {copy[language].projectSubtitle}
            </p>

            {allJobs?.map((project, i) => (
              <Work
                key={i}
                projectName={project.projectName}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                link={project.link}
                swap={i % 2}
              />
            ))}
          </div>
        </div>
        <div id="footer">
          <Footer />
        </div>
      </main>

      <div className="bg-gray-50 dark:bg-slate-900 margin-bottom-10 border-t border-gray-200 dark:border-slate-700">
        <div className="copyrightWidth flex justify-center items-center gap-2 py-6">
          <LuCopyright className="text-gray-600 dark:text-gray-300" />
          <span className="text-gray-600 dark:text-gray-300">
            {copy[language].copyright}
          </span>
          <span className="pb-10"></span>
        </div>
      </div>
    </>
  );
};

export default Home;
