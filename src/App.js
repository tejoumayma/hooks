import "./App.css";
import { movieData } from "./movieData";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./component/Home";
import Details from "./component/Details";

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
      <Routes>
        <Route path="/" element={<Navigate to="/movie" />} />
        <Route
          path="/movie"
          element={
            <Home
              title={title}
              setTitle={setTitle}
              rating={rating}
              setRating={setRating}
              addMovie={addMovie}
              movieData={movieData}
            />
          }
        />
        <Route path="/movie/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
