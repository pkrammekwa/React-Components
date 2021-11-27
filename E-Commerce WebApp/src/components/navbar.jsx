import { Badge, Modal, Dialog} from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import {ShoppingCartOutlined, Menu} from '@material-ui/icons';
import { mobile } from './Responsive';
import { Link } from 'react-router-dom';

/*
=================================================================================
                            Styled CSS
=================================================================================
*/
const Container = styled.div`
    height: 50px;
    border-bottom: 1px solid #ddd;

`
const Wrapper = styled.div`
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;  
    background-color: white;
    position: fixed;
    z-index: 999;
    width: 100%;
    -webkit-box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.3);
    height: 30px;
`;
const Left = styled.div`
    flex: 1;
    margin-top: -15px;
`;
const Center = styled.div`
    flex: 1;`
const Logo = styled.h3`
    font-Weight: bold;
`;
const Right = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 40px;
    ${mobile({marginLeft:"0px"})}
`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    justify-content: space-between;
    margin-left: 25px;
    text-decoration: none !important;
    color: black !important;
    ${mobile({display:"none"})}
    &:hover{
        border: 1px solid #ddd;
        padding: 10px;
        border-radius: 5px;
        
    }
`;
const MobileNav = styled.div`
    display:none;
    pointer: cursor;
    ${mobile({display:"block"})}
`;
const MobileMenu = styled.div`
     background-color: rgba(15,15,15,0.8);
     height: 100vh;
     margin-top: 12%;
`;
const MobileMenuList = styled.ul`
     text-decoration: none;
     padding: 10px;
`;
const MobileMenuListItem = styled.li`
    margin: 30px;
    padding: 5px;
    font-size: 20px;
    color: white;
    font-weight: bold;
    list-style: none;
    align-items: center;
`;
/*
=================================================================================
                            Your Code Goes Here!
=================================================================================
*/




const Navbar = () => {
    
    /**
     * Handles mobile toggle
     */
    const [open, setOpen] = useState(false);
    const OpenMobileMenu = ()=>{
        setOpen(true);
    }
    const handleClose = ()=>{
        setOpen(false);
    }

    return (
        <div>
         <Container>
             <Wrapper>
             <Left><Logo><Link to="/" style={{textDecoration:"none", color:"black"}}> <ShoppingCartOutlined/> Store</Link></Logo> </Left>
             <Center>
                 
             </Center>
             <Right >
                     
                 <MenuItem><Link to="../Admin/Dashboard" style={{textDecoration:"none", color:"black"}}>Dashboard</Link></MenuItem>
                 <MenuItem><Link to="../MyProfile" style={{textDecoration:"none", color:"black"}}>My Profile</Link></MenuItem>
                 <MenuItem><Link to="../Login" style={{textDecoration:"none", color:"black"}}>Login</Link></MenuItem>
                 <MenuItem><Link to="../Register" style={{textDecoration:"none", color:"black"}}>Register</Link></MenuItem>
                 <MenuItem><Link to="../MyWishlist" style={{textDecoration:"none", color:"black"}}><Badge badgeContent={3} color="error"> Wishlist </Badge></Link></MenuItem>
                 <MenuItem><Link to="../ShoppingCart" style={{textDecoration:"none", color:"black"}}> <Badge badgeContent={5} color="primary"> <ShoppingCartOutlined/> </Badge> </Link></MenuItem>
                <MobileNav> <Menu onClick={() => OpenMobileMenu()}/></MobileNav> 
             </Right>
             <Modal open={open}onClose={() =>handleClose()}>
                 <MobileMenu>
                    <MobileMenuList>
                        <center>
                            <MobileMenuListItem><Link to="../Admin/Dashboard" style={{textDecoration:"none", color:"white"}}>Dashboard</Link></MobileMenuListItem>
                            <MobileMenuListItem><Link to="../MyProfile" style={{textDecoration:"none", color:"white"}}>My Profile</Link></MobileMenuListItem>
                            <MobileMenuListItem><Link to="../Login" style={{textDecoration:"none", color:"white"}}>Login</Link></MobileMenuListItem>
                            <MobileMenuListItem><Link to="../Register" style={{textDecoration:"none", color:"white"}}>Register</Link></MobileMenuListItem>
                            <MobileMenuListItem><Link to="../MyWishlist" style={{textDecoration:"none", color:"white"}}><Badge badgeContent={3} color="error"> Wishlist </Badge></Link></MobileMenuListItem>
                            <MobileMenuListItem><Link to="../ShoppingCart" style={{textDecoration:"none", color:"white"}}> <Badge badgeContent={5} color="primary"> <ShoppingCartOutlined/> </Badge> </Link></MobileMenuListItem>
                        </center>
                    </MobileMenuList>
                 </MobileMenu>
             </Modal>
            </Wrapper>
            </Container>
        </div>
    )
}

export default Navbar
