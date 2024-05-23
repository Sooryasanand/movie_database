import DropDown from "./components/DropDown/DropDown";
import Header from "./components/Header/Header";
import MovieCarousel from "./components/MovieCarousel/MovieCarousel";
import TopRow from "./components/TopRow/TopRow";
import { FaFilter } from "react-icons/fa";

function App() {
  return (
    <div className="h-full">
      <Header />
      <div className="md:block hidden">
        <TopRow selected={"RECOMMENDED"} />
      </div>
      <div className="absolute right-0 top-[100px] md:hidden block mr-5">
        <DropDown
          icon={<FaFilter className="text-white" size={22} />}
          data={[
            { name: "Recommended", href: "#" },
            { name: "Library", href: "#" },
            { name: "Liked", href: "#" },
          ]}
        />
      </div>

      <MovieCarousel />
    </div>
  );
}

export default App;
