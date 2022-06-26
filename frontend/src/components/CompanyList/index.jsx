import React from "react";

class CompanyDash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
    }
  }

  render() {
    return (
      <>
        <div className="position-relative" style={{ }}>
          hii {this.props.company}
        </div>
      </>
    );
  }
}

export default CompanyDash;
