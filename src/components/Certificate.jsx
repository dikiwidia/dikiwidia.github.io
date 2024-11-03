import { FaDownload } from "react-icons/fa";

const CertificateComponent = (props) => {
  const { title, lang, image, link, children } = props;
  return (
    <div className="flex flex-col items-center rounded border border-slate-100 bg-slate-50 w-full lg:w-1/4 shadow-md">
      <img
        src={image}
        className="w-full h-auto object-contain rounded-t shadow-sm"
        alt=""
      />
      <div className="flex flex-col py-4 px-4 w-full h-full">
        <h2 className="text-lg font-bold text-emerald-600">{title}</h2>
        <p className="text-sm text-slate-500 italic mb-2">{lang}</p>
        <p className="text-md text-slate-600">{children}</p>
      </div>
      <div className="flex justify-center items-center w-full mb-4 px-2">
        <a
          href={link}
          target="_blank"
          className="flex items-center gap-1 text-sm bg-slate-500 hover:bg-emerald-600 text-slate-50 px-4 py-2 rounded-sm"
        >
          <FaDownload className="w-4 h-4" />
          Unduh Sertifikat
        </a>
      </div>
    </div>
  );
};

export default CertificateComponent;
