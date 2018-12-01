import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Hnavbar from './navbar';


export default class Home extends Component {
  render() {
    return (
      <div className="landing-grid">
        <Hnavbar />
        <div className="home-section" id="home" style={{paddingBottom: "50px"}}>
            <Container>
                    <img 
                        src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                        alt="avatar-pic"
                        className="avatar-img"
                    />
                    
                    <div className="banner-text">
                        <Col md="12" sm="12">
                            <Col md="12" sm="12">
                                <h1>Front-End Web Developer</h1>
                            </Col>

                            <hr />
                            <p>HTML/CSS | Bootstrap | Javascript | React | JQuery</p>
                        </Col>

                        <Col>
                            <Row className="social-links">
                                {/* LinkedIn */}
                                <Col xs="3" md="3">
                                    <a href="#home" target="_blank">
                                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                                    </a>
                                </Col>

                            {/* GitHub */}
                                <Col xs="3" md="3">
                                    <a href="#home" target="_blank">
                                        <i className="fa fa-github-square" aria-hidden="true" />
                                    </a>
                                </Col>

                            {/* Freecodecam */}
                                <Col xs="3" md="3">
                                    <a href="#home" target="_blank">
                                        <i className="fa fa-free-code-camp" aria-hidden="true" />
                                    </a>
                                </Col>

                            {/* Youtube */}
                                <Col xs="3" md="3">
                                    <a href="#home" target="_blank">
                                        <i className="fa fa-youtube-square" />
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </div>
            </Container>
        </div>
      </div>
    )
  }
}
