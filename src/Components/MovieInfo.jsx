import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movieinfo = () => {
  const [movieDetail, setMovieDetail] = useState(null);
  const { movieid } = useParams();

  const fetchData = async () => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieid}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      setMovieDetail(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [movieid]); // ✅ watches route param

  if (!movieDetail) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <p className="text-xl">Loading movie details...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white py-8 px-4 md:px-10 lg:px-20 min-h-screen pt-[90px]">
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-6xl w-full gap-8">
        <img
          src={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`}
          alt={movieDetail.title}
          className="w-[250px] md:w-[300px] lg:w-[400px] rounded-lg shadow-md hover:scale-105 transition-transform"
        />

        <div className="flex flex-col space-y-4 text-center md:text-left w-full">
          <h1 className="text-3xl md:text-4xl font-bold">
            {movieDetail.title}
          </h1>
          <p className="text-md text-gray-300">
            <strong>Release Date:</strong> {movieDetail.release_date}
          </p>

          <div className="text-gray-300">
            <strong>Genres:</strong>
            {movieDetail.genres?.map((genre) => (
              <span key={genre.id} className="ml-2">
                {genre.name}
              </span>
            ))}
          </div>

          <div className="pt-4">
            <p className="text-lg font-semibold">
              Rating: {movieDetail.vote_average}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Overview:</h2>
            <p className="text-gray-300 leading-relaxed">
              {movieDetail.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movieinfo;
