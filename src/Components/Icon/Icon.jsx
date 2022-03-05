import React from 'react';
import PropTypes from 'prop-types';

import './Icon.scss';

const Icon = ({name, onClick, size}) => {

    const iconStyle = {
        fontSize: `${size}px`,
        ...(onClick && ({cursor: 'pointer'}))
    };

    return (
        <span className='icon-container' onClick={onClick}>
            <span 
                style={iconStyle}
                className={`icon icon-webfont icon-webfont-${name}`}
            />
        </span>
    );
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    size: PropTypes.number,
};

Icon.defaultProps = {
    onClick: null,
    size: 20,
}

export default Icon;

