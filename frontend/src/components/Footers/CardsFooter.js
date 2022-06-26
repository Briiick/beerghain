/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import covalent from 'assets/img/covalent.jpeg';
import superfluid from 'assets/img/superfluid.jpeg';
import uma from 'assets/img/uma.png';
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards">
          {/* <Container className="container-lg">
            <Row>
              <Col className="mb-5 mb-md-0" md="6">
                <Card className="card-lift--hover shadow border-0">
                  <Link to="/landing-page">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/landing.jpg")}
                    />
                  </Link>
                </Card>
              </Col>
              <Col className="mb-5 mb-lg-0" md="6">
                <Card className="card-lift--hover shadow border-0">
                  <Link to="/profile-page">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/profile.jpg")}
                    />
                  </Link>
                </Card>
              </Col>
            </Row>
          </Container> */}
          <Container>
            <Row className="row-grid align-items-center my-md">
              <Col lg="6">
                <h3 className="text-primary font-weight-light mb-2">
                  Supporting the next generation of online services.
                </h3>
                <h4 className="mb-0 font-weight-light">
                  Made possibly by the following:
                </h4>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href=""
                  id="tooltip475038074"
                  style={{ opacity: 0}}
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-twitter" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip475038074">
                  Superfluid
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href=""
                  id="tooltip837440414"
                >
                  <span className="btn-inner--icon">
                    <img src={superfluid} style={{ borderRadius: '100%', width: '20px', height: '20px'}}/>
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Superfluid
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="dribbble"
                  href=""
                  id="tooltip829810202"
                >
                  <span className="btn-inner--icon">
                  <img src={uma} style={{ borderRadius: '100%', width: '20px', height: '20px'}}/>
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810202">
                  Uma
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="github"
                  href=""
                  id="tooltip495507257"
                >
                  <span className="btn-inner--icon">
                  <img src={covalent} style={{ borderRadius: '100%', width: '20px', height: '20px'}}/>
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                  Covalent
                </UncontrolledTooltip>
              </Col>
            </Row>
            <hr />
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;
