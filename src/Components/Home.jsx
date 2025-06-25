import axios from "axios";
import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router";
const Home = () => {
  const [movies, setMovies] = useState(null);
  const Navigate = useNavigate();
  const data = async () => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      //   const response = await result.json();
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
    return (
      <div className="w-full p-14 gap-4 bg-black text-white mx-auto max-w-full pt-[100px]">
        <div className="grid gap-10  grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
          {movies.map((movie) => {
            return (
              <div key={movie.id} className="grid gap-6 ">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                  className=" h-[300px] w-full object-cover rounded-lg"
                  onClick={() => handleClick(movie.id)}
                  alt={data?.title}
                />

                <p className="text-xl font-semibold pt-2 gap-2 truncate ">
                  {movie.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};
export default Home;
