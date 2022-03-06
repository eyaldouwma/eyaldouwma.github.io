import React, {useState} from 'react';
import PropTypes from 'prop-types';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import { toast, } from 'react-toastify';
import emailjs from '@emailjs/browser';

import './ContactPage.scss';
import classNames from 'classnames';

const commonToastProperties = {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: 'colored',
}

const ContactPage = ({scrollRef}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(null);
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (email) => {
        return email.match(
            // eslint-disable-next-line no-useless-escape
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
        );
    }

    const handleSubmit = async() => {
        if (!isSubmitting) {
            if (validateEmail(email)) {
                setEmailError(null);
                setIsSubmitting(true);
                // eslint-disable-next-line no-undef
                const { EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, EMAIL_USER_ID } = process.env;
                try {
                    await emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, {
                        from_name: `${firstName} ${lastName}`,
                        from_email: email,
                        to_name: 'Eyal Douwma',
                        message,
                    }, EMAIL_USER_ID);
                    toast('Sent Email Successfully', {
                        ...commonToastProperties,
                        type: 'success',

                    })
                } catch {
                    toast('Oh no! An Error occurred', {
                        ...commonToastProperties,
                        type: 'error',
                    })
                } finally {
                    setIsSubmitting(false);
                }
    
            } else {
                setEmailError('Please enter a valid email address');
            }
        }
    }

    const emailClassNames = classNames('contact-page__form-section',
    { 'error': emailError });
    const submitClassNames = classNames('contact-page__form-submit-btn', {
        'contact-page__form-submit-btn-disabled': isSubmitting
    });

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
                    <div className={emailClassNames}>
                        <label>
                            Email *
                            <input type='email' value={email} onChange={(e) => {
                                setEmail(e.target.value)
                            }} />
                            {emailError && <span>{emailError}</span>}
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
                    <div className={submitClassNames} onClick={handleSubmit}>
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