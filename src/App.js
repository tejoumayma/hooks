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
  return (
    <div className="App">
      <Filter title={title} setTitle={setTitle} />
      <Rate rating={rating} setRating={setRating} />
      <AddMovie />
      <MovieList movieData={movieData} title={title} rating={rating} />
    </div>
  );
}

export default App;
