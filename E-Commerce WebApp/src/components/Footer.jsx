import { Facebook, Instagram, Twitter, Phone, Email } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from './Responsive';


/*
=================================================================================
                            Styled CSS
=================================================================================
*/
const Container = styled.div`
    display: flex;
     ${mobile({padding: "0px", flexDirection:"column"})}
`;
const Hr = styled.hr`
        background-color: #ddd;
        border: none;
        height: 1px;
        width: 90%;
`;
//Left Section: logo, desc, socials
const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Socials = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const SocialsIcon = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    color: black;
    border: 1px solid black;
    align-items: center;
    justify-content: center;
    display: flex;
    margin: 5px;
    cursor: pointer;
    &:hover{
        background-color: black;
        color: white;
    }
`;
const Logo = styled.h1``;
const Desc = styled.p`
    margin: 20px 0px;
`;
//Centered items: Quick links
const Center = styled.div`
    flex: 2;
    padding: 20px;
`;
const Title = styled.h3``;
const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItems = styled.li`
    width: 50%;
    margin-bottom: 10px;
    align-items: center;
`;
const Right = styled.div`
    flex: 1;
    padding: 20px;
`;
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Copyright = styled.div`
    margin: 10px;
    font-weight: 100;
    font-style: italic;
`;
/*
=================================================================================
                            Your Code Goes Here
=================================================================================
*/


const Footer = () => {
    return (
        <div> <Hr/>
        <Container>
           
            <Left>
                <Logo> Store.</Logo>
                <Desc>We pride ourselves in providing the best quality products at an affordable price.</Desc>
                <Socials>
                    <SocialsIcon color="000fbf">
                        <Facebook/>
                    </SocialsIcon>
                    <SocialsIcon color="00bfbf">
                        <Twitter/>
                    </SocialsIcon>
                    <SocialsIcon color="00ff00">
                        <Instagram/>
                    </SocialsIcon>

                </Socials>
            
            </Left>

            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItems><Link to="Home" style={{textDecoration:"none", color:"black"}}>Home</Link></ListItems>
                    <ListItems><Link to="ShoppingCart" style={{textDecoration:"none", color:"black"}}>Cart</Link></ListItems>
                    <ListItems><Link to="Shop" style={{textDecoration:"none", color:"black"}}>Shop</Link></ListItems>
                    <ListItems><Link to="Wishlist" style={{textDecoration:"none", color:"black"}}>Wishlist</Link></ListItems>
                    <ListItems><Link to="Checkout" style={{textDecoration:"none", color:"black"}}>Checkout</Link></ListItems>
                    <ListItems><Link to="OrderTracking" style={{textDecoration:"none", color:"black"}}>Order Tracking</Link></ListItems>
                    <ListItems><Link to="MyAccount" style={{textDecoration:"none", color:"black"}}>My Account</Link></ListItems>
                    <ListItems><Link to="TC" style={{textDecoration:"none", color:"black"}}>Terms and Conditions</Link></ListItems>
                </List> 
                 <Copyright>created by YaronaX - 2021</Copyright>
            </Center>

            <Right>
                <Title>Contacts</Title>
                <ContactItem> <Phone/> +27 74 900 1234</ContactItem>
                <ContactItem> <Email/> info@store.co.za</ContactItem>
            </Right>

          
        </Container>
        </div>
    )
}

export default Footer
