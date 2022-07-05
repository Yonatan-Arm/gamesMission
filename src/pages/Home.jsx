import React, { useEffect, useState } from "react";
import { movieService } from "../services/movieService.js";
import Loader from "../assets/loader.gif";
import List from "../components/List";

export default function Home() {
  const [movies, setMovies] = useState([]);
 
 
  useEffect(() => {
    async function fetchData() {
      const res = await movieService.loadMovies();
      setMovies(res)
    }
    fetchData();
  }, []);

 
  const onSortBy =  () => {
        const moviesToSort =  movies.sort(function(a,b){
      return a.id - b.id;
    })
    setMovies([...moviesToSort])
  }
  
  if (!movies) return <img className="loader" src={Loader} alt="loader" />
  return (
    <div className="home">
      <h1> movie list</h1>
      <div className="filter">
        <button onClick={onSortBy}> sortBy</button>
      </div>
      {movies.length < 1 ? (
        <img className="loader" src={Loader} alt="loader" />
      ) : (
        <List movies={movies} />
      )}
    </div>
  );
}
