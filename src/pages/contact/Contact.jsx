import React, { useRef } from 'react'
import Navbar from '../../components/navbar/Navbar';
import emailjs from '@emailjs/browser';
import styled from './contac.module.css';

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
                    alert('Your message successfully sended!')
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

    };
    return (
        <div>
            <Navbar />
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