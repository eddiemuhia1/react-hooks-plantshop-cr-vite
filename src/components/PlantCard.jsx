// import React from "react";

// function PlantCard() {
//   return (
//     <li className="card" data-testid="plant-item">
//       <img src={"https://via.placeholder.com/400"} alt={"plant name"} />
//       <h4>{"plant name"}</h4>
//       <p>Price: {"plant price"}</p>
//       {true ? (
//         <button className="primary">In Stock</button>
//       ) : (
//         <button>Out of Stock</button>
//       )}
//     </li>
//   );
// }

// export default PlantCard;
import React, { useState } from "react";

function PlantCard({ plant }) {
  const { name, image, price } = plant;
  // Local state to track if this specific plant is sold out
  const [isSoldOut, setIsSoldOut] = useState(false);

  function handleToggleStock() {
    setIsSoldOut((prevStatus) => !prevStatus);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isSoldOut ? (
        <button onClick={handleToggleStock}>Out of Stock</button>
      ) : (
        <button onClick={handleToggleStock} className="primary">In Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
