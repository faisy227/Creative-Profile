import React, { useState } from "react";
function ProjectForm({ onAddCard }) {
  const [projectName, setprojectName] = useState("");
  const [tag1, setTag1] = useState("");
  const [tag2, setTag2] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("design");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // thats how you create an object
    formValidation();
    resetVales();
  };
  const formValidation = () => {
    let values = [projectName, tag1, tag2, desc, category, imageURL];

    const allFieldsFilled = values.every((value) => !!value);

    if (allFieldsFilled) {
      onAddCard({
        id: crypto.randomUUID(),
        projectName,
        tag1,
        tag2,
        desc,
        category,
        imageURL,
      });
    } else {
      alert("Error, Filled all Fields");
    }
  };
  const resetVales = () => {
    setprojectName("");
    setCategory("");
    setDesc("");
    setTag1("");
    setTag2("");
    setImageURL("");
  };
  const handleChange = (e) => {
    setCategory(e.target.value);
  };
  return (
    <section className="form-section">
      <h2>Add New Project</h2>
      <form className="contact-form" id="projectForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="projectName" className="form-label">
            Project Name
          </label>
          <input
            type="text"
            id="projectName"
            className="form-input"
            placeholder="Enter project name"
            value={projectName}
            onChange={(e) => setprojectName(e.target.value)}
          />
        </div>

        <div
          className="form-group"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="hold">
            <label htmlFor="tag1" className="form-label">
              Tag 1
            </label>
            <input
              type="text"
              id="tag1"
              className="form-input"
              placeholder="Enter project name"
              value={tag1}
              onChange={(e) => setTag1(e.target.value)}
            />
          </div>

          <div className="hold">
            <label htmlFor="tag2" className="form-label">
              Tag 2
            </label>
            <input
              type="text"
              id="tag2"
              className="form-input"
              placeholder="Enter project name"
              value={tag2}
              onChange={(e) => setTag2(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="projectDescription" className="form-label">
            Description
          </label>
          <textarea
            id="projectDescription"
            className="form-textarea"
            placeholder="Describe your project"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="projectCategory" className="form-label">
            Category
          </label>
          <select
            id="projectCategory"
            className="form-select"
            value={category}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            <option value="design">Design</option>
            <option value="development">Development</option>
            <option value="art">Art</option>
            <option value="photography">Photography</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="projectImage" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            id="projectImage"
            className="form-input"
            placeholder="https://source.unsplash.com/random/600x400/?project"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
          <small style={{ opacity: 0.7, fontSize: "0.8rem" }}>
            We recommend using Unsplash URLs for best results
          </small>
        </div>

        <button type="submit" className="submit-btn">
          Add Project
        </button>
      </form>
    </section>
  );
}

export default ProjectForm;
