import "./App.css";
import AddMovie from "./component/AddMovie";
import { movieData } from "./movieData";
import MovieList from "./component/MovieList";
import Filter from "./component/Filter";
import { useState } from "react";
import Rate from "./component/Rate";

function App() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const addMovie = (newMovie) => {
    console.log(newMovie);
    movieData.push(newMovie);
  };

  return (
    <div className="App">
      <h1
        style={{ fontStyle: "italic", color: "#003333", textAlign: "center" }}
      >
        Movies
      </h1>
      <Filter title={title} setTitle={setTitle} />
      <Rate rating={rating} setRating={setRating} />
      <AddMovie addMovie={addMovie} />
      <MovieList movieData={movieData} title={title} rating={rating} />
    </div>
  );
}

export default App;
