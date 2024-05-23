function TopRow({ selected }) {
  return (
    <div className="p-5 ml-20 justify-center flex flex-row">
      <h1
        className={`mr-4 ml-4 uppercase bg p-2 pl-5 pr-5 font-bold hover:text-white hover:bg-[#3b3f40] cursor-pointer ${
          selected === "RECOMMENDED"
            ? "text-white bg-[#3b3f40]"
            : "text-gray-400"
        }`}
      >
        Recommended
      </h1>
      <h1
        className={`mr-4 ml-4 uppercase bg p-2 pl-5 pr-5 font-bold hover:text-white hover:bg-[#3b3f40] cursor-pointer ${
          selected === "LIBRARY" ? "text-white bg-[#3b3f40]" : "text-gray-400"
        }`}
      >
        Library
      </h1>
      <h1
        className={`mr-4 ml-4 uppercase bg p-2 pl-5 pr-5 font-bold hover:text-white hover:bg-[#3b3f40] cursor-pointer ${
          selected === "LIKED" ? "text-white bg-[#3b3f40]" : "text-gray-400"
        }`}
      >
        Liked
      </h1>
    </div>
  );
}

export default TopRow;
