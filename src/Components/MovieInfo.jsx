import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movieinfo = () => {
  const [movieDetail, setMovieDetail] = useState(null);
  const { movieid } = useParams();
  //   console.log("movieid from URL:", movieid);
  const data = async () => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieid}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      //   const response = await result.json();
      console.log(result.data);
      setMovieDetail(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    data();
  }, []);
  if (movieDetail) {
    return (
      <div className="flex flex-col items-center justify-center bg-black text-white py-10 px-5 md:px-10 lg:px-20 ">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl space-y-8 md:space-x-8">
          <img
            src={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`}
            alt={movieDetail.title}
            className="w-[300px] md:w-[300px] lg:w-[500px] rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
          <div className="flex flex-col text-center md:text-left space-y-6 md:space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left">
              {movieDetail.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Release Date: {movieDetail.release_date}
            </p>
            <div className="text-xl font-semibold text-gray-400">
              Genres:
              {movieDetail.genres
                ? movieDetail.genres.map((genre) => (
                    <span key={genre.id} className="ml-2 text-gray-300">
                      {genre.name}
                    </span>
                  ))
                : null}
            </div>
            <div className="w-full text-xl font-bold text-white pt-5">
              <p className="pb-4">Movie Rating: {movieDetail.vote_average}</p>
              <p className="pb-4">Movie Overview:</p>
              <p className="text-lg text-gray-300 leading-relaxed">
                {movieDetail.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Movieinfo;
