import React from 'react';
import PropTypes from 'prop-types';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';

import './SkillsPage.scss';
import Icon from '../../Components/Icon/Icon';

const skillsItems = [
    {
        icon: 'react',
        label: 'React',
    },
    {
        icon: 'node-dot-js',
        label: 'NodeJS',
    },
    {
        icon: 'nestjs',
        label: 'NestJs',
    },
    {
        icon: 'apachekafka',
        label: 'Kafka',
    },
    {
        icon: 'postgresql',
        label: 'PostgreSQL',
    },
    {
        icon: 'docker',
        label: 'Docker',
    },
    {
        icon: 'kubernetes',
        label: 'Kubernetes',
    },
    {
        icon: 'helm',
        label: 'Helm',
    },
    {
        icon: 'googlecloud',
        label: 'Google Cloud'
    },
    {
        icon: 'prometheus',
        label: 'Prometheus',
    },
    {
        icon: 'python',
        label: 'Python'
    },
];

const SkillsPage = ({scrollRef}) => {
    const renderIcons = () => {
        return skillsItems.map(({label, icon}) => {
            return (
                <div className='skills-page__single-skill-container'>
                    <Icon name={icon} size={30} />
                    <span>{label}</span>
                </div>
            );
        })
    }

    return (
        <div className='skills-page' ref={scrollRef}>
            <SectionHeader title='Skills' mode='blue'/>
            <div className='skills-page__body'>
                <div className='skills-page__skills-container'>
                    {renderIcons()}
                </div>
            </div>
        </div>
    )
}

SkillsPage.propTypes = {
    scrollRef: PropTypes.any.isRequired,
};

export default SkillsPage;