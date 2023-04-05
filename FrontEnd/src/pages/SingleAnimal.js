import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";

function SingleAnimal() {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [animal, setNewAnimal] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getAnimal() {
      try {
        const response = await fetch(`http://localhost:8000/api/posts/${id}`);
        const data = await response.json();
        // if (data.animals) {
        //   const {} = data.animals[0];
        //   const description = [];
        //   const newAnimal = {};
        setNewAnimal(data.data);
        console.log(data.data);
        // } else {
        //   setNewAnimal(null);
        // }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getAnimal();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!animal) {
    return <h2 className="section-title">no animal to display</h2>;
  } else {
    const { type, image, description } = animal;
    return (
      <section className="section meal-section">
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
        <h2 className="section-title">{image}</h2>
        <div className="meal">
          <img src={"http://localhost:8000/" + image} alt={image}></img>
          <div className="meal-info">
            <p>
              <span className="meal-data">type :</span> {type}
            </p>
            <p>
              <span className="meal-data">description :</span> {description}
            </p>
            <p>
              <span className="meal-data">image :</span> {image}
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default SingleAnimal;
