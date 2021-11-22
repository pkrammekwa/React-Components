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
    text-decoration: underline;
`;

const TopButton = styled.button`
    padding: 10px 40px;
    cursor: pointer;
    
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
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin:"5px 15px"})}
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
const Summary = styled.div`
    flex: 1;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px; 
    height: 50vh;
`;

const SummaryTitle = styled.h1``;
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex; 
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "bold"};
    font-size: ${(props) => props.type === "total" && "25px"};
`;
const SummaryText = styled.span``;
const SummaryPrice = styled.span``;
const Button = styled.button`
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 100%;
    cursor: pointer;
    background-color: white;
    font-size: 17px;

    &:hover{
        background-color: black;
        color: white;
        border-radius: 5px;

    }
`;

const ShoppingCart = () => {
    return (
        <Container>
                <Navbar/>
                <Announcements/>
                    <Wrapper>
                        <Title>Your Shopping Cart</Title>
                        <Top>

                            <TopButton ><Link to="Shop" style={{textDecoration:"none", color:"black"}}>Continue Shopping</Link></TopButton>
                            <TopTexts>
                                <TopText><Link to="MyWishlist" style={{textDecoration:"none", color:"black"}}>Wishlist (0)</Link></TopText>
                            </TopTexts>
                            <TopButton type="filled"><Link to="Checkout" style={{textDecoration:"none", color:"white"}}>Checkout</Link></TopButton>
                        </Top>
                        <Bottom>
                            <Info>
                                <Product>
                                    <ProductDetail>
                                        <Image src="Slider Images/solar.jpg"/>
                                        <Detail>
                                            <ProductName> <b>Product: </b> Super Solar</ProductName>
                                            <ProductSize> <b>Size: </b> 34</ProductSize>
                                            <ProductColor color="000" />
                                        </Detail>
                                    </ProductDetail>
                                    <PriceDetail>
                                        <ProductAmountContainer>
                                            <Add/>
                                            <ProductAmount>1</ProductAmount>
                                            <Remove/>
                                        </ProductAmountContainer>
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
                                        <ProductAmountContainer>
                                            <Add/>
                                            <ProductAmount>1</ProductAmount>
                                            <Remove/>
                                        </ProductAmountContainer>
                                        <PriceAmount>R 999</PriceAmount>
                                    </PriceDetail>
                                </Product>
                                <Hr/>
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
                                        <ProductAmountContainer>
                                            <Add/>
                                            <ProductAmount>1</ProductAmount>
                                            <Remove/>
                                        </ProductAmountContainer>
                                        <PriceAmount>R 999</PriceAmount>
                                    </PriceDetail>
                                </Product>
                                <Hr/>
                               
                                
                            </Info>
                            <Summary>
                                <SummaryTitle>Order Summary</SummaryTitle>
                                <SummaryItem>
                                    <SummaryText>Subtotal </SummaryText>
                                    <SummaryPrice>R 999</SummaryPrice>
                                </SummaryItem>
                                <SummaryItem>
                                    <SummaryText>Estimated Shipping </SummaryText>
                                    <SummaryPrice>R 99</SummaryPrice>
                                </SummaryItem>
                                <SummaryItem>
                                    <SummaryText>Discount </SummaryText>
                                    <SummaryPrice>R 0</SummaryPrice>
                                </SummaryItem>
                                <SummaryItem type="total">
                                    <SummaryText >Total </SummaryText>
                                    <SummaryPrice>R 89,999</SummaryPrice>
                                </SummaryItem>
                                <Button><Link to="Checkout" style={{textDecoration:"none", color:"black"}}>Checkout</Link></Button>
                            </Summary>
                        </Bottom>
                    </Wrapper>
                <Footer/>
        </Container>
    )
}

export default ShoppingCart
