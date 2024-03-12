import styled from './projectBox.module.css';
import { FaGithub } from 'react-icons/fa';

function ProjectBox({ name, image, link, gitLink }) {

    return (
        <div className={styled.projectBoxWrapper}>
            <div onClick={() => window.open(link, '_blank')}>
                <img src={image} alt="" />
            </div>
            <div className={styled.titleSpace}>
                <span>{name}</span>
                <span className={styled.arrBtn}>
                    <FaGithub onClick={() => window.open(gitLink, '_blank')} />
                </span>
            </div>
        </div>
    );
}

export default ProjectBox;