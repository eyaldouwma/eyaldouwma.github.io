/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Card from '../../Components/Card/Card';
import Icon from '../../Components/Icon/Icon';

import './ResumePage.scss';

const subSections = [
    {
        key: 'Phone',
        content: '0544329592',
    },
    {
        key: 'Email',
        content: 'eyal.douwma@gmail.com',
    },
    {
        key: 'Address',
        content: '38 Rambam Street, Givatayim, Israel'
    },
    {
        key: 'Date of Birth',
        content: 'December 28th, 1991'
    },
];

const icons = [
    {
        name: 'facebook',
        url: 'https://www.facebook.com/eyal.douwma/'
    },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/eyal-douwma-a2781a16b/'
    },
    {
        name: 'instagram',
        url: 'https://www.instagram.com/eyaldo1/?hl=en'
    }
]

const ResumePage = () => {

    const renderSubSections = () => {
        return subSections.map(({key, content}) => {
            return (
                <div className='resume-page__subsection' key={key}>
                    <span className='resume-page__subsection-key'>
                        {key}:
                    </span>
                    <span className='resume-page__subsection-content'>
                        {content}
                    </span>
                </div>
            )
        })
    }

    const renderIcons = () => {
        return icons.map(({name, url}) => {
            return <Icon key={name} name={name} onClick={() => window.open(url)}/>;
        })
    }

    const renderCard = () => {
        return (
            <div className='resume-page__card'>
                <div className='resume-page__card__top'>
                    <div className='resume-page__card__top__left'>
                        <div className="resume-page__picture" />
                    </div>
                    <div className='resume-page__card__top__right'>
                        <div className='resume-page__title-container'>
                            <span className='resume-page__title'>
                                Eyal Douwma
                            </span>
                            <span className='resume-page__title-secondary'>
                                Fullstack Developer
                            </span>
                        </div>
                        {renderSubSections()}
                    </div>
                </div>
                <div className='resume-page__card__bottom'>
                    {renderIcons()}
                </div>
            </div>
        )
    }

    return (
        <div className='resume-page'>
            <div className='resume-page__behind-card' />
            <Card content={renderCard} animation='animate__fadeInUp' />
            <div className='resume-page__summary'>
                <h1>Hi! I'm Eyal Douwma</h1>
                <p>I am a fullstack developer (mainly React and Node.js) with passion to all tech related.
                    On my spare time i love to play music, spend time with my Family and hanging out with my friends.
                </p>
            </div>
        </div>
    )
}

export default ResumePage;