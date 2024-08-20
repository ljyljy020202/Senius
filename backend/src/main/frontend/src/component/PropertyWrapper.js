import React from "react";
import PropTypes from "prop-types";
import "../styles/PropertyWrapper.css"; // 필요한 경우 스타일링 파일 import

const PropertyWrapper = ({ className, image, property1 }) => {
  return (
    <div className={className}>
      <img src={image} alt="Property" />
      <div>{property1}</div>
    </div>
  );
};

PropertyWrapper.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  property1: PropTypes.string.isRequired,
};

export default PropertyWrapper;
