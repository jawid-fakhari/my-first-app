import React, { useRef } from 'react'
import Navbar from '../../components/navbar/Navbar';
import emailjs from '@emailjs/browser';
import styled from './contac.module.css';
import { FaChevronCircleRight, FaGithub, FaLinkedin } from 'react-icons/fa';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_xyzl5hl', 'template_tgem0uk', form.current, {
                publicKey: 'JPqlwpnYCcfSkshgJ',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Your message successfully sended!');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

    };
    return (
        <div>
            <Navbar />

            <div className={styled.linkUtili}>
                <div className={`${styled.cv} ${styled.commonStyle}`}>
                    <FaChevronCircleRight size={35} color='#301934' />
                    <a href="https://europa.eu/europass/eportfolio/screen/share/4626b2ae-978e-4825-a687-1b12301a68b9?lang=en" target='_blank' rel="noreferrer">Europass CV</a>
                </div>
                <div className={`${styled.github} ${styled.commonStyle}`}>
                    <FaGithub size={35} color='#301934' />
                    <a href="https://github.com/jawid-fakhari" target='_blank' rel="noreferrer">My Github profile</a>
                </div>
                <div className={`${styled.linkedin} ${styled.commonStyle}`}>
                    <FaLinkedin size={35} color='#301934' />
                    <a href="https://www.linkedin.com/in/fakhari-jawid" target='_blank' rel="noreferrer">My Linkedin profile</a>
                </div>
            </div>

            <form className={styled.form} ref={form} onSubmit={sendEmail}>
                <div className={styled.nameEmailWrap}>
                    <div className={styled.nameWrap}>
                        <label className={styled.nameLabel}>Name</label>
                        <input className={styled.nameInput} type="text" name="user_name" />
                    </div>
                    <div className={styled.emailWrap}>
                        <label className={styled.emailLabel}>Email</label>
                        <input className={styled.emailInput} type="email" name="user_email" />
                    </div>
                </div>

                <label className={styled.messageLabel}>Message</label>
                <textarea className={styled.messageTextarea} name="message" />

                <input className={styled.submitInput} type="submit" value="Send" />
            </form>
        </div>

    )
}

export default Contact