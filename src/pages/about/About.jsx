import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import styled from './about.module.css';
import data from '../home/db';
import GraficChart from '../../components/radarChart/GraficChart';
import TimeLine from '../../components/timeline/TimeLine';

const About = () => {
    return (
        <div>
            <Navbar />
            <div className={styled.aboutBody}>
                <div className={styled.aboutMe}>
                    <div className={styled.aboutImg}>
                        <div className={styled.imageBox}></div>
                        <img src={data.about.image} alt="jawid fakhari" />
                    </div>
                    <div className={styled.textWrap}>
                        <div className={styled.text}>
                            <p>I am a self-taught <span>Frontend Web Developer</span> with an academic background in <span>art and design.</span> With a strong interest in technology and design, I enjoy <span>continuously learning</span> and challenging myself. I <span>constantly seek new opportunities</span> to expand my skillset and grow professionally. The combination of my creativity and technical expertise enables me to create visually appealing and user-friendly web interfaces, always aiming for an optimal user experience. I am excited to work in a dynamic and collaborative environment, where I can contribute my passion for design and technology to develop innovative and engaging projects.</p>
                        </div>
                        <div className={styled.skills}>
                            <h3>Frontend Skills</h3>
                            <GraficChart />
                        </div>
                    </div>
                </div>
                <div className={styled.timeLineWrap}>
                    <div className={styled.timeLineItems}>
                        <TimeLine />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About