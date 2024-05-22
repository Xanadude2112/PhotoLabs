import React from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

const FavBadge = ({ fave }) => {
  return (
    <div className="fav-badge">
      <FavIcon selected={fave} displayAlert={fave.length > 0} />
    </div>
  );
};

export default FavBadge;
