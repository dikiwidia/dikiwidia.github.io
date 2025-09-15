import {
  DiCss3Full,
  DiDart,
  DiHtml5,
  DiJavascript1,
  DiJqueryLogo,
  DiLaravel,
  DiPhp,
  DiReact,
  DiUbuntu,
} from "react-icons/di";
import {
  FaBootstrap,
  FaProjectDiagram,
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
  FaVuejs,
} from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import {
  RiFileExcel2Fill,
  RiFileWord2Fill,
  RiTailwindCssFill,
} from "react-icons/ri";

const ProgramLangComponent = (props) => {
  const { lang, title, rating } = props;
  let programLang = "";
  let programTitle = title;
  let programDesc = "";
  switch (lang) {
    case "html5":
      programTitle = "HTML5";
      programLang = <DiHtml5 className="w-16 h-16 text-orange-500" />;
      programDesc = "Hypertext Markup Language 5";
      break;
    case "css3":
      programTitle = "CSS3";
      programLang = <DiCss3Full className="w-16 h-16 text-blue-700" />;
      programDesc = "Cascading Style Sheets 3";
      break;
    case "js":
      programTitle = "JavaScript";
      programLang = <DiJavascript1 className="w-16 h-16 text-yellow-500" />;
      programDesc = "JavaScript";
      break;
    case "php":
      programTitle = "PHP";
      programLang = <DiPhp className="w-16 h-16 text-blue-500" />;
      programDesc = "Hypertext Preprocessor";
      break;
    case "laravel":
      programTitle = "Laravel";
      programLang = <DiLaravel className="w-16 h-16 text-orange-500" />;
      programDesc = "PHP Framework";
      break;
    case "react":
      programTitle = "React";
      programLang = <DiReact className="w-16 h-16 text-blue-500" />;
      programDesc = "JavaScript Library";
      break;
    case "dart":
      programTitle = "Dart";
      programLang = <DiDart className="w-16 h-16 text-blue-400" />;
      programDesc = "Dart";
      break;
    case "tailwindcss":
      programTitle = "TailwindCSS";
      programLang = <RiTailwindCssFill className="w-16 h-16 text-sky-500" />;
      programDesc = "TailwindCSS";
      break;
    case "vuejs":
      programTitle = "VueJS";
      programLang = <FaVuejs className="w-16 h-16 text-green-500" />;
      programDesc = "VueJS";
      break;
    case "jquery":
      programTitle = "jQuery";
      programLang = <DiJqueryLogo className="w-16 h-16 text-blue-500" />;
      programDesc = "Javascript Library";
      break;
    case "bootstrap":
      programTitle = "Bootstrap";
      programLang = <FaBootstrap className="w-16 h-16 text-blue-400" />;
      programDesc = "Bootstrap";
      break;
    case "ubuntu-server":
      programTitle = "Ubuntu Server";
      programLang = <DiUbuntu className="w-16 h-16 text-red-400" />;
      programDesc = "Ubuntu Server, CI/CD, Web Server";
      break;
    case "ms-excel":
      programTitle = "Microsoft Excel";
      programLang = <RiFileExcel2Fill className="w-16 h-16 text-green-700" />;
      programDesc = "Microsoft Excel";
      break;
    case "ms-word":
      programTitle = "Microsoft Word";
      programLang = <RiFileWord2Fill className="w-16 h-16 text-blue-700" />;
      programDesc = "Microsoft Word";
      break;
    case "figma":
      programTitle = "Figma";
      programLang = <FiFigma className="w-16 h-16 text-blue-400" />;
      programDesc = "Figma";
      break;
    default:
      programTitle = lang;
      programLang = <FaProjectDiagram className="w-16 h-16 text-rose-400" />;
      programDesc = lang;
      break;
  }

  const roundingRate = Math.floor(rating);
  const star = [];
  for (let i = 1; i <= 5; i++) {
    let elem = <FaRegStar key={i} className="w-4 h-4 text-orange-500" />;
    if (roundingRate >= 0) {
      const realRoundRate = roundingRate > 5 ? 5 : roundingRate;
      if (i <= realRoundRate) {
        elem = <FaStar key={i} className="w-4 h-4 text-orange-500" />;
      } else {
        if (realRoundRate !== 5 && rating - roundingRate > 0) {
          elem = <FaStarHalfAlt key={i} className="w-4 h-4 text-orange-500" />;
        }
      }
    }
    star.push(elem);
  }

  return (
    <div className="flex justify-start items-center border border-slate-300 rounded py-2 px-4 w-full lg:w-auto bg-slate-50">
      {programLang}
      <div className="flex flex-col justify-center items-start ml-2">
        <p className="font-bold">{programTitle}</p>
        <p className="text-sm mb-1 italic">{programDesc}</p>
        <p className="flex text-sm gap-1">{star}</p>
      </div>
    </div>
  );
};

export default ProgramLangComponent;
