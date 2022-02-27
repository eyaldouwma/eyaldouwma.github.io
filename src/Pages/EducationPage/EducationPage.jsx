import React from 'react';
import PropTypes from 'prop-types';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';

import './EducationPage.scss';
import ConnectedDots from '../../Components/ConnectedDots/ConnectedDots';

const educationItems = [
    {
        years: '2 0 1 6 - 2 0 1 9',
        subtitle: 'BSc Computer Science',
        institute: 'Academic College of Tel Aviv-Yaffo',
    },
    {
        years: '2 0 0 7 - 2 0 1 0',
        subtitle: 'High School Bagrut',
        institute: 'Mor Metro-West Raanana',
    },
];

const renderRows = () => {
    const leftSide = [
        {
            content: ({ years, subtitle }) => {
                return (
                    <div className='education-page__years-container'>
                        <b>{years}</b>
                        <span>{subtitle}</span>
                    </div>
                )
            }
        }
    ];

    const rightSide = [
        {
            content: ({ institute }) => {
                return (
                    <div className='education-page__institute-container'>
                        {institute.toUpperCase()}
                    </div>
                )
            }
        }
    ]

    return [leftSide, rightSide];
}

const EducationPage = ({scrollRef}) => {
    return (
        <div className='education-page' ref={scrollRef}>
            <SectionHeader title='Education'/>
            <div className='education-page__body'>
                <ConnectedDots
                    items={educationItems}
                    rows={renderRows()}
                />
            </div>
        </div>
    )
}

EducationPage.propTypes = {
    scrollRef: PropTypes.any.isRequired,
};

export default EducationPage;