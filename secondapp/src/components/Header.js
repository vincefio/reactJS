import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <a href="/" className="navbar-brand">
        {props.branding}
      </a>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
      </div>
    </nav>
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
