import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiWindows, SiGooglechrome } from "react-icons/si";
import { BsPaintBucket, BsPalette } from "react-icons/bs";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows fontSize={"80px"} />
        <div className="tech-icons-text">Windows</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <SiGooglechrome fontSize={"80px"} />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <BsPalette fontSize={"80px"} />
        <div className="tech-icons-text">Color Theory</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <BsPaintBucket fontSize={"80px"} />
        <div className="tech-icons-text">Typography</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
