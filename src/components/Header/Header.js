import { PiFilmSlateFill } from "react-icons/pi";
import SideBar from "../SideBar/Sidebar";
import { useState } from "react";
import DropDown from "../DropDown/DropDown";
import { CgProfile } from "react-icons/cg";

function Header() {
  let [open, isOpen] = useState(false);

  return (
    <div>
      <div className="sm:p-3 p-4 flex flex-row bg-gradient-to-r from-[#1c2021] to-[#171b1c] items-center justify-center sm:h-1/10 w-full h-20">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 md:hidden items-center justify-center mx-auto mr-5"
          onClick={() => {
            if (open === false) {
              isOpen(true);
            } else {
              isOpen(false);
            }
          }}
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M4 18L20 18"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M4 12L20 12"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M4 6L20 6"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
            ></path>{" "}
          </g>
        </svg>
        <div className="flex flex-row grow">
          <PiFilmSlateFill className="content-center sm:mt-2 sm:mr-10 sm:ml-[15px] md:block hidden text-white text-3xl" />
          <h1 className="font-poetsen font-bold text-xl text-white text-transform:uppercase sm:text-2xl content-center w-auto">
            Movie Tracker
          </h1>
          <div className="ml-10 w-1/4 md:flex flex-row items-center rounded bg-menu invisible md:visible">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400 ml-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <input
              type="search"
              id="default-search"
              className="form-input w-full h-10 bg-menu border-none text-white rounded"
              placeholder="Search"
              required
            />
          </div>
        </div>
        <DropDown
          icon={<CgProfile className="text-white" size={28} />}
          data={[
            { name: "Account Setting", href: "#" },
            { name: "Sign Out", href: "#" },
          ]}
        />
      </div>
      <div className={`md:block ${open ? "block" : "hidden"}`}>
        <SideBar />
      </div>
    </div>
  );
}

export default Header;
