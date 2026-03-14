function Card({projectName, tag1, tag2, desc, category, imgURL}) {
  return (
    <div className="card" data-category={category} data-id="1">
      <div className="card-img-container">
        <img
          src={imgURL}
          alt={projectName}
          className="card-img"
        />
      </div>
      <div className="card-content">
        <h3 className="card-title">{projectName}</h3>
        <p className="card-description">
         {desc}
        </p>
        <div className="card-actions">
          <div className="card-tags">
            <span className="tag">{tag1}</span>
            <span className="tag">{tag2}</span>
          </div>
          <button className="favorite-btn">☆</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
