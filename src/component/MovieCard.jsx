import React from "react";
import Rate from "./Rate";

const MovieCard = ({ movie }) => {
  const { title, description, image, rating } = movie;
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" />
        <p>
          <Rate rating={rating} />
        </p>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
