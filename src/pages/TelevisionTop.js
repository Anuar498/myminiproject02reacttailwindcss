import { useState, useEffect } from "react";

import { Card } from "../components";

export const TelevisionTop = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=40917add592302c7ced451d447142b09"
      );

      const data = await response.json();
      setMovies(data.results);
    }

    fetchMovies();
  }, []);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};