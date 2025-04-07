import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
axios;
const TopRated = () => {
  const [movies, setMovies] = useState(null);
  const Navigate = useNavigate();
  const data = async () => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1`
      );
      console.log(result.data);
      setMovies(result.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    data();
  }, []);
  function handleClick(movieid) {
    // console.log(movieid);
    console.log("click");
    Navigate(`/movieinfo/${movieid}`);
  }
  if (movies) {
    return(
        <div className="w-full flex flex-wrap gap-4 justify-center pt-4 bg-black text-white">
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="flex flex-col  cursor-pointer">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                className=" h-[300px] w-[300px] object-fit rounded-lg"
                onClick={() => handleClick(movie.id)}
              />
              <p className="text-xl font-semibold pt-2 gap:2">{movie.title}</p>
            </div>
          );
        })}
      </div>
    )
  }
};
export default TopRated;
