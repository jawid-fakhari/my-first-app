import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoCodeWorkingSharp, IoSchool, IoStarSharp } from "react-icons/io5";


function TimeLine() {
    return (
        <div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#2f2f2f' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="03/2024 - present"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<IoSchool />}
                >
                    <h3 className="vertical-timeline-element-title">TECHNIQUES FOR DESIGNING AND DEVELOPING COMPUTER APPLICATIONS - 3D DEVELOPER</h3>
                    <h4 className="vertical-timeline-element-subtitle">Udine</h4>
                    <h5 className="vertical-timeline-element-subtitle">IAL FVG School</h5>
                    <p>In this course, students learn C#, Blender, and Unity for AR, VR, and game development.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#2f2f2f' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="01/2024 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<IoCodeWorkingSharp />}
                >
                    <h3 className="vertical-timeline-element-title">Frontend web developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Torino</h4>
                    <p>
                        Developing from scratch the website of an application that provides Clash of Clans players with a collection of maps for use in the game. I manage the entire project, from UX design to programming using HTML, CSS, JavaScript and React.Js. <br />In addition, I have gained expertise in collaborating effectively within a team environment throughout the project development lifecycle. Leveraging tools like Jira, we organized tasks, tracked progress, and facilitated seamless communication among team members. This collaborative approach ensured that our development process remained efficient and transparent, leading to the successful delivery of a high-quality application and website for Clash of Clans players.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2024"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<IoSchool />}
                >
                    <h3 className="vertical-timeline-element-title">Agile foundation</h3>
                    <h4 className="vertical-timeline-element-subtitle">Linkedin course</h4>
                    <p>
                        I have acquired foundational knowledge in Agile methodologies through a comprehensive course on LinkedIn Learning. This included understanding the Agile mindset, as well as familiarizing myself with various Agile tools and frameworks such as Scrum and Kanban.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2023 - 2024"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<IoSchool />}
                >
                    <h3 className="vertical-timeline-element-title">JavaScript course</h3>
                    <h4 className="vertical-timeline-element-subtitle">Udemy</h4>
                    <p>
                        During the course, I gained a solid understanding of fundamental JavaScript concepts such as variables, operators, functions, arrays, objects, and loops, as well as delving into more advanced topics like higher-order functions, closures, and asynchronous programming. I also learned to utilize modern JavaScript features like arrow functions, the spread operator, and async/await. I developed practical skills in applying this knowledge through projects and coding challenges.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2022 - 2023"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<IoSchool />}
                >
                    <h3 className="vertical-timeline-element-title">Frontend foundation course</h3>
                    <h4 className="vertical-timeline-element-subtitle">Online</h4>
                    <p>
                        I have acquired foundational skills in frontend development through self-study, mastering HTML, CSS, JavaScript, and Bootstrap. Through independent learning, I have gained proficiency in creating responsive and visually appealing web interfaces using HTML for structuring content, CSS for styling elements, and JavaScript for adding interactivity and dynamic functionality. Additionally, Bootstrap has provided me with a valuable framework for building modern and responsive websites efficiently. My self-directed learning approach has enabled me to develop a solid understanding of frontend development principles and techniques, laying a strong foundation for further growth and exploration in the field.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2020"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<IoSchool />}
                >
                    <h3 className="vertical-timeline-element-title">Master degree in Product Design </h3>
                    <h4 className="vertical-timeline-element-subtitle">ISIA, Firenze</h4>
                    <p>
                        The Product Design course at ISIA Florence has been a pivotal educational experience in my professional journey. Throughout the course, I acquired in-depth skills in the product design process, encompassing every stage from initial research to final realization. Through both theoretical lectures and practical projects, I learned to translate creative ideas into tangible and functional solutions, integrating principles of aesthetics, ergonomics, and sustainability. I also developed a solid understanding of universal design principles and current trends in the industry. Additionally, the course fostered an interdisciplinary approach, encouraging collaboration with other fields such as engineering and marketing. This experience provided me with a strong foundation to tackle complex design challenges and develop innovative solutions that meet the needs of users and the market.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2012"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<IoSchool />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor degree in Graphic design</h3>
                    <h4 className="vertical-timeline-element-subtitle">Accademia di belle arti, Foggia</h4>
                    <p>
                        The Graphic Design course at the Academy of Fine Arts in Foggia has been a transformative educational journey for me. Throughout the course, I immersed myself in various aspects of graphic design, gaining a comprehensive understanding of design principles, visual communication, and digital media. Through hands-on projects and theoretical studies, I honed my skills in typography, layout design, color theory, and image manipulation. Additionally, I delved into the creative process, learning how to conceptualize ideas, develop visual identities, and effectively communicate messages through design. The course also provided opportunities to explore emerging technologies and trends in the field, preparing me to adapt to the evolving landscape of graphic design. Overall, my experience at the Academy of Fine Arts in Foggia has equipped me with the knowledge, skills, and creative mindset necessary to thrive in the dynamic world of graphic design.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<IoStarSharp />}
                />
            </VerticalTimeline>
        </div>
    )
}

export default TimeLine