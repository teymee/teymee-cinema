import React from "react";

import "./skeleton.css";
import Shimmer from "./Shimmer";

function SkeletonCard() {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-bg">
        <Shimmer />
      </div>
    </div>
  );
}

export default SkeletonCard;
