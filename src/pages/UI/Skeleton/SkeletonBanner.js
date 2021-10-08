import React from 'react'
import "./skeleton.css";
import Shimmer from "./Shimmer";

function SkeletonBanner() {
    return (
        <div className="skeleton-banner">
        <div className="skeleton-bg">
          <Shimmer />
        </div>
      </div>
    )
}

export default SkeletonBanner
