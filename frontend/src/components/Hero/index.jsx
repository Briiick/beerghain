import React, {useState} from "react";
import { GiSplashyStream } from "react-icons/gi";
import { CompanyForm, TextInput, Submit, StreamingButton, Headings } from './styles.js';
import { UserList } from '../UserList/index.jsx';
import Fade from 'react-reveal/Fade';
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const Hero = () => {
  const [active, setActive] = useState(true);
  const [streaming, setStreaming] = useState(false);
  const [TVL, setTVL] = useState(100);
  const PREMIUM_PRICE_MONTHLY = 10;
  const SECONDS_PER_MONTH = 2628288;
  const { data } = useAccount();
  const [currAddress, setCurrAddress] = useState(data?.address);

  const handleStream = (e) => {
    setStreaming(!streaming);
  }
  
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
            <div className="shape shape-style-1 shape-default" />
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center">
                    
                    <div style={{ flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '3% 6%', backgroundColor: '#191b1f', border: "2px solid black", borderRadius: '15px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Headings>
                          <h3>Insurance Premium</h3>
                          <h5>{parseFloat(PREMIUM_PRICE_MONTHLY/SECONDS_PER_MONTH)}Ξ</h5>
                        </Headings>
                        <Headings>
                        <h3>Contract TVL</h3>
                        <h5>{TVL}Ξ</h5>
                        </Headings>
                      </div>

                      <Fade when={active}>
                        <div className="mt-5" style={{ marginTop: 0 }}>
                          <small className="text-white font-weight-bold mb-0 mr-2">
                            {currAddress && `Address: ${currAddress}:`}
                          </small>
                        </div>
                        <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center' }}>
                          <StreamingButton streaming={streaming}>{streaming ? "Covered" : "Not Covered"}</StreamingButton>
                        </div>
                      </Fade>
                    </div>


                    <div className="btn-wrapper mt-5">
                      {!data &&
                        <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center' }}>
                          <ConnectButton />
                        </div>
                      }
                      {!active &&
                        <Fade when={data}>
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
                        <Button className="btn-icon mb-3 mb-sm-0" size="lg" style={{ borderRadius: '15px', marginBottom: '5vh'}} onClick={(e) => handleStream(e)}>
                          <span className="btn-inner--icon mr-1" style={{ marginBottom: '10px' }} >
                            <GiSplashyStream style={ !streaming ? { marginBottom: '6px', color: 'green'} : {marginBottom: '6px', color: "red" }} />
                          </span>
                          <span className="btn-inner--text">
                            {!streaming ? 
                            <span style={{ color: 'green' }}>Resume Coverage</span>
                            :
                            <span style={{ color: 'red' }}>Stop Coverage</span>
                            }
                          </span>
                        </Button>
                      </Fade>
                      <Fade when={active}>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                          <Headings style={{ textAlign: 'center', marginTop: '20px' }}><h3>User List</h3></Headings>
                          <UserList users={users} />
                        </div>
                      </Fade>

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
