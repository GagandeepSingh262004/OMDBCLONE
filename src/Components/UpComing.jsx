import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const UpComing = () => {
  const Navigate = useNavigate();
  //   const { movieid } = useParams();
  const [upComings, setUpComings] = useState(null);
  const data = async () => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1`
      );
      console.log(result.data.results);
      setUpComings(result.data.results);
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
  if (upComings) {
    return (
      <div className="flex justify-center items-center w-full  flex-wrap gap-10 pt-4 bg-black text-white">
        {upComings.map((upComing) => {
          return (
            <div key={upComing.id} className="flex flex-col cursor-pointer">
              <img
                src={`https://image.tmdb.org/t/p/original${upComing.poster_path}`}
                className=" h-[300px] w-[300px] object-fit rounded-lg"
                onClick={() => handleClick(upComing.id)}
              />
              <p className="text-xl font-semibold pt-2 gap:2">
                {upComing.title}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
};
export default UpComing;
