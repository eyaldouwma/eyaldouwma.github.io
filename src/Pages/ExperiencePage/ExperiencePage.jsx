import React from 'react';
import PropTypes from 'prop-types';
import ConnectedDots from '../../Components/ConnectedDots/ConnectedDots';

import './ExperiencePage.scss';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';

const experienceItems = [
    {
        years: '2 0 1 9 - n o w',
        job: 'Fullstack Developer',
        company: 'Argus Cyber Security',
        description: `
            Developing and maintaining 2 core products in Argus doing both backend and frontend work,
            helped building and designing core projects from ground up.   
        `
    },
];

const ExperiencePage = ({ scrollRef }) => {

    const renderRows = () => {
        const leftSide = [
            {
                content: ({ years, job }) => {
                    return (
                        <div className='experience-page__years-container'>
                            <b>{years}</b>
                            <span>{job}</span>
                        </div>
                    )
                }
            }
        ];

        const rightSide = [
            {
                content: ({ company, description }) => {
                    return (
                        <div className='experience-page__job-container'>
                            <span>{company.toUpperCase()}</span>
                            <p>{description}</p>
                        </div>
                    )
                }
            }
        ]

        return [leftSide, rightSide];
    }

    return (
        <div className='experience-page' ref={scrollRef}>
            <SectionHeader title='Experience' />
            <div className='experience-page__body'>
                <ConnectedDots
                    items={experienceItems}
                    rows={renderRows()}
                />
            </div>
        </div>
    )
}

ExperiencePage.propTypes = {
    scrollRef: PropTypes.any.isRequired
}

export default ExperiencePage;