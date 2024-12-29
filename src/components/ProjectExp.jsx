const ProjectExpComponent = (props) => {
  const { title, lang, image, children } = props;
  return (
    <div className="flex flex-col items-center justify-stretch w-full lg:w-1/4 p-2">
      <div className="flex flex-col rounded border border-slate-100 bg-slate-50 w-full shadow-md h-full">
        <img
          src={image}
          className="w-full h-auto object-contain rounded-t shadow-sm"
          alt=""
        />
        <div className="flex flex-col w-full py-4 px-4">
          <h2 className="text-lg font-bold text-emerald-600">{title}</h2>
          <p className="text-sm text-slate-500 italic mb-2">{lang}</p>
          <p className="text-md text-slate-600">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectExpComponent;
