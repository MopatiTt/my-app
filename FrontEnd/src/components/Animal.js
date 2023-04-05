import React from "react";
import { Link } from "react-router-dom";

function Animal({ type, description, image, colour, animalId }) {
  return (
    <article className="meal">
      <div className="img-container">
        <img src={"http://localhost:8000/" + image} alt={image} />
      </div>
      <div className="meal-footer">
        <h3>{type}</h3>
        {/* <h4>{colour}</h4>
        <p>{description}</p> */}
        <Link
          to={`/animal/${animalId}`}
          className="btn btn-primary btn-details"
        >
          details
        </Link>
      </div>
    </article>
  );
}

export default Animal;
