import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Design Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some design projects I've been working on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://drive.google.com/thumbnail?id=1psPtcxn5kxXqYoHHFNVk-R7REAoriu9Y&sz=w1000"
              isBlog={false}
              title="Design Project 1"
              description="Professional graphic design work showcasing creative skills in Adobe Photoshop and Illustrator. This project demonstrates expertise in visual design, color theory, and typography."
              ghLink="https://drive.google.com/file/d/1psPtcxn5kxXqYoHHFNVk-R7REAoriu9Y/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://drive.google.com/thumbnail?id=1-mZIsSOPZLGKoelcmtTrRipu9p3HPgsL&sz=w1000"
              isBlog={false}
              title="Design Project 2"
              description="Creative design work featuring engaging visual content. Utilized Adobe Photoshop and Illustrator to create eye-catching visuals that effectively communicate ideas."
              ghLink="https://drive.google.com/file/d/1-mZIsSOPZLGKoelcmtTrRipu9p3HPgsL/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://drive.google.com/thumbnail?id=1sebc07fj-8kHEIZUehY3RqQMyuuLXloF&sz=w1000"
              isBlog={false}
              title="Design Project 3"
              description="Professional graphic design showcasing skills in composition, layout, and visual hierarchy. Focused on combining creative typography and color theory to deliver compelling designs."
              ghLink="https://drive.google.com/file/d/1sebc07fj-8kHEIZUehY3RqQMyuuLXloF/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://drive.google.com/thumbnail?id=16GSDUYNDhyKZ7PCaXbcFSi6TWiMmf-0m&sz=w1000"
              isBlog={false}
              title="Design Project 4"
              description="Custom graphic design work using Adobe Illustrator and Photoshop. Created artwork with attention to detail and creativity, demonstrating strong design fundamentals."
              ghLink="https://drive.google.com/file/d/16GSDUYNDhyKZ7PCaXbcFSi6TWiMmf-0m/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://drive.google.com/thumbnail?id=1B10oZi_5TVj8LIJ6Hv1COgjVFN2VKTGW&sz=w1000"
              isBlog={false}
              title="Design Project 5"
              description="Visual design project applying design principles to create aesthetically pleasing and impactful graphics. Showcases proficiency in Adobe creative suite."
              ghLink="https://drive.google.com/file/d/1B10oZi_5TVj8LIJ6Hv1COgjVFN2VKTGW/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://drive.google.com/thumbnail?id=1syqDE75J_dSPO7pvu9r9qvx2QXS11mf5&sz=w1000"
              isBlog={false}
              title="Design Project 6"
              description="Professional design work demonstrating creative problem-solving and visual communication skills. Created with Adobe Photoshop and Illustrator using industry-standard techniques."
              ghLink="https://drive.google.com/file/d/1syqDE75J_dSPO7pvu9r9qvx2QXS11mf5/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://drive.google.com/thumbnail?id=17MCgpAwAG-PTZ8IJqmFIi5-jivyiwT0C&sz=w1000"
              isBlog={false}
              title="Design Project 7"
              description="Creative graphic design project showcasing versatility and technical skills. Features thoughtful use of color, typography, and layout to create engaging visual content."
              ghLink="https://drive.google.com/file/d/17MCgpAwAG-PTZ8IJqmFIi5-jivyiwT0C/view?usp=drive_link"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
