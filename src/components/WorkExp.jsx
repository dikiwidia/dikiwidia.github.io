import { FaBuilding } from "react-icons/fa";

const WorkExpComponent = (props) => {
  const { title, place, desc, children } = props;
  return (
    <li className="flex flex-col justify-center items-start relative">
      <div className="flex justify-center items-center absolute -left-12 top-0 w-8 h-8 bg-emerald-600 rounded-full text-slate-100">
        <FaBuilding className="w-5 h-5" />
      </div>
      <h1 className="text-lg font-bold text-emerald-600">{title}</h1>
      <p className="text-sm text-slate-600 font-bold">{place}</p>
      <p className="text-sm text-slate-500 mb-2">{desc}</p>
      <p className="text-md text-slate-600">{children}</p>
    </li>
  );
};

export default WorkExpComponent;
