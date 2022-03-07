import React, { useState } from "react";

function ListingCard({ listing: { id, description, image, location}, onRemoveListing }) {
  const [favorite, setFavorite] = useState(false)

  function handleFavoriteClick(){
    setFavorite(!favorite)
  }

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${id}`,{
      method: "DELETE",
    })
      onRemoveListing(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {/* {true ? ( */}
          <button onClick={handleFavoriteClick} className="emoji-button favorite active">{favorite ? "★": "☆"}</button>
        {/* ) : (
          <button className="emoji-button favorite"></button>
        )} */}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
