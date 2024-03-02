import styled from './projectBox.module.css';
import projectImage from '../../assets/images/tclasher.png'

function ProjectBox(props) {
    return (
        <div className={styled.projectBoxWrapper}>
            <img src={projectImage} alt="" />
        </div>
    );
}

export default ProjectBox;