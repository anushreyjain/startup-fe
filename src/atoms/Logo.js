import React from "react";
import PropTypes from "prop-types";

const Logo = ({  ...property }) => (
  <div className={`logo_wrap ${property.className}`}>
    <img
      onClick={property.onClick}
      src={property.src}
      width={property.width}
      height={property.height}
      alt={property.alt}
      className={`cursor-pointer ${property.className}`}
    />
  </div>
);

export default Logo;

Logo.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  alt: PropTypes.string,
};
