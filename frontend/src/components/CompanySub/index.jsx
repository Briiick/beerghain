import React, {useState} from "react";
import { GiSplashyStream } from "react-icons/gi";
import { CompanyForm, TextInput, Submit, StreamingButton, Headings } from './styles.js';
import { UserList } from '../UserList/index.jsx';
import Fade from 'react-reveal/Fade';
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const CompanySub = ({ company }) => {
  const { data } = useAccount();

  return (
    <div className="position-relative" style={{ }}>
          <section className="section section-hero section-shaped" >
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default" />
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center">
                    
                    oh it's {company} time

                    {!data ?
                      <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center' }}>
                        <ConnectButton />
                      </div>
                      :
                      <div>
                        <button>Subscribe</button>
                      </div>
                    }

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
  );
  
}

export default CompanySub;
