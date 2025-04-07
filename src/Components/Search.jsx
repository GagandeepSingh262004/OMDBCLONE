import axios from "axios";
import { use, useEffect, useState } from "react";
import { data, useNavigate, useParams } from "react-router";

const Search = () => {
  const [searchdata, setSearchData] = useState(null);
  const { searchresult } = useParams();
  const Navigate = useNavigate();
  //   console.log(searchresult);
  const response = async () => {
    try {
      const data = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${searchresult}&api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      console.log(data);
      setSearchData(data.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    response();
  }, []);

  function handleClick(id) {
    console.log("click");
    Navigate(`/movieinfo/${id}`)
  }
  if (searchdata) {
    return (
      <div className="w-full flex flex-wrap gap-4 justify-center items-center pt-4 bg-black text-white">
        {searchdata.map((data) => {
          return (
            <div key={data.id} className="flex  flex-col  cursor-pointer">
              <img
                src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                className=" h-[300px] w-[300px] object-fit rounded-lg"
                onClick={() => handleClick(data.id)}
              />
              <p className="text-xl font-semibold pt-2 gap-2">{data.title}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    <p>NOt found</p>;
  }
};

export default Search;
