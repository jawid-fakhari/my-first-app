
import Navbar from "../../components/navbar/Navbar";
import ProjectBox from "../../components/projectBox/ProjectBox";
import styled from "./home.module.css";
import projects from './db';



function Home(props) {


    return (


        <div className={styled.homeWrapper}>
            <Navbar />
            <div className="container">
                <h2>My Works</h2>
                <div className={styled.projectsWrapper}>
                    {projects.map((project, index) =>
                    (< ProjectBox
                        key={index}
                        name={project.name}
                        image={project.image}
                        link={project.link}
                    // gitLink={project.gitLink}
                    />)
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;