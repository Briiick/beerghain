import React, {useState} from "react";
import { RiWallet3Fill, RiAlarmWarningLine, RiStopCircleLine } from "react-icons/ri";
import { Logo } from 'assets/logo/logo.js';
import { CompanyForm, TextInput, Submit } from './styles.js';
import { UserList } from '../UserList/index.jsx';
import Fade from 'react-reveal/Fade';
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

export const Hero = ({loggedIn, handleLogin}) => {
    const [active, setActive] = useState(false);
    const [currAddress, setCurrAddress] = useState('');
    console.log("PROPS", loggedIn);

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("submitting: ", e.target.value);
      setActive(true);
    }

    const users = [{name: "Alex Wicken", status: true}, {name: "Booban Bengaraju", status: true}, {name: "Gayvid Witten", status: false}, {name: "Eilrene Gwu", status: true}, {name: "Trenton I Reckon", status: true}]; 

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
                      {!loggedIn ?
                      <Button className="btn-white btn-icon mb-3 mb-sm-0" color="default" size="lg">
                        <span className="btn-inner--icon mr-1">
                          <RiWallet3Fill style={{ marginBottom: '4px', marginLeft: '2px' }} />
                        </span>
                        <span className="btn-inner--text" style={{ marginLeft: '3px' }} onClick={(e) => handleLogin(e)}>Connect Wallet</span>
                      </Button>
                      :
                        <Fade when={loggedIn && !active}>
                          <CompanyForm onSubmit={(e) => handleSubmit(e)} style={active ? {opacity: 0} : {opacity: 1}}>
                            <h4>Create Company Subscription</h4>
                            <TextInput type="text" placeholder="Company Name" id="name" required/>
                            <TextInput type="email" placeholder="Company Email" id="email" required/>
                            {/* <label for="file">Choose file to upload</label> */}
                            <TextInput type="number" id="price" placeholder="Monthly Price" required/>
                            <input type="hidden" id="address" value={currAddress} />
                            <Submit className="btn-icon mb-3 mb-sm-0" color="github" size="lg" type="submit" value="Issue Subscription">Issue Subscription</Submit>
                          </CompanyForm>
                        </Fade>
                      }
                    </div>
                      <Fade when={active}>
                        <UserList users={users}/>
                      </Fade>


                    <div className="mt-5">
                      <small className="text-white font-weight-bold mb-0 mr-2">
                        {currAddress && `Address: ${currAddress}`}
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

export default Hero;
