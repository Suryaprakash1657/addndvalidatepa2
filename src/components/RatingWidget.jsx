import React, { useState } from 'react';

function RatingWidget({ onRate, id }) {
  const [newRating, setNewRating] = useState(0);

  const handleClick = (e) => {
    e.preventDefault()
    if (newRating >= 1 && newRating <= 5) {
      onRate(id, newRating);
      console.log(newRating)
     // setNewRating(0); // reset after submit
    } else {
      alert("Please enter a rating between 1 and 5.");
    }
  };

  return (
    <div>
      <label>Rate (1–5): </label>
      <input
        type="number"
        min="1"
        max="5"
        value={newRating}
        onChange={(e) => setNewRating(Number(e.target.value))}
      />
      <button onClick={handleClick}>Submit Rating</button>
    </div>
  );
}

export default RatingWidget;
