import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/heritage.png";
import projImg2 from "../assets/img/weather.png";
import projImg3 from "../assets/img/sorting.png";
import projImg4 from "../assets/img/social.png";
import projImg5 from "../assets/img/chat.png";
import projImg6 from "../assets/img/joke.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Heritage Website",
      description: "A Heritage site for our culture.",
      imgUrl: projImg1,
    },
    {
      title: "Weather App",
      description: "A live weather showing website.",
      imgUrl: projImg2,
    },
    {
      title: "Sorting Visualizer",
      description: "Visualize different sorting techniques",
      imgUrl: projImg3,
    },
    {
      title: "YuaVani",
      description: "A social media website for students.",
      imgUrl: projImg4,
    },
    {
      title: "KKW Chat",
      description: "A group chat app.",
      imgUrl: projImg5,
    },
    {
      title: "AI Joke tool",
      description: "Let AI crack a joke for you.",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Let's have a look at some of my projects...</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
