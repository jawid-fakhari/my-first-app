import styled from './projectBox.module.css';
import { FaGithub } from 'react-icons/fa';

function ProjectBox({ name, image, link, gitLink }) {

    return (
        <div className={styled.projectBoxWrapper}>
            <div onClick={() =>
                link.includes("https://")
                    ? window.open(link, '_blank')
                    : alert("This project is still in progress. Explore other available projects!")
            }>
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