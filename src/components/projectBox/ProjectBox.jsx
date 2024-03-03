import styled from './projectBox.module.css';
import projectImage from '../../assets/images/tclasher.png';
// import Home from '../../pages/home/Home';

function ProjectBox(props) {

    return (
        <div className={styled.projectBoxWrapper}>
            <img src={projectImage} alt="" />
            <div className={styled.titleSpace}><span>{props.data.title}</span><span className={styled.arrBtn}>&#128437;</span></div>
        </div>
    );
}

export default ProjectBox;