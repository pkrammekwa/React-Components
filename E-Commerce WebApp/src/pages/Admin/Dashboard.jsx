import React from 'react'
import styled from 'styled-components'
import Footer from '../../components/Footer';
import Navbar from '../../components/navbar';
import { mobile } from '../../components/Responsive';

const Container = styled.div``;
const BasicInfo = styled.div`

    background: black;
    color: white;
    padding: 40px;
    ${mobile({padding:"10px"})}
`;

const BasicInfoLinks = styled.a`
    text-decoration: none;
    padding: 10px;
    margin-left: 20px;
    cursor: pointer;
    font-weight: bold;

    &:hover{
        text-decoration: underline;
        color: cyan;
    }
`;

const Wrapper = styled.div`
    margin: 20px 0px 0px 100px;
    ${mobile({margin:"30px 0px 0px 12px"})};
`;

const UsersInfo = styled.div`
    width: 90%;
    height: 150px;
    border-radius: 5px;
    border: 1px solid #ddd;
    padding: 10px;
`;
const Title = styled.h3`
    padding: 10px;
    width: 90%;
    margin: -5px;
    font-style:italic;
`;

const Hr = styled.hr`
    padding: 0;
    margin: -5px;
    background: #ddd;
    border: none;
    width: 97%;
    margin-left: 15px;
    height: 1px;
`;

const UsersContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: space-between;
    text-align: center;
    margin: -15px;
`;
const NewUsers = styled.h1`
    flex: 1;
`;
const CurrentUsers = styled.h1`
    flex: 1;
`;
const TotalUsers = styled.h1`
    flex: 1;
`;
const SubTitle =styled.p`
    font-size: 13px;
    font-weight: 400;
`;

const Revenue = styled.div`
    flex: 1;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px; 
    height: auto;
    width: 30%;
    margin: 20px;
    margin-left: 0px;
    ${mobile({width:"90%"})}
`;

const RevenueItem = styled.div`
    margin: 30px 0px;
    display: flex; 
    cursor: pointer;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "bold"};
    font-size: ${(props) => props.type === "total" && "25px"};
  
`;
const RevenueText = styled.span`
    flex: 4;
    ${mobile({flex:"5"})}
`;
const RevenueQuantity = styled.span`
    flex: 3;
    ${mobile({flex:"1"})}
`;
const RevenuePrice = styled.span`
    flex:1;
    text-align:end;
    ${mobile({flex:"4"})}
`;
const RevenueKey = styled.div`
    display:flex;
    justify-content: center;
    align-items: space-between;
    
`;
const SubWrapper= styled.span`
    display: flex;
    align-items: space-between;
    max-width: 94%;
    ${mobile({flexDirection:"column"})};
`;

const Dashboard = () => {
    return (
        <Container>
            <Navbar/>
            	<BasicInfo>
                    <BasicInfoLinks>Products</BasicInfoLinks>
                    <BasicInfoLinks>Slider Items</BasicInfoLinks>
                    <BasicInfoLinks>Reviews</BasicInfoLinks>
                </BasicInfo>
                <Wrapper>
                    <UsersInfo>
                        <Title>Users' Stats</Title>
                        <Hr/>
                        <UsersContainer>
                            <NewUsers><SubTitle>New Users: </SubTitle> 12</NewUsers>
                            <CurrentUsers><SubTitle>Current Users: </SubTitle>20</CurrentUsers>
                            <TotalUsers><SubTitle>Total Users: </SubTitle>32</TotalUsers>
                        </UsersContainer>
                    </UsersInfo>
                    <SubWrapper>
                        <Revenue>
                            <Title>Sales</Title>
                            <Hr/>
                            <RevenueKey>
                            </RevenueKey>
                            <RevenueItem>
                                <RevenueText>Last Month: </RevenueText>
                                <RevenueQuantity></RevenueQuantity>
                                <RevenuePrice>R 1999</RevenuePrice>
                            </RevenueItem>
                            <RevenueItem>
                                <RevenueText>This Month: </RevenueText>
                                <RevenueQuantity></RevenueQuantity>
                                <RevenuePrice>R 999</RevenuePrice>
                            </RevenueItem>
                            <RevenueItem type="total">
                                <RevenueText >Total </RevenueText>
                                <RevenuePrice>R 2,999</RevenuePrice>
                            </RevenueItem>
                        </Revenue>
                        <Revenue>
                            <Title>Visitor Charts</Title>
                            <Hr/>
                            <RevenueKey>
                            </RevenueKey>
                            <RevenueItem>
                                <RevenueText>Last Month: </RevenueText>
                                <RevenueQuantity></RevenueQuantity>
                                <RevenuePrice>12,981</RevenuePrice>
                            </RevenueItem>
                            <RevenueItem>
                                <RevenueText>This Month: </RevenueText>
                                <RevenueQuantity></RevenueQuantity>
                                <RevenuePrice>999</RevenuePrice>
                            </RevenueItem>
                            <RevenueItem type="total">
                                <RevenueText >Total </RevenueText>
                                <RevenuePrice>14,999</RevenuePrice>
                            </RevenueItem>
                        </Revenue>
                  </SubWrapper>
                </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Dashboard
