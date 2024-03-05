import styled from './projectBox.module.css';
import { FaGithub } from 'react-icons/fa';

function ProjectBox({ name, image, link }) {

    return (
        <div className={styled.projectBoxWrapper}>
            <img src={image} alt="" />
            <div className={styled.titleSpace}>
                <span>{name}</span>
                <span className={styled.arrBtn}>
                    <a href={link}><FaGithub /></a>
                </span>
            </div>
        </div>
    );
}

export default ProjectBox;