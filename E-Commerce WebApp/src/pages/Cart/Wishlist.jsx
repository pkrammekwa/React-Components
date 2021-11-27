import styled from 'styled-components';
import Announcements from '../../components/Announcements';
import Footer from '../../components/Footer';
import Navbar from '../../components/navbar';
import {Add, Remove} from '@material-ui/icons';
import { mobile } from '../../components/Responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`

`;
const Title = styled.h1`
    text-align: center;
`;
const Wrapper = styled.div`
    padding: 20px;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;
const TopTexts = styled.div`

${mobile({display:"none"})}
`;
const TopText = styled.span`
    margin: 0px 10px;
    font-style: italic;
    color: darkgray;

`;

const TopButton = styled.button`
    padding: 10px 40px;
    cursor: pointer;
    flex: 1;
    border: 1px solid #ddd;
    color: ${(props) => props.type === "filled" && "white"};
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`;

const Info = styled.div`
    flex: 3;
    margin: 0px 100px;
    ${mobile({margin:"0px 0px"})}
`;
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;
const Image = styled.img`
    width: 200px;
`;
const ProductName = styled.span``;
const ProductSize = styled.span``;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #${(props) => props.color}
`;
const Detail = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
`;
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const PriceAmount = styled.div`
    font-size: 30px;
    font-weight: 300;
    ${mobile({marginBottom:"20px"})}
    
`;

const Hr = styled.hr`
        background-color: #ddd;
        border: none;
        height: 1px;
        width: 90%;
`;


const Wishlist = () => {
    return (
        <Container>
                <Navbar/>
                <Announcements/>
                    <Wrapper>
                        <Title>Your Wishlist</Title>
                        <Top>

                            <TopButton ><Link to="Shop" style={{textDecoration:"none", color:"black"}}>Continue Shopping</Link></TopButton>
                            <TopTexts>
                                <TopText>Your current wishlist...</TopText>
                            </TopTexts>
                            <TopButton type="filled"><Link to="ShoppingCart" style={{textDecoration:"none", color:"white"}}>Shopping Cart</Link></TopButton>
                        </Top>
                        <Bottom>
                            <Info>
                                <Product>
                                    <ProductDetail>
                                        <Image src="Slider Images/samsung.png"/>
                                        <Detail>
                                            <ProductName> <b>Product: </b> Samsung S10</ProductName>
                                            <ProductSize> <b>Size: </b> 34</ProductSize>
                                            <ProductColor color="000" />
                                        </Detail>
                                    </ProductDetail>
                                    <PriceDetail>
                                        
                                        <PriceAmount>R 999</PriceAmount>
                                    </PriceDetail>
                                    
                                </Product>
                                <Hr/>
                                <Product>
                                    <ProductDetail>
                                        <Image src="Slider Images/gps.jpg"/>
                                        <Detail>
                                            <ProductName> <b>Product: </b> Modern GPS</ProductName>
                                            <ProductSize> <b>Size: </b> 34</ProductSize>
                                            <ProductColor color="000" />
                                        </Detail>
                                    </ProductDetail>
                                    <PriceDetail>
                                      
                                        <PriceAmount>R 999</PriceAmount>
                                    </PriceDetail>
                                </Product>
                                <Hr/>
                                <Product>
                                    <ProductDetail>
                                        <Image src="Slider Images/charger.jpg"/>
                                        <Detail>
                                            <ProductName> <b>Product: </b> Super Charger</ProductName>
                                            <ProductSize> <b>Size: </b> 34</ProductSize>
                                            <ProductColor color="000" />
                                        </Detail>
                                    </ProductDetail>
                                    <PriceDetail>
                                       
                                        <PriceAmount>R 999</PriceAmount>
                                    </PriceDetail>
                                </Product>
                                <Hr/>
                               
                                
                            </Info>
                          
                        </Bottom>
                    </Wrapper>
                <Footer/>
        </Container>
    )
}

export default Wishlist
