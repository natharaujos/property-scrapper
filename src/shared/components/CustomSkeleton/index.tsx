import React from "react";
import "./skeletonAnimation.css";

const CustomSkeleton = () => {
  return (
    <div
      style={{
        backgroundColor: "#e0e0e0",
        height: "100%",
        width: "100%",
        animation: "pulse 1.5s infinite ease-in-out",
        borderRadius: "10px",
      }}
    />
  );
};

export default CustomSkeleton;
