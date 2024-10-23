import {
  DiCss3Full,
  DiDart,
  DiHtml5,
  DiJavascript1,
  DiLaravel,
  DiPhp,
  DiReact,
} from "react-icons/di";
import {
  FaExternalLinkAlt,
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
  FaVuejs,
} from "react-icons/fa";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import mochdikiwidianto from "../assets/mochdikiwidianto.png";

const MainPage = () => {
  return (
    <div className="flex justify-center items-center my-4 mx-4">
      <div className="container border border-slate-200 rounded-lg">
        {/* Header */}
        <img
          src="https://picsum.photos/1336/400"
          alt="Picture"
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="flex flex-col justify-start lg:flex-row lg:justify-between lg:items-start lg:my-8 lg:mx-8 my-4 mx-4 lg:relative">
          <div className="-mt-28 mx-auto lg:mt-0 lg:absolute lg:left-0 lg:-top-32">
            <img
              src={mochdikiwidianto}
              alt=""
              className="rounded-full w-40 h-40 lg:w-48 lg:h-48 object-cover bg-slate-300"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start lg:ml-56 lg:pr-36 lg:mt-0 mt-5 lg:mb:0 mb-5">
            <h1 className="text-2xl font-bold mb-2 text-center lg:text-left">
              Moch Diki Widianto
            </h1>
            <p className="text-md text-center lg:text-left">
              Halo semua, Selamat datang di situsweb portofolio sederhana ini,
              Saya adalah seorang <i>fullstack developer</i> dari Rangkasbitung,
              Banten, Indonesia 🇮🇩
            </p>
          </div>
          <div className="flex justify-center lg:justify-end items-center gap-1">
            <a
              href="https://wa.me/628973570005"
              target="_blank"
              className="flex justify-start items-center border border-green-600 text-green-600 shadow-md hover:bg-green-600 hover:text-white font-bold py-2 px-4 rounded"
            >
              <FaWhatsapp className="mr-2 w-6 h-6" />
              Whatsapp
            </a>
            <a
              href="https://www.linkedin.com/in/mochdikiwidianto/"
              target="_blank"
              className="flex justify-start items-center border border-blue-700 text-blue-700 shadow-md hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded"
            >
              <FaLinkedin className="mr-2 w-6 h-6" />
              LinkedIn
            </a>
          </div>
        </div>
        {/* Profile */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-start mx-4 lg:mx-8 mt-8 mb-8">
          <div className="flex flex-col justify-start lg:w-2/3 w-full lg:pr-16 pr-0 lg:mb-0 mb-2">
            <h1 className="text-lg font-bold mb-4 text-emerald-600">
              Tentang Saya
            </h1>
            <p className="text-md mb-4 lg:text-left text-justify">
              Perkenalkan Saya Moch Diki Widianto dari Rangkasbitung, Banten,
              Indonesia. Saya merupakan seorang <i>fullstack developer</i> yang
              mempelajari bahasa pemrograman secara otodidak mencari informasi
              dari berbagai sumber di internet. Saya menyukai dunia pemrograman
              dan familiar dengan beberapa bahasa pemrogaram dan berbagai macam{" "}
              <i>framework</i>.
            </p>
            <p className="text-md lg:text-left text-justify">
              Beberapa diantaranya PHP, Laravel, React, VueJs, dan masih banyak
              lagi. Untuk dapat terhubung dengan Saya anda dapat menghubungi
              Saya melalui Whatsapp, Email, atau LinkedIn yang tertera pada
              halaman ini.
            </p>
          </div>
          <div className="flex justify-start items-start flex-wrap lg:w-1/3 w-full lg:mb-0 mb-2">
            <div className="flex flex-col xl:w-1/2 xl:px-4 xl:my-4 w-full py-1">
              <h1 className="font-bold text-slate-600">Wilayah Negara</h1>
              <p className="text-md">Rangkasbitung, Banten, Indonesia 🇮🇩</p>
            </div>
            <div className="flex flex-col xl:w-1/2 xl:px-4 xl:my-4 w-full py-1">
              <h1 className="font-bold text-slate-600">Situs Web</h1>
              <a
                href="https://dikiwidia.github.io"
                target="_blank"
                className="flex items-center text-md text-emerald-700 hover:text-emerald-800"
              >
                dikiwidia.github.com
                <FaExternalLinkAlt className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div className="flex flex-col xl:w-1/2 xl:px-4 xl:my-4 w-full py-1">
              <h1 className="font-bold text-slate-600">Surat Elektronik</h1>
              <a
                href="mailto:diki.widianto@unilam.ac.id"
                target="_blank"
                className="flex items-center text-md text-emerald-700 hover:text-emerald-800"
              >
                diki.widianto@unilam.ac.id
                <FaExternalLinkAlt className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div className="flex flex-col xl:w-1/2 xl:px-4 xl:my-4 w-full py-1">
              <h1 className="font-bold text-slate-600">GitHub</h1>
              <a
                href="https://github.com/dikiwidia"
                target="_blank"
                className="flex items-center text-md text-emerald-700 hover:text-emerald-800"
              >
                Moch Diki Widianto
                <FaExternalLinkAlt className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="flex flex-col justify-center lg:items-center lg:mx-8 lg:my-8 mx-4 my-2">
          <h1 className="text-lg font-bold text-emerald-600 mb-8">
            Bahasa Pemrograman / Framework
          </h1>
          <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center items-center gap-2 mb-8 w-full">
            <div className="flex justify-start items-center border border-emerald-300 rounded py-2 px-4 w-full lg:w-auto">
              <DiHtml5 className="w-16 h-16 text-orange-500" />
              <div className="flex flex-col justify-center items-start ml-2">
                <p className="font-bold">HTML5</p>
                <p className="text-sm mb-1 italic">
                  Hypertext Markup Language 5
                </p>
                <p className="flex text-sm gap-1">
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  {/* <FaStarHalfAlt className="w-4 h-4 text-orange-600" /> */}
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center border border-emerald-300 rounded py-2 px-4 w-full lg:w-auto">
              <DiPhp className="w-16 h-16 text-blue-500" />
              <div className="flex flex-col justify-center items-start ml-2">
                <p className="font-bold">PHP</p>
                <p className="text-sm mb-1 italic">
                  PHP: Hypertext Preprocessor
                </p>
                <p className="flex text-sm gap-1">
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  {/* <FaStarHalfAlt className="w-4 h-4 text-orange-600" /> */}
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center border border-emerald-300 rounded py-2 px-4 w-full lg:w-auto">
              <DiCss3Full className="w-16 h-16 text-blue-700" />
              <div className="flex flex-col justify-center items-start ml-2">
                <p className="font-bold">CSS3</p>
                <p className="text-sm mb-1 italic">Cascading Style Sheets 3</p>
                <p className="flex text-sm gap-1">
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  {/* <FaStar className="w-4 h-4 text-orange-600" /> */}
                  <FaStarHalfAlt className="w-4 h-4 text-orange-600" />
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center border border-emerald-300 rounded py-2 px-4 w-full lg:w-auto">
              <DiJavascript1 className="w-16 h-16 text-yellow-500" />
              <div className="flex flex-col justify-center items-start ml-2">
                <p className="font-bold">JS</p>
                <p className="text-sm mb-1 italic">JavaScript</p>
                <p className="flex text-sm gap-1">
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  {/* <FaStar className="w-4 h-4 text-orange-600" /> */}
                  <FaStarHalfAlt className="w-4 h-4 text-orange-600" />
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center border border-emerald-300 rounded py-2 px-4 w-full lg:w-auto">
              <DiDart className="w-16 h-16 text-blue-400" />
              <div className="flex flex-col justify-center items-start ml-2">
                <p className="font-bold">Dart</p>
                <p className="text-sm mb-1 italic">Dart Framework</p>
                <p className="flex text-sm gap-1">
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  {/* <FaStar className="w-4 h-4 text-orange-600" /> */}
                  {/* <FaStar className="w-4 h-4 text-orange-600" /> */}
                  <FaStarHalfAlt className="w-4 h-4 text-orange-600" />
                  <FaRegStar className="w-4 h-4 text-orange-600" />
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center border border-emerald-300 rounded py-2 px-4 w-full lg:w-auto">
              <DiReact className="w-16 h-16 text-blue-500" />
              <div className="flex flex-col justify-center items-start ml-2">
                <p className="font-bold">ReactJs</p>
                <p className="text-sm mb-1 italic">ReactJs</p>
                <p className="flex text-sm gap-1">
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  {/* <FaStar className="w-4 h-4 text-orange-600" /> */}
                  {/* <FaStar className="w-4 h-4 text-orange-600" /> */}
                  <FaStarHalfAlt className="w-4 h-4 text-orange-600" />
                  <FaRegStar className="w-4 h-4 text-orange-600" />
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center border border-emerald-300 rounded py-2 px-4 w-full lg:w-auto">
              <DiLaravel className="w-16 h-16 text-orange-500" />
              <div className="flex flex-col justify-center items-start ml-2">
                <p className="font-bold">Laravel</p>
                <p className="text-sm mb-1 italic">Laravel Framework</p>
                <p className="flex text-sm gap-1">
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  {/* <FaStarHalfAlt className="w-4 h-4 text-orange-600" />
                  <FaRegStar className="w-4 h-4 text-orange-600" /> */}
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center border border-emerald-300 rounded py-2 px-4 w-full lg:w-auto">
              <FaVuejs className="w-16 h-16 text-green-500" />
              <div className="flex flex-col justify-center items-start ml-2">
                <p className="font-bold">VueJs</p>
                <p className="text-sm mb-1 italic">VueJs Framework</p>
                <p className="flex text-sm gap-1">
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  {/* <FaStar className="w-4 h-4 text-orange-600" /> */}
                  <FaStarHalfAlt className="w-4 h-4 text-orange-600" />
                  {/* <FaRegStar className="w-4 h-4 text-orange-600" /> */}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="flex justify-center items-center mx-8 lg:my-4  border-t-2 border-slate-100 py-4">
          <p className="text-sm text-slate-500">
            Hak Cipta &copy; {new Date().getFullYear()} Moch Diki Widianto
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
