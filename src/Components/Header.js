import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {

    const[burgerStatus,setburgerStatus] = useState(false);
    
    return (
        <Container>
            <a > 
                <img src="/images/logo.svg"/>
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">solar Roof</a>
                <a href="#">Solar Panels</a>
            </Menu>
            <RightMenu>
                <a href = "#">Shop</a>
                <a href ="#">Tesla Account</a>
                <MenuIcon onClick={()=>setburgerStatus(true)}/>
            </RightMenu>
            <BurgerNav show = {burgerStatus}>
                <CloseBtn>
                <CustomClose onClick={()=>setburgerStatus(false)} />
                </CloseBtn>
                <ul>
                    <li><a>Model S</a></li>
                    <li><a>Model 3</a></li>
                    <li><a>Model X</a></li>
                    <li><a>Model Y</a></li>
                    <li><a>Existing Inventory</a></li>

                    <li><a>Used Inventory</a></li>
                    <li><a>Trade-In</a></li>
                    <li><a>Roadster</a></li>
                    <li><a>Cyber Truck</a></li> 
                    <li><a>Charging</a></li>
                    <li><a>Powerwall</a></li>
                    <li><a>Utilities</a></li>
                    
                </ul>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container =  styled.div`
    min-height:60px;
    width:100%;
    position:fixed;
    top:0;
    left:0;
    right:0;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 20px;
    background:transparent;

`
const Menu = styled.div`
   display:flex;
   flex:1;
   align-items:center;
   justify-content:center;
    a{
       font-weight:400; 
       margin 0 10px;
    }
    @media(max-width:768px){
        display:none;
    }

`
const RightMenu = styled.div`

  display:flex;
  align-items:center;
  a{
    margin-right:20px;
  }
  cursor:pointer;
`
const BurgerNav = styled.div`
  list-style:none;
  background:white;
  position:fixed;
  top:0;
  right:0;
  bottom:0;
  
  width:300px;
  padding:20px;
  li{
      padding:15px 0;
      font-weight:400;
      
  }
  transform:${props => props.show ?`translateX(0)`:`translateX(100%)`};
`
const CustomClose = styled(CloseIcon)`
  display:flex;

`
const CloseBtn =styled.div`
  display:flex;
  justify-content:flex-end;
  align-item:flex-end;
`