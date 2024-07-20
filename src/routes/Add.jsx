import { useState } from "react";

export default function Add() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    youtube: "",
    x: "",
    description: "",
  });

  //   const handleChage = (e) => {
  //     const { name, value } = e.target
  //     setFormData(e.target.value)
  //   }

  return (
    <>
      <h1>Add Component</h1>
      {/* <div className="form-container">
        <h2 className="form-title">Input Form</h2>
        <form onSubmit={handleSubmit} className="input-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL:</label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Enter image URL"
            />
          </div>
          <div className="form-group">
            <label htmlFor="youtube">YouTube URL:</label>
            <input
              type="url"
              id="youtube"
              name="youtube"
              value={formData.youtube}
              onChange={handleChange}
              placeholder="Enter YouTube URL"
            />
          </div>
          <div className="form-group">
            <label htmlFor="instagram">Instagram URL:</label>
            <input
              type="url"
              id="instagram"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              placeholder="Enter Instagram URL"
            />
          </div>
          <div className="form-group">
            <label htmlFor="x">X (formerly Twitter) URL:</label>
            <input
              type="url"
              id="x"
              name="x"
              value={formData.x}
              onChange={handleChange}
              placeholder="Enter X (Twitter) URL"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div> */}
    </>
  );
}
