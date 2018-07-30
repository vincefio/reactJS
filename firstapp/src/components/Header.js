import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  return (
    <div>
      <h1>{props.branding}</h1>
    </div>
  );
};

Header.defaultProps = {
  branding: "Ding Dong"
};

//below is a way to check validation
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
