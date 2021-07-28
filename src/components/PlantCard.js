import React, {useState} from "react";

function PlantCard({onePlant: {name, image, price}}) {

  const [isClicked, setIsClicked] = useState(false)
  //not clicked so everything is in stock.
  //when I click, it needs to say OUt of Stock.

  function toggleClick(){
    setIsClicked(!isClicked)
  }

  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>

      {!isClicked ? (
        <button onClick={toggleClick} className="primary"> In Stock</button>
      ) : (
        <button onClick={toggleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
