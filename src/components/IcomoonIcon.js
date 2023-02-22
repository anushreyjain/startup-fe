import React from "react";
import PropTypes from "prop-types";

import IcomoonReact, { iconList } from "icomoon-react";
import iconSet from "../assets/selection.json";

export default function IcomoonIcon({ color, size, icon, ...property }) {
  return (
    <div className={`${property.className}`}>
      <IcomoonReact
        iconSet={iconSet}
        color={color}
        size={size}
        icon={icon}
        onClick={property.onClick}
      />
    </div>
  );
}

IcomoonIcon.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
};
