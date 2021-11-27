import React from 'react'
import styled from 'styled-components'
import { mobile } from '../../../components/Responsive';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    ${mobile({width:"95%", margin:"0"})}
`;
const Summary = styled.div`
    flex: 1;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px; 
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    text-align: center;
`;
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex; 
    cursor: pointer;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "bold"};
    font-size: ${(props) => props.type === "total" && "25px"};
    
    &:hover{
        background: black;
        color: white;
        padding: 2px;
    }
`;
const SummaryText = styled.span`
    flex: 4;
    text-align:start;
    ${mobile({flex:"5", fontSize:"16px"})}
`;
const SummaryQuantity = styled.span`
    flex: 3;
    ${mobile({flex:"1"})}
`;
const SummaryPrice = styled.span`
    flex:1;
    text-align:end;
    ${mobile({flex:"3"})}
`;
const PaymentOutcome = styled.div`
    background: ${(props) => props.outcome === "success" && "limegreen"};
    background: ${(props) => props.outcome === "failed" && "red"};
    width:10px;
    height: 20px;
    margin-left: 5px;
`;
const SummaryKey = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width:50%;
    ${mobile({width:"80%"})}
`;
const SummarySubTitle= styled.span`
    text-align: center;
    display: flex;
    flex:1;
    ${mobile({fontSize:"14px", marginLeft:"10px"})}
`;


const PurchaseHistory = () => {
    return (
        <Container>
         
             <Summary>
                <SummaryTitle>Items Bought</SummaryTitle>
                <SummaryKey>
                  <SummarySubTitle>Payment Success: <PaymentOutcome outcome="success"/></SummarySubTitle>
                  <SummarySubTitle>Payment Failed: <PaymentOutcome outcome="failed"/></SummarySubTitle>
                </SummaryKey>
                <SummaryItem onClick={()=> alert("display full info using modal")}>
                    <SummaryText>1. Samsung S10 </SummaryText>
                    <SummaryQuantity>x2</SummaryQuantity>
                    <SummaryPrice>R 1999</SummaryPrice>
                    <PaymentOutcome outcome="success"/>
                </SummaryItem>
                <SummaryItem onClick={()=> alert("display full info using modal")}>
                    <SummaryText>2. Kiddies GPS Watch </SummaryText>
                    <SummaryQuantity>x1</SummaryQuantity>
                    <SummaryPrice>R 99</SummaryPrice>
                    <PaymentOutcome outcome="failed"/>
                </SummaryItem>
                <SummaryItem onClick={()=> alert("display full info using modal")}>
                    <SummaryText>3. Sony FHD Smart TV </SummaryText>
                    <SummaryQuantity>x1</SummaryQuantity>
                    <SummaryPrice>R 20999</SummaryPrice>
                    <PaymentOutcome outcome="success"/>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryText >Total </SummaryText>
                    <SummaryPrice>R 89,999</SummaryPrice>
                </SummaryItem>
            </Summary>
         
        </Container>
    )
}

export default PurchaseHistory
