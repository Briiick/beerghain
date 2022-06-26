import React from "react";
import { useState } from "react";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import CompanyDash from "components/CompanyList/index.jsx";

import Popup from "../IndexSections/Popup";
import { CreateFlow } from "../Superfluid/createflow.js";

import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";

const ALCHEMY_ID = process.env.ALCHEMY_ID;

const provider = new ethers.providers.AlchemyProvider(
  "rinkeby",
  ALCHEMY_ID
);
// const sf = await Framework.create({
//   networkName: "rinkeby",
//   provider
// });

function FlowPopUp() {
  const [ buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
      <main>
        <button onClick={() => { setButtonPopup(true) }}>Create Flow</button>
      </main>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <CreateFlow />
      </Popup>
    </div>
  );

}

class Airbnb extends React.Component {

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
          <main ref="main">
            hi Airbnb
            <CompanyDash company={"Airbnb"} />
            <FlowPopUp/>
          </main>
        <CardsFooter />
      </>
    );
  }
}

export default Airbnb;
