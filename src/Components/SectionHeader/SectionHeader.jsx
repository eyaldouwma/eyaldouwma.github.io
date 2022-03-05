import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './SectionHeader.scss';

const SectionHeader = ({title, mode}) => {

    const className = classnames('section-header', {
        'blue-mode': mode === 'blue',
        'gray-mode': mode === 'gray',
    });

    return (
        <div className={className}>
            <h2>{title}</h2>
        </div>
    )
}

SectionHeader.propTypes = {
    title: PropTypes.string.isRequired,
    mode: PropTypes.oneOf(['white', 'blue', 'gray']),
};

SectionHeader.defaultProps = {
    mode: 'white',
};

export default SectionHeader;