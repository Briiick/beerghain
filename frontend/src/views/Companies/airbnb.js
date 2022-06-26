import React from "react";
import { useState } from "react";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import CompanySub from "components/CompanySub/index.jsx";

import Popup from "../IndexSections/Popup";
import { CreateFlow } from "components/Superfluid/createflow.js";

import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";
import { wagmiClient, chains } from "components/Wagmi/WagmiClient.js";
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';

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
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains} coolMode>
            <>
              <DemoNavbar />
              <main ref="main">
                <CompanySub company={"Airbnb"}/>

              </main>
              <CardsFooter />
            </>
          </RainbowKitProvider>
        </WagmiConfig>
      </>
    );
  }
}

export default Airbnb;
