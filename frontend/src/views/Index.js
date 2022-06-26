import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Hero from "../components/Hero/index.jsx";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: '',
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    this.setState({ loggedIn: true })
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar loggedIn={this.state.loggedIn} handleLogin={this.handleLogin}/>
        <main ref="main">
          <Hero loggedIn={this.state.loggedIn} handleLogin={this.handleLogin}/>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Index;
