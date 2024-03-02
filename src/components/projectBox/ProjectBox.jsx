import styled from './projectBox.module.css';

function ProjectBox(props) {
    return (
        <div className={styled.projectBoxWrapper}>
            <div>
                <h3>Box</h3>
            </div>
        </div>
    );
}

export default ProjectBox;