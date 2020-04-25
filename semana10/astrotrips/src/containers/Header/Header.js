import React from 'react'
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import { connect } from "react-redux";

import styled from "styled-components"
import logo from "../../img/futurex.png"

const HeaderBar = styled.header ` 
    background-color: #E6E6E9;
    padding: 20px 0;
`
const Logo = styled.img ` 
    height: 90px;
    margin-left: 10%;
`

class Header extends React.Component {
    render () {
        return (
            <HeaderBar>
                <Logo onClick={this.props.goHome} src={logo}/>
            </HeaderBar>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
      goHome: () => dispatch(push(routes.root))
    };
  }
  
  export default connect(
    null,
    mapDispatchToProps
  )(Header);