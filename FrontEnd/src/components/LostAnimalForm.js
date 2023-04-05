import React, { useState } from "react";
import axios from "axios";

function LostAnimalForm() {
  const [photo, setPhoto] = useState();
  const [formData, setFormData] = useState({
    userId: "",
    type: "",
    description: "",
  });

  function handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function uploadHandler(event) {
    const file = event.target.files[0];
    const data = new FormData();
    data.append("file", file);
    console.log("photo");
    axios
      .post("http://localhost:8000/api/photos", data)
      .then((res) => {
        console.log(res.data);
        setPhoto(res.data.filename);
      })
      .catch((error) => console.error(error));
  }

  function submitForm(event) {
    event.preventDefault();
    console.log(formData);
    formData.image = photo;
    axios
      .post("http://localhost:8000/api/posts/create", formData)
      .then((response) => {
        console.log(response);
        alert("post uploaded successfully");
      })
      .catch((error) => {
        throw error;
      });
  }

  return (
    <section>
      <form className="search-form" onSubmit={submitForm}>
        <div className="form-control">
          <label htmlFor="userId">User ID:</label>
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="type">Type:</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="file">Upload photo:</label>
          <input type="file" name="file" onChange={uploadHandler} />
        </div>
        <div>
          <img src={`http://localhost:8000/${photo}`} alt={photo} />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default LostAnimalForm;
