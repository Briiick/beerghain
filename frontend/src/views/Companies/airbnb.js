import React from "react";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import CompanyDash from "components/CompanyList/index.jsx";

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
