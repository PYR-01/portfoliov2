import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop fontSize={"80px"} color="#31A8FF" />
        <div className="tech-icons-text">Adobe Photoshop</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeillustrator fontSize={"80px"} color="#FF9A00" />
        <div className="tech-icons-text">Adobe Illustrator</div>
      </Col>
    </Row>
  );
}

export default Techstack;
