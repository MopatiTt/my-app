import React, { useState } from "react";
//import { useGlobalContext } from "../context";

function SearchForm() {
  //const { setSearchTerm } = useGlobalContext();
  const [searchTerm, setSearchTerm] = useState("");
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchAnimal(e) {
    setSearchTerm(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search for your lost animal </label>
          <input
            type="text"
            value={searchTerm}
            name="name"
            animalId="name"
            ref={searchValue}
            onChange={searchAnimal}
          />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
