import React, { useState } from "react";

function ToggleButton(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  let classNameFavBtn = isFavorite ? "card-favicon favorite" : "card-favicon";
  return (
    <button onClick={handleFavorite} className={classNameFavBtn}>
      {props.icon}
    </button>
  );
}

export default ToggleButton;
