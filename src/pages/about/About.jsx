import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import styled from './about.module.css';
import data from '../home/db';

const About = () => {
    return (
        <div>
            <Navbar />
            <div className={styled.aboutBody}>
                <div className={styled.aboutImg}>
                    <div className={styled.imageBox}><h1>IMAGE</h1></div>
                    <img src={data.about.image} alt="jawid fakhari" />
                </div>
                <div className={styled.textWrap}>
                    <div className={styled.text}>
                        <p>I am a self-taught <span>Frontend Web Developer</span> with an academic background in <span>art and design.</span> With a strong interest in technology and design, I enjoy <span>continuously learning</span> and challenging myself. I <span>constantly seek new opportunities</span> to expand my skillset and grow professionally. The combination of my creativity and technical expertise enables me to create visually appealing and user-friendly web interfaces, always aiming for an optimal user experience. I am excited to work in a dynamic and collaborative environment, where I can contribute my passion for design and technology to develop innovative and engaging projects.</p>
                    </div>
                    <div className={styled.skills}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About