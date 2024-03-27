import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import styled from './about.module.css';
import data from '../home/db';

const About = () => {
    return (
        <div>
            <Navbar />
            <div className={styled.aboutBody}>
                <div className={styled.img}>
                    <img src={data.about.image} alt="jawid fakhari" />
                </div>
                <div className={styled.textWrap}>
                    <div className={styled.text}>
                        <p>Hey there! I'm a frontend web developer with a passion for creating beautiful and user-friendly websites. My academic background includes studies in product design and graphic design, which have given me a unique perspective on creating visually appealing and functional digital experiences. I love experimenting with new technologies and techniques to stay ahead of the curve in the ever-evolving world of web development. When I'm not coding, you can find me exploring the latest design trends, hiking in the great outdoors, or trying out new recipes in the kitchen. Let's connect and create something amazing together!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About