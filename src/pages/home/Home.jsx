import Navbar from "../../components/navbar/Navbar";
import ProjectBox from "../../components/projectBox/ProjectBox";
import styled from "./home.module.css";

function Home(props) {
    return (
        <div className={styled.homeWrapper}>
            <Navbar title="navbar" logoSrc="🐼" />
            <div className="container">
                <h2>My Works</h2>
                <div className={styled.projectsWrapper}>
                    <ProjectBox />
                    <ProjectBox />
                    <ProjectBox />
                    <ProjectBox />
                    <ProjectBox />
                    <ProjectBox />
                </div>
            </div>
        </div>
    );
}

export default Home;