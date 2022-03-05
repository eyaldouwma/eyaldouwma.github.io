import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

let observer;

const Card = ({ content, animation }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated')
                    entry.target.classList.add(animation)
                } else {
                    entry.target.classList.remove(`animate__animated`);
                    entry.target.classList.remove(animation);
                }
            })
        });
    }, []);

    useEffect(() => {
        if (cardRef.current && animation) {
            observer.observe(cardRef.current, { threshold: 1 });
        }
    }, [cardRef, animation])

    return (
        <div className='card' ref={cardRef}>
            {content()}
        </div>
    )
}

Card.propTypes = {
    content: PropTypes.func.isRequired,
    animation: PropTypes.string,
};

Card.defaultProps = {
    animation: null,
};

export default Card;