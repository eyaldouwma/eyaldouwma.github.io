import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import hash from 'object-hash';

import './ConnectedDots.scss';

let leftObserver;
let rightObserver;

const ConnectedDots = ({items, rows}) => {

    const leftRefs = items.map(() => {
        return useRef(null);
    })

    const rightRefs = items.map(() => {
        return useRef(null);
    })

    useEffect(() => {
        leftObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated')
                    entry.target.classList.add('animate__fadeInLeft')
                } else {
                    entry.target.classList.remove('animate__animated');
                    entry.target.classList.remove('animate__fadeInLeft');
                }
            })
        });
        rightObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated')
                    entry.target.classList.add('animate__fadeInRight')
                } else {
                    entry.target.classList.remove('animate__animated');
                    entry.target.classList.remove('animate__fadeInRight');
                }
            })
        });
    }, []);

    useEffect(() => {
        leftRefs.forEach(leftRef => leftRef.current && leftObserver.observe(leftRef.current, { threshold: 1 }));
        rightRefs.forEach(rightRef => rightRef.current && rightObserver.observe(rightRef.current, { threshold: 1 }));
    }, [leftRefs, rightRefs])

    const renderDots = () => {
        return items.map((item, idx) => {
            const leftRender = rows[0].map((leftFromDot) => {
                return leftFromDot.content(item);
            })

            const rightRender = rows[1].map((rightFromDot) => {
                return rightFromDot.content(item);
            })

            return (
                <div className='connected-dots__row' key={hash(item)}>
                    <div className='connected-dots__row__left' ref={leftRefs[idx]}>
                        {leftRender}
                    </div>
                    <div className='connected-dots__row__center'>
                        <div className='connected-dots__row__dot' />
                        <div className='connected-dots__row__link' />
                    </div>
                    <div className='connected-dots__row__right' ref={rightRefs[idx]}>
                        {rightRender}
                    </div>
                </div>
            );
        })
    }

    return (
        <div className='connected-dots'>
            {renderDots()}
        </div>
    );
}

ConnectedDots.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
}

export default ConnectedDots;