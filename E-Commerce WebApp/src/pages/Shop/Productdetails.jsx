import React from 'react'
import styled from 'styled-components';
import Announcements from '../../components/Announcements';
import Footer from '../../components/Footer';
import Navbar from '../../components/navbar';
import {Add, Remove} from '@material-ui/icons';
import { mobile } from '../../components/Responsive';
import { Tab } from '../../components/Tab';


/**
 * ======================================================================================= 
 *                              Styled CSS
 * ======================================================================================= 
 */
const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({flexDirection:"column", padding: "10px", margin: "10px"})};
    margin-bottom: -100px;
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding: "0px 0px"})};
`;
const Image = styled.img`
    width: 100%;
    height: 60vh;
    object-fit: cover;
`;
const Title = styled.h1`
    font-style: italic;
    font-weight: 600;
    margin: -10px 0px;
    ${mobile({textAlign: "center"})};
`;
const Desc = styled.p`
    font-weight: 200;
    margin: 20px 0px;
`;
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;
//Filter
const FilterContainer = styled.div``;
const Filter = styled.div``;
const FilterTitle = styled.div`
    font-weight: 200;
    font-size: 20px;
    font-style: italic;
`;
const FilterOption = styled.option``;
const FilterSelect = styled.select`
    background: none;
    border: 1px solid #ddd;
    padding: 6px;
    width: 110px;
`;
const AddToCartContainer = styled.div`
    ${mobile({margin:"30px 0px", display:"flex", justifyContent:"space-between"})}
`;
const AddToCart = styled.div`
    display: flex;
`;
const AddToCartTitle = styled.h3`
    font-weight: 100;
    font-size: 20px;
    font-style: italic;
    margin: 10px 0px;
`;
const AddToCartCounter = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 15px;
`;
const AddToCartButton = styled.button`
    background: black;
    border: 1px solid black;
    padding: 5px 30px;
    cursor: pointer;
    margin: 10px 0px;
    width: 110px;
    font-weight: bold;
    font-style: italic;
    color: white;
`;
/**
 * ======================================================================================= 
 *                              Your Code Goes Here
 * ======================================================================================= 
 */





const Productdetails = () => {
    return (
        <Container>
            <Navbar/>
            <Announcements/>

            <Wrapper>
                <ImgContainer>
                    <Image src="Slider Images/komamura.png"/>
                </ImgContainer>
                <InfoContainer>
                        <Title>Kommamura</Title>
                        <Desc> 
                            
                        This practical assignment must be uploaded to eve.uj.ac.za before 2019-10-31 17h00. Late
or incorrect submissions will not be accepted, and will therefore not be marked. You are
not allowed to collaborate with any other student.
Good coding practices include a proper coding convention and a good use of commenting. Marks
will be deducted if these are not present. See the reminder page for more details.

                        </Desc>
                        <Price>R 6999</Price>
                        <br/>
                      
                        <FilterContainer>
                            <Filter>
                                <FilterTitle>Colour: </FilterTitle>
                            <FilterSelect>
                                <FilterOption disabled selected>choose</FilterOption>
                                <FilterOption>Red</FilterOption>
                                <FilterOption>Gray</FilterOption>
                                <FilterOption>Black</FilterOption>
                                <FilterOption>Blue</FilterOption>
                            </FilterSelect>
                            </Filter>
                        </FilterContainer>
                        <AddToCartContainer>
                            <AddToCartTitle>Add to cart</AddToCartTitle>
                                <AddToCart>
                                    <Add/>
                                    <AddToCartCounter> 1 </AddToCartCounter>
                                    <Remove/>
                                </AddToCart>
                            <AddToCartButton>Add </AddToCartButton>
                        </AddToCartContainer>
                </InfoContainer>
            </Wrapper>

            <Tab/>
            <Footer/>
        </Container>
    )
}

export default Productdetails
