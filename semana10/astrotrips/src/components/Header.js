import React from 'react'
import styled from "styled-components"
import logo from "../img/futurex.png"

const HeaderBar = styled.header ` 
    background-color: #E6E6E9;
    padding: 20px 0;
`
const Logo = styled.img ` 
    height: 90px;
    margin-left: 10%;
`

export default function Header () {
    return (
        <HeaderBar>
            <Logo src={logo}/>
        </HeaderBar>
    )
}