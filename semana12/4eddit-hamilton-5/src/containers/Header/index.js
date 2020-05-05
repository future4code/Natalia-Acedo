import React from "react";
import { push, replace } from "connected-react-router";
import { routes } from "../Router/index";
import { connect } from "react-redux";
import logo from "../../img/4eddit.png";
import { HeaderBar, Logo, ExitToAppIconStyled } from "./style";

class Header extends React.Component {
  handleLogout = () => {
    localStorage.clear();
    this.props.goToLoginPage();
  };

  render() {
    const isLogged = localStorage.getItem("token") !== null;
    return (
      <HeaderBar>
        <Logo onClick={this.props.goToPosts} src={logo} />
        {isLogged && (
          <ExitToAppIconStyled fontSize="large" onClick={this.handleLogout} />
        )}
      </HeaderBar>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goToPosts: () => dispatch(push(routes.posts)),
    goToLoginPage: () => dispatch(replace(routes.login)),
  };
}

export default connect(null, mapDispatchToProps)(Header);
