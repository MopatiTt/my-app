import React from "react";
import Animal from "./Animal";
import Loading from "./Loading";
import { useEffect } from "react";
import axios from "axios";
//import { useGlobalContext } from "../context";

function AnimalsList() {
  //const { animals, loading } = useGlobalContext();
  const [animals, setAnimals] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  // useEffect Hook which takes a fnt as a parameter and need to do axios.get all posts from backend
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/posts")
      .then((response) => setAnimals(response.data.data));
  }, []);
  console.log(animals);
  if (loading) {
    return <Loading />;
  }
  if (!animals || animals.length < 1) {
    return (
      <h2 className="section-title">no animals matched your search criteria</h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">animals</h2>
      <div className="meals-center">
        {animals.map((item) => {
          return <Animal key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
export default AnimalsList;
