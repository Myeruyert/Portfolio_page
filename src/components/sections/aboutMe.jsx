import Titles from "../small_components";
import Paragraphs from "../small_components/paragraphs";
import { useLanguage } from "@/context/languageContext";

const AboutMe = () => {
  const { language } = useLanguage();
  const copy = {
    en: {
      title: "About Me",
      heading: "Engineer in Progress",
      paragraphs: [
        "Software Engineer with 1 year of hands-on experience in backend development and data engineering, including building and maintaining large-scale data pipelines on AWS.",
        "Worked on real-world systems involving data processing, validation, and automation. Experienced in developing ETL pipelines using Python and Apache Spark (AWS Glue), and working with cloud services such as S3, Athena, and Step Functions.",
        "Also have a background in backend and full-stack development using Java and JavaScript, contributing to enterprise applications with features such as batch processing, file handling, and validation.",
        "Currently focused on strengthening both software engineering and data engineering skills, with an interest in building scalable systems and working across backend, cloud, and data-related technologies.",
      ],
    },
    mn: {
      title: "Миний тухай",
      heading: "Хөгжүүлэгч",
      paragraphs: [
        "Fullstack хөгжүүлэлт болон дата инженерчлэлийн чиглэлээр туршлагатай програм хангамжийн инженер бөгөөд AWS дээр их хэмжээний өгөгдлийн pipeline боловсруулах, хөгжүүлэх төсөл дээр ажилласан туршлагатай.",

        "Мөн Java болон JavaScript ашиглан ERP төст системийн backend болон frontend хөгжүүлэлт гүйцэтгэж байсан.",

        "Одоогоор програм хангамж болон дата инженерчлэлийн ур чадвараа цаашид хөгжүүлэхэд төвлөрч, backend, cloud болон өгөгдөлтэй холбоотой технологиуд дээр өргөн цар хүрээний системүүд бүтээхийг зорьж байна.",
      ],
    },
    ja: {
      title: "自己紹介",
      heading: "成長中のエンジニア",
      paragraphs: [
        "AWS上で大規模データパイプラインの構築・運用を含む、バックエンド開発とデータエンジニアリングの実務経験を持つソフトウェアエンジニアです。",
        "データ処理・検証・自動化を伴う実システムに携わり、Python と Apache Spark（AWS Glue）でETLパイプラインを開発。S3、Athena、Step Functions などのクラウドサービスも活用してきました。",
        "Java と JavaScript を用いたバックエンド/フルスタック開発の経験もあり、バッチ処理、ファイル入出力、検証機能などを備えた業務システムに貢献しました。",
        "現在はソフトウェアエンジニアリングとデータエンジニアリングの両面を強化し、バックエンド・クラウド・データ領域を横断したスケーラブルなシステム構築に注力しています。",
      ],
    },
  };

  return (
    <div>
      <div className="AboutMeWidth py-12 md:py-24 px-4 md:px-0">
        <div className="flex justify-center">
          <Titles title={copy[language].title} />
        </div>

        <div className="mt-8 md:mt-12 rounded-3xl border border-gray-100 bg-white p-6 md:p-10 shadow-sm dark:border-slate-700 dark:bg-slate-800/60">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 mx-2 md:mx-4">
            {/* Image Section - Hidden on mobile */}
            <div className="hidden md:flex w-full md:w-1/2 justify-center md:justify-start ">
              <div
                className="aboutMeImage w-96 h-96 md:ml-10 bg-cover bg-center"
                style={{
                  backgroundImage: "url('images/IMG_174722.jpg')",
                }}></div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-gray-900 dark:text-white text-2xl md:text-3xl font-semibold mb-4">
                {copy[language].heading}
              </h2>
              {/* <p className="text-sm md:text-base text-emerald-700 dark:text-emerald-300 font-medium mb-4">
                Building practical full-stack products with thoughtful UX
              </p> */}

              {copy[language].paragraphs.map((para, i) => (
                <Paragraphs key={i} paragraph={para} />
              ))}

              {/* <ul className="aboutme list-disc pl-6 md:pl-8 my-6 space-y-2 text-left">
              <li>B.E. in Computer Engineering</li>
              <li>Avid Learner</li>
              <li>Full time freelancer</li>
            </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
