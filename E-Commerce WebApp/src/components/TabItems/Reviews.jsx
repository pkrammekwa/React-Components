import React from 'react'
import styled from 'styled-components';
import {StarBorderTwoTone, Star} from '@material-ui/icons';
import { mobile } from '../Responsive';

const Container = styled.div`
    margin-top: -10px;
    width: 60%;
    margin-left: 20%;
    ${mobile({width:"100%", marginLeft:"0%"})}
`;
const Title = styled.h1`
    text-align: center;
    font-style: italic;
`;
const BodyContainer = styled.div``;
const BodyTop = styled.div`
    display: flex;
    justify-content: space-between;

`;
const Name = styled.p`
    font-weight: bold;
    max-width: 300px;
`;
const Date = styled.p`
    font-style: italic;
    color: darkgray;
    font-size: 14px;
    margin-top: -10px;
`;
const Rating = styled.div`
    color: orange;
    padding: 15px 5px;
    text-align: center;
`;
const Comment = styled.p`
    margin-top: -13px;
`;
const Hr = styled.hr`
    background: none;
    border: 1px solid #ddd;
`;

export const Reviews = () => {
    return (
        <Container>
            <Title>Reviews</Title>
            <BodyContainer>
                <BodyTop>
                    <Name>username xyzzzzz</Name>
                    <Rating>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <StarBorderTwoTone/>
                    </Rating>
                    
                </BodyTop>
                <Comment>asd asd asd asd as das d asd asd asd asd a sf wafewg gdsfdf sdf sf sf safdas fds afds ad sf asf ds f dsaf ds fasf</Comment>
                <Date>12:00pm 12/11/2021</Date>
                <Hr/>
            </BodyContainer>
            <BodyContainer>
                <BodyTop>
                    <Name>username</Name>
                    <Rating>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <StarBorderTwoTone/>
                    </Rating>
                   
                </BodyTop>
                <Comment>asd asd asd asd as das d asd asd asd asd a sf wafewg gdsfdf sdf sf sf safdas fds afds ad sf asf ds f dsaf ds fasf</Comment>
                <Date>12:00pm 12/11/2021</Date>
                <Hr/>
            </BodyContainer>
            <BodyContainer>
                <BodyTop>
                    <Name>username x</Name>
                    <Rating>
                        <Star/>
                        <Star/>
                        <Star/>
                        <StarBorderTwoTone/>
                        <StarBorderTwoTone/>
                    </Rating>
                </BodyTop>
                <Comment>asd asd asd asd as das sdfdsfds f dsf dsf dsfdsf dsfds fds fds ds fdsd asd asd asd asd a sf wafewg gdsfdf sdf sf sf safdas fds afds ad sf asf ds f dsaf ds fasf
                    dasda dsa d asd sa saas das d a  r tryee tc rrecter  
                </Comment>
                <Date>12:00pm 12/11/2021</Date>
                <Hr/>
            </BodyContainer>
        </Container>
    )
}
