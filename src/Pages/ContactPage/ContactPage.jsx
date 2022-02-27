import React, {useState} from 'react';
import PropTypes from 'prop-types';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';

import './ContactPage.scss';

const ContactPage = ({scrollRef}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        alert('not yet implemented :(')
    }

    return (
        <div className='contact-page' ref={scrollRef}>
            <SectionHeader title='Contact Me' mode='gray' />
            <div className='contact-page__body'>
                <div className='contact-page__form-container'>
                    <div className='contact-page__form-section'>
                        <label>
                            First Name
                            <input type='text' value={firstName} onChange={(e) => {
                                setFirstName(e.target.value)
                            }} />
                        </label>
                        <label>
                            Last Name
                            <input type='text' value={lastName} onChange={(e) => {
                                setLastName(e.target.value)
                            }} />
                        </label>
                    </div>
                    <div className='contact-page__form-section'>
                        <label>
                            Email *
                            <input type='text' value={email} onChange={(e) => {
                                setEmail(e.target.value)
                            }} />
                        </label>
                    </div>
                    <div className='contact-page__form-section'>
                        <label>
                            Type your message here...
                            <textarea value={message} onChange={(e) => {
                                setMessage(e.target.value);
                            }} />
                        </label>
                    </div>
                    <div className='contact-page__form-submit-btn' onClick={handleSubmit}>
                        Submit
                    </div>
                </div>
            </div>
        </div>
    )
}

ContactPage.propTypes = {
    scrollRef: PropTypes.any.isRequired,
};

export default ContactPage;