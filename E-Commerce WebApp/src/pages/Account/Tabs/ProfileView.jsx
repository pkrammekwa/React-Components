import React from 'react'
import styled from 'styled-components';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { Table, TableBody, TableHead, TableRow } from '@material-ui/core';
import { mobile } from '../../../components/Responsive';
/*
=================================================================================
                            Styled CSS
=================================================================================
*/
const Container = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: space-between;
    ${mobile({flexDirection:"column"})};
`;
//Short perfonal info
const ShortPI = styled.div`
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
const BasicInfo = styled.div`
   text-align: center;
   margin: 10px;
`;
const BasicInfoIcon = styled.svg`
    font-size: 100px;
`;
const BasicInfoText = styled.p`
    font-size: 16px ;   
`;
//full personal info
const StatsInfo = styled.div`
    flex: 1;
`;
const StatsWrapper = styled.div`
    padding: 5px;
`;
const StatsInfoHeader = styled.h3`
    text-align: center;
`;
const StatsInfoTextGrey = styled.p`
    background: lightgrey;
    padding: 10px;
    display: flex;
    align-items: space-between;
`;
const StatsInfoTextWhite = styled.p`
    padding: 10px;
    margin-top: -15px;
    margin-bottom: -15px;
    display: flex;
    align-items: space-between;
`;
const Text = styled.div`
    flex: 5;
    text-align:start;
`;
const Number = styled.div`
    flex: 1;
    text-align: end;
`;


const ProfileView = () => {
    return (
        <Container>
            <ShortPI>
                <BasicInfo>
                    <BasicInfoIcon> <PersonPinIcon/> </BasicInfoIcon>
                    <BasicInfoText>Paseka Rammekwa</BasicInfoText>
                    <BasicInfoText>pkrammekwa@gmail.com</BasicInfoText>
                    <BasicInfoText>Joined: 12 Dec 1999</BasicInfoText>
                </BasicInfo>
            </ShortPI>
            <StatsInfo>
                <StatsWrapper>
                    <StatsInfoHeader>Stats</StatsInfoHeader>
                    <StatsInfoTextGrey>
                        <Text>Logins: </Text> 
                        <Number>10</Number>
                    </StatsInfoTextGrey>
                    <StatsInfoTextWhite>
                        <Text>Number of Purchases:</Text>
                         <Number>10</Number>
                    </StatsInfoTextWhite>
                    <StatsInfoTextGrey>
                        <Text>Number of items ordered:</Text>
                        <Number>10</Number>
                    </StatsInfoTextGrey>
                    <StatsInfoTextWhite>
                        <Text>Number of items received:</Text>
                        <Number>10</Number>
                    </StatsInfoTextWhite>
                </StatsWrapper>
            </StatsInfo>
        </Container>
    )
}

export default ProfileView
