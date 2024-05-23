import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { IoMusicalNotes } from "react-icons/io5";

/* fixed top-20 left-0 */

const SideBar = () => {
  return (
    <div className="h-screen absolute left-0 top-20 w-20 m-0 flex flex-col bg-gradient-to-b from-[#1c2021] to-transparent text-white shadow-lg pt-3 transition-all duration-300 ease-linear">
      <div className="sidebar-icon group">
        <MdLocalMovies size="28" />
        <span className="sidebar-tooltip group-hover:scale-100 z-50">
          Movies
        </span>
      </div>
      <div className="sidebar-icon group">
        <PiTelevisionSimpleFill size="28" />
        <span className="sidebar-tooltip group-hover:scale-100 z-50">
          TV Shows
        </span>
      </div>
      <div className="sidebar-icon group">
        <IoMusicalNotes size="28" />
        <span className="sidebar-tooltip group-hover:scale-100 z-50">
          Music
        </span>
      </div>
    </div>
  );
};

export default SideBar;
