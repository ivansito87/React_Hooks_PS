import React from "react";

const ImageToggleChangeOnHover = ({ primaryImage, secondaryImage }) => {
  console.log(primaryImage);
  return <img src={primaryImage} alt={""} />;
};

export default ImageToggleChangeOnHover;
