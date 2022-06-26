import React, {useState, useEffect} from "react";
import { GiSplashyStream } from "react-icons/gi";
import { CompanyForm, TextInput, Submit, StreamingButton, Headings, ProfileWrap } from './styles.js';
import { UserList } from '../UserList/index.jsx';
import Fade from 'react-reveal/Fade';
import axios from 'axios';

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { InsuranceContractABI, CONTRACT_ADDRESS } from '../../contract_abi.js';
import Popup from "../../views/IndexSections/Popup";
import { CreateFlow } from "../../components/Superfluid/createflow.js";
import { DeleteFlow } from "../../components/Superfluid/deleteflow.js";

function FlowPopUp() {
  const [ createButtonPopup, createSetButtonPopup] = useState(false);
  const [ deleteButtonPopup, deleteSetButtonPopup] = useState(false);

  return (
    <div>
      <main style={{ width: '100%' }}>
        <div style={{ display: 'flex', width: '100%', overflow: 'hidden', alignItems: 'center', justifyContent: 'center' }}>
          <Button className="btn-icon mb-3 mb-sm-0" size="lg" style={{ borderRadius: '15px', margin: '10px' }} onClick={() => { createSetButtonPopup(true) }}>
            <span className="btn-inner--icon mr-1" style={{ marginBottom: '10px' }} ><GiSplashyStream style={{ marginBottom: '6px', color: 'green'}} /></span>
            <span className="btn-inner--text">
              {<span style={{ color: 'green' }}>Resume Coverage</span> }
            </span>
          </Button>
          <Button className="btn-icon mb-3 mb-sm-0" size="lg" style={{ borderRadius: '15px', margin: '10px' }} onClick={() => { deleteSetButtonPopup(true) }}>
            <span className="btn-inner--icon mr-1" style={{ marginBottom: '10px' }} ><GiSplashyStream style={{ marginBottom: '6px', color: 'tomato'}} /></span>
            <span className="btn-inner--text">
              {<span style={{ color: 'tomato' }}>Halt Coverage</span> }
            </span>
          </Button>
        </div>
      </main>
      <Popup trigger={createButtonPopup} setTrigger={createSetButtonPopup}>
        <CreateFlow address={CONTRACT_ADDRESS}/>
      </Popup>
      <Popup trigger={deleteButtonPopup} setTrigger={deleteSetButtonPopup}>
        <DeleteFlow />
      </Popup>
    </div>
  );
}

export const Hero = () => {
  const [active, setActive] = useState(false);
  const [streaming, setStreaming] = useState(false);
  const [TVL, setTVL] = useState(100);
  const PREMIUM_PRICE_MONTHLY = 6;
  const SECONDS_PER_MONTH = 2628288;
  const [currAddress, setCurrAddress] = useState('');
  const { data } = useAccount();
  const [users, setUsers] = useState([]);
  const [inputs, setInputs] = useState({});
  // const users = [{name: "Alex Wicken", status: true}, {name: "Booban Bengaraju", status: true}, {name: "Gayvid Witten", status: false}, {name: "Eilrene Gwu", status: true}, {name: "Trenton I Reckon", status: true}]; 
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}));
  }
  
  useEffect(() => {
    setCurrAddress(data?.address);
    console.log(currAddress)
    axios.get('http://localhost:8080/company/check_exist?eth_address='+currAddress)
    .then((resp) => {
      if (resp["data"] === !active){
        setActive(resp["data"])
      }
    })
    .catch(err => console.log("check exist error here"))

  });

  useEffect(() => {
    axios.get('http://localhost:8080/company/get_users?eth_address='+currAddress)
    .then((resp) => {
      console.log("Usere data here", resp["data"])
      setUsers(resp["data"])
      console.log("ASDASD", users); 
    })
    .catch(err => console.log("Get user error here"))


  }, [active]);

  const handleStream = (e) => {
    setStreaming(!streaming);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const price = e.target[2].value;
    const address = currAddress;
    console.log("ASDASD", name, email, price, address);
    const body = {eth_address: address, price: price, name: name}
    axios.post(`http://localhost:8080/company/setup?eth_address=${address}&price=${price}&name=${name}`)
    .then(resp => {
      console.log("created company sub!!")
    })
    .catch(err => console.log("error creating company"))
    setActive(true);
  }

    

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
                    
                    <div style={{ flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '3% 6%' }}>
                      <Fade >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Headings>
                            <h5>{parseFloat(PREMIUM_PRICE_MONTHLY/SECONDS_PER_MONTH)}Ξ</h5>
                            <h3>Premium/second</h3>
                          </Headings>
                          <Headings>
                            <h5>{parseFloat(PREMIUM_PRICE_MONTHLY)}Ξ</h5>
                            <h3>Premium/month</h3>
                          </Headings>
                        </div>
                        <Headings>
                        <h5>{TVL}Ξ</h5>
                        <h3>Contract TVL</h3>
                        </Headings>
                      </Fade>
                    </div>
                    {(active && currAddress) && 
                      <Fade when={active}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <ProfileWrap>
                              <div className="mt-5" style={{ marginTop: 0 }}>
                                <small className="text-white font-weight-bold mb-0 mr-2">
                                  {currAddress && `Address: ${currAddress}`}
                                </small>
                              </div>
                              <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center' }}>
                                <StreamingButton streaming={streaming}>{streaming ? "Covered" : "Not Covered"}</StreamingButton>
                              </div>
                              <FlowPopUp />
                          </ProfileWrap>
                        </div>
                      </Fade>
                    }

                    <div className="btn-wrapper mt-5">
                      {!currAddress &&
                        <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center', flexDirection: 'column' }}>
                          <h3 style={{ marginBottom: "30px", color: 'white', fontWeight: 600}}>Connect wallet to begin</h3>
                          <ConnectButton />
                        </div>
                      }
                      {(!active && currAddress) &&
                        <Fade>
                          <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center', width: '100%' }}>
                            <CompanyForm onSubmit={handleSubmit} style={active ? {opacity: 0} : {opacity: 1}}>
                              <h4 style={{ color: 'white' }}>Create Company Subscription</h4>
                              <TextInput type="text" placeholder="Company Name" id="name" name="name" required/>
                              <TextInput type="email" placeholder="Company Email" id="email" name="email" required/>
                              {/* <label for="file">Choose file to upload</label> */}
                              <TextInput type="number" id="price" placeholder="Monthly Price" name="price" required/>
                              <Submit className="btn-icon mb-3 mb-sm-0" color="github" size="lg" type="submit" value="Issue Subscription">Issue Subscription</Submit>
                            </CompanyForm>
                          </div>
                        </Fade>
                      }
                    </div>
                    {(currAddress && active) &&  
                      <Fade when={active}>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                          <Headings style={{ textAlign: 'center', marginTop: '20px' }}><h3>User List</h3></Headings>
                          <UserList users={users} />
                        </div>
                      </Fade>
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
      </>
    );
  }

export default Hero;
