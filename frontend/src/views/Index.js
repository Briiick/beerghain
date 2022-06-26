import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Hero from "../components/Hero/index.jsx";

// wagmi implementation
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';
import { wagmiClient, chains } from "components/Wagmi/WagmiClient.js";

class Index extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <>
            <DemoNavbar />
            <main ref="main">
              <Hero />
            </main>
            <CardsFooter />
          </>
        </RainbowKitProvider>
      </WagmiConfig>
    );
  }
}

export default Index;
