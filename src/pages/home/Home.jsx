import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import ProjectBox from "../../components/projectBox/ProjectBox";
import styled from "./home.module.css";
import axios from "axios";


function Home(props) {

    const [info, setInfo] = useState([])


    useEffect(() => {
        //API call
        axios.get('http://localhost:8000/portfolio')
            .then(res => {

                setInfo(res.data.projects)

                console.log(res.data.projects);
            })
            .catch((err) => {
                console.error(err);
            })

    }, []);




    return (
        <div className={styled.homeWrapper}>
            <Navbar title="navbar" logoSrc="🐼" />
            <div className="container">
                <h2>My Works</h2>
                <div className={styled.projectsWrapper}>
                    {info.map(data => (
                        < ProjectBox key={data.id} data={data} />
                    ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;