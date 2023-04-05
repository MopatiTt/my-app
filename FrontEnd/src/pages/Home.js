import React from "react";
//import LostAnimalForm from "../components/LostAnimalForm";
import SearchForm from "../components/SearchForm";
import AnimalsList from "../components/AnimalsList";
function Home() {
  return (
    <main>
      <SearchForm />
      <AnimalsList />
    </main>
  );
}

export default Home;
