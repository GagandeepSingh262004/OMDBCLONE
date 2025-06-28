import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const Search = () => {
  const [searchdata, setSearchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { searchresult } = useParams();
  const Navigate = useNavigate();

  const response = async () => {
    try {
      setLoading(true);
      const data = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${searchresult}&api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      setSearchData(data.data.results);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    response();
  }, [searchresult]);

  function handleClick(id) {
    Navigate(`/movieinfo/${id}`);
  }

  return (
    <div className="w-full max-w-full gap-4 justify-center items-center p-14 bg-black text-white pt-[100px] min-h-screen">
      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : searchdata && searchdata.length > 0 ? (
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
          {searchdata.map((data) => (
            <div key={data.id} className="flex flex-col cursor-pointer">
              <img
                src={
                  data.poster_path
                    ? `https://image.tmdb.org/t/p/original${data.poster_path}`
                    : "https://via.placeholder.com/300x450?text=No+Image"
                }
                alt={data.title}
                className="h-[300px] w-[300px] object-cover rounded-lg"
                onClick={() => handleClick(data.id)}
              />
              <p className="text-xl font-semibold pt-2">{data.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl mt-10">
          No results found for "{searchresult}"
        </p>
      )}
    </div>
  );
};

export default Search;
