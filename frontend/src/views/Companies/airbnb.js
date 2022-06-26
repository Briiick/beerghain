import React from "react";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import CompanyDash from "components/CompanyList/index.jsx";

import Popup from "./Popup";

import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";

const ALCHEMY_ID = process.env.ALCHEMY_ID;

const provider = new ethers.providers.AlchemyProvider(
  "rinkeby",
  ALCHEMY_ID
);
const sf = await Framework.create({
  networkName: "rinkeby",
  provider
});

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
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Airbnb;
