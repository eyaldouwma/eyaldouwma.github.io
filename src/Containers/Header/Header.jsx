import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';


const Header = ({titleClick, items}) => {

    const renderNavigationElements = () => {
        return items.map(({label, onClick}) => {
            return (
                <div 
                    className='element'
                    key={label}
                    onClick={onClick && onClick}
                >
                        {label}
                </div>
            );
        })
    }

    return (
        <div className="header">
            <div className="main-name" onClick={titleClick}>
                <span>Eyal Douwma</span>
            </div>
            <div className="element-list">
                {renderNavigationElements()}
            </div>
        </div>
    )
}

Header.propTypes = {
    titleClick: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func
    })).isRequired
}

export default Header;