import React from 'react'
import styled from 'styled-components';
import { mobile } from '../Responsive';
import {StarBorderTwoTone, Star} from '@material-ui/icons';

const Container = styled.div`
    margin-top: -10px;
    ${mobile({width:"100%", marginLeft:"0%"})}
`;
const Title = styled.h1`
    text-align: center;
    font-style: italic;
`;
const Body = styled.div``;
const Rating = styled.div`
    const Input = styled.textarea
    width: 60%;
    margin-left: 20%;
    margin-bottom: 10px;
    color: orange;
    cursor: pointer;
    ${mobile({width:"100%", marginLeft:"0%"})}
`;
const Input = styled.textarea`
    width: 60%;
    margin-left: 20%;
    padding: 10px;
    ${mobile({width:"100%", marginLeft:"0%"})}
    font: ariel;
`;
const Button = styled.button`
    margin-top: 15px;
    width: 20%;
    const Input = styled.textarea;
    margin-left: 20%;
    background: black;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    padding: 10px;
    font-weight: bold;
    font-style: italic;
    ${mobile({width:"100%", marginLeft:"0%"})}
`;

export const WriteReview = () => {
    return (
        <Container>
            <Title>Write A Review</Title>
            <Body>
                <Rating>
                    <StarBorderTwoTone/>
                    <StarBorderTwoTone/>
                    <StarBorderTwoTone/>
                    <StarBorderTwoTone/>
                    <StarBorderTwoTone/>
                </Rating>
                <Input/>
                <Button>Post</Button>
            </Body>
        </Container>
    )
}
