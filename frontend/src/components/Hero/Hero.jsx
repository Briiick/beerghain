import React from "react";
import { RiWallet3Fill, RiAlarmWarningLine, RiStopCircleLine } from "react-icons/ri";
import { Logo } from 'assets/logo/logo.js';
import { CompanyForm, TextInput, Submit } from './styles.js';
import { UserList } from '../UserList/index.jsx';
import Fade from 'react-reveal/Fade';
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      active: false,
    }
  }

  componentDidMount() {
    this.setState({ total: 100 }); //Pass in actual total value in contract
  }

  handleSubmit = (e) => {
    // submit to backend pls RRRRRRUBAN
    console.log("Submitting form", e.target.value);
    this.setState({ active: true });
  }

  
  render() {
    const users = [{name: "Alex Wicken", status: true}, {name: "Booban Bengaraju", status: true}]; 
    return (
      <>
        <div className="position-relative" style={{ }}>
          <section className="section section-hero section-shaped" >
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default" >
              {/* <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" /> */}
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    <Logo size={45}/>
                    <p className="lead text-white">
                      On chain subscriptions
                    </p>


                    <div className="btn-wrapper mt-5">
                      {this.props.loggedIn ?
                      <Button className="btn-white btn-icon mb-3 mb-sm-0" color="default" size="lg">
                        <span className="btn-inner--icon mr-1">
                          <RiWallet3Fill style={{ marginBottom: '4px', marginLeft: '2px' }} />
                        </span>
                        <span className="btn-inner--text" style={{ marginLeft: '3px' }}>Connect Wallet</span>
                      </Button>
                      :
                        <CompanyForm onSubmit={(e) => this.handleSubmit(e)}>
                          <h4>Create Company Subscription</h4>
                          <TextInput type="text" placeholder="Company Name" id="name" />
                          <TextInput type="email" placeholder="Company Email" id="email" />
                          <label for="file">Choose file to upload</label>
                          <input type="file" id="logo" accept="image/png, image/jpeg"/>
                          <input type="hidden" id="address" value={this.state.address} />
                          <Submit className="btn-icon mb-3 mb-sm-0" color="github" size="lg" type="submit" value="Issue Subscription" />
                        </CompanyForm>
                      }
                      <Fade when={this.state.active}>
                        <UserList users={users}/>
                      </Fade>


                    </div>
                    <div className="mt-5">
                      <small className="text-white font-weight-bold mb-0 mr-2">
                        {this.props.currAddress && `Address: ${this.props.currAddress}`}
                      </small>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
