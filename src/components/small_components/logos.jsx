import { SiJavascript } from "react-icons/si";

const Logos = ({logos, texts}) => {
    return (
        <div className="flex flex-col items-center">
             {logos}
          <p className="text-lg mt-2">{texts}</p>
        </div>
       

    )
};

export default Logos;