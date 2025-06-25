import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const SearchPage = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return;
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${query}`
        );
        setResults(res.data.results);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className="text-white pt-24 px-4 bg-black min-h-screen">
      <h2 className="text-2xl mb-4">Search results for "{query}":</h2>
      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
        {results.length > 0 ? (
          results.map((movie) => (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className="rounded-lg"
              />
              <p className="mt-2 text-lg truncate">{movie.title}</p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
