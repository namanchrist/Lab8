import React, { useState } from 'react';

const Card = ({ title, features, image }) => {
  const [liked, setLiked] = useState(false);

  // Toggle like status
  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="card">
      <img src={process.env.PUBLIC_URL + image} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-features">{features}</p>
      <button 
        onClick={handleLikeClick} 
        className={`like-button ${liked ? 'liked' : ''}`}
      >
        <span role="img" aria-label="like">❤️</span>
      </button>
    </div>
  );
};

export default Card;
