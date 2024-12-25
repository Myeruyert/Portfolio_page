import Titles from "../small_components";
import Paragraphs from "../small_components/paragraphs";

const paragraphDescriptions = [
  {
    des: "現在、ソフトウェアエンジニアを目指しており、特にJavaScriptを中心に学んでいます。React.js、Next.js、Express.jsなどのフレームワークを活用して、フロントエンドおよびバックエンドの両方で貢献したいと考えており、常に新しい技術を学ぶ向上心を持っています。",
  },
  {
    des: "エンジニアとしての将来の目標は、幅広い技術スキルを身につけ、実践的な開発に貢献することです。この目標を実現するために、前職を退職し、某IT教育研修機関でプログラミングを本格的に学び始めました。研修機関では、多くのプロジェクトに取り組み、実際の開発プロセスを体験しながら、実務に直結するスキルを習得しています。",
  },
  {
    des: "まだ正式な実務経験はありませんが、これらの経験を活かして、企業に対して即戦力として貢献できると考えています。",
  },
];

const AboutMe = () => {
  return (
    <div className="">
      <div className="AboutMeWidth py-12 md:py-24 px-4 md:px-0">
        <div className="flex justify-center">
          <Titles title="自己紹介" />
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mx-4 md:mx-8 mt-8 md:mt-12">
          {/* Image Section - Hidden on mobile */}
          <div className="hidden md:flex w-full md:w-1/2 justify-center md:justify-start">
            <div
              className="aboutMeImage w-96 h-96 md:ml-10 bg-cover bg-center"
              style={{
                backgroundImage: "url('images/IMG_174722.jpg')",
              }}></div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-gray-900 dark:text-white text-2xl md:text-3xl font-semibold mb-6">
              わたしについて
            </h2>

            {paragraphDescriptions.map((para, i) => (
              <Paragraphs key={i} paragraph={para.des} />
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
  );
};

export default AboutMe;
