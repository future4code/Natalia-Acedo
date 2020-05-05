import styled from "styled-components"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const HeaderBar = styled.header ` 
    background-color: #E78062;
    padding: 10px;
    display: flex;
    justify-content: space-between;
`

export const Logo = styled.img ` 
    height: 60px;
    margin-left: 2%;
    cursor: pointer;
`

export const ExitToAppIconStyled = styled(ExitToAppIcon)`
    height: 40px ;
    width: 40px;
    color: white;
    align-self: center;
    margin-right: 2%;
    cursor: pointer;
`