import { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import ProjectBox from "../../components/projectBox/ProjectBox";
import styled from "./home.module.css";


function Home(props) {
    let info = [];

    console.log("React First does Render");

    useEffect(() => {
        info = [
            {
                "id": 1,
                "imgUrl": "",
                "title": "T Clasher",
                "visitSrcUrl": ""
            },
            {
                "id": 2,
                "imgUrl": "",
                "title": "Crowd Funding",
                "visitSrcUrl": ""
            },
            {
                "id": 3,
                "imgUrl": "",
                "title": "Interaction Pricing",
                "visitSrcUrl": ""
            }
        ];
        console.log("Then does Mounting");
    }, []);

    console.log("React First does Render");


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