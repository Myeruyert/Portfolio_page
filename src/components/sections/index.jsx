import { SlLocationPin } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import Paragraphs from "../small_components/paragraphs";
import SocialLinks from "../small_components/socialLinks";

const Intro = () => {
  return (
    <>
      <section className="flex justify-between py-24 pr-20">
        <div className="w-1/2">
          <div className="text mb-12">
            <h1 className="text-6xl font-bold">Hi, I’m Tom 👋</h1>
            <Paragraphs
            paragraph="I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 7 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs."
            />
          </div>
          <div className="mb-12">
            <div className="mb-2 flex items-center">
              <SlLocationPin className="mr-2" />
              <span> Ulaanbaatar, Mongolia</span>
            </div>
            <div className="flex items-center">
              <GoDotFill className="mr-2 text-emerald-500" />
              <span>Available for new projects</span>
            </div>
          </div>
          <div className="logos">
            <SocialLinks/>
          </div>
        </div>

        <img
          className="introImage w-72 h-80"
          src="https://s3-alpha-sig.figma.com/img/f3c0/0e99/fcbb58c0fdf3c59259201153876040ea?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pchkx3mbCiax585SR5Sl4yZdFxV-t2xjgxDWDgH-HYRrKa7pOkf07p9lsL08dzqAC6a3DEP2v6KH25MszvUL94tH4msTnUo89oONjvsX41KRJ9aDAXIOs7Myyhwpq7cJYVHUAPHv~bis827YXtK2gGgWoZfHev--GzaqY320fRM-7NQFgw3k7fSn0nHjQGc26HH6kiLSJQchZY~1NJ1KNW2RiGYMbOMETUwExsK7jmCiScEfjjXsQ0kHy1PZ5apaavazXZ4i5rI9OgW5keYarTQkQWjWt4rhvvdz~21IA5Aowubc~IcbjrjNtdV1AUAaUHlDStFDkFoEtiATA5i5RA__"
          alt=""
        />
      </section>
    </>
  );
};

export default Intro;
