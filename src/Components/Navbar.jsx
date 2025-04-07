import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
const Navbar = () => {
  const [movieSearch, setMovieSearch] = useState();
  const Navigate = useNavigate();
  function handleChange(e) {
    setMovieSearch(e.target.value);
    console.log(movieSearch);
  }
  function clickHandlerHome() {
    Navigate("/");
  }

  function clickHandlerTopRated() {
    Navigate("/toprated");
  }
  function clickHandlerUpComings() {
    Navigate("/upcomings");
  }

  function searchHandler(value) {
    Navigate(`/search/${value}`);
  }
  return (
    <div className="w-full h-[80px] bg-[#404040] p-5 text-white sticky">
      <nav className="flex justify-between items-center">
        <h1 className="text-4xl">OMDB</h1>
        <p onClick={clickHandlerHome} className="cursor-pointer text-xl">
          Home
        </p>
        <p onClick={clickHandlerTopRated} className="cursor-pointer text-xl">
          Top-Rated
        </p>
        <p onClick={clickHandlerUpComings} className="cursor-pointer text-xl">
          Up-Comings
        </p>

        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Enter here to search"
            className="bg-white w-[300px] h-[35px] rounded-lg text-black p-4"
            onChange={handleChange}
          />
          <button
            className="border-2 px-4 py-1 rounded-lg  cursor-pointer"
            onClick={() => searchHandler(movieSearch)}
          >
            Search
          </button>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
