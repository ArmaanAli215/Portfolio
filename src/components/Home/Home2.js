import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              i'm a normal human who loves gaming and a bit of coding. I like to watch YouTube when I'm free and play some games. Apart from that, I'm on Discord too. I have a Discord server with 400+ members called The Nightmare Server. In the future, we might start our company. I'm a very fun person to talk to. If you want any help, you can DM me and I'll help you. 
              <br />
    </Container>
  );
}
export default Home2;
