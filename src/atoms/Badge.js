import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ children, background, ...property }) => {

    return (
        <span
            className={`rounded-full px-3 py-1 md:px-4 text-xs bg-white text-black  border border-primary-900  ${property.className}`}
        >
            {children}
        </span>
    );
};

export default Badge;

Badge.propTypes = {
    className: PropTypes.string,
    background: PropTypes.string,
    children: PropTypes.node
};
