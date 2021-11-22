import { ArrowLeftOutlined, ArrowRightOutlined  } from '@material-ui/icons';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {SilderItems} from '../data';
import { mobile } from './Responsive';

const Container = styled.div `
    width:100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

//Wrapper
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`;

const Arrow = styled.div`
    height: 50px;
    width: 50px;
    background-color: #ddd;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

//Slide Contents
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg}
`;
const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
`;
const Image = styled.img`
    height: 80%;
    ${mobile({height:"60%"})}
`; 

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    ${mobile({ display: "none"})}

`;
const Title = styled.h2`
    font-size: 50px;
`;
const Description = styled.p`
    margin: 50px 0px;
    font-size: 25px;
    font-style: italic;
    font-weight: 100;
`;
const InfoButton = styled.button`
    background: transparent;
    border: 1px solid #ddd;
    border-radius: 50%;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
`;


const Slider = () => {

    const [slideIndex, setSlideIndex] = useState();

    const handleSlide = (direction) => {

        if(direction === "left")
        {
            /*
                if not image 1 then minus the number out of 2
            */
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        }
        else
        {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
}


    return (
        <Container>
            <Arrow direction="left" onClick={() => handleSlide("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            
            <Wrapper slideIndex={slideIndex}>         
                {SilderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                    <ImageContainer>
                        <Image src={item.img} />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                        <InfoButton><Link to="Shop" style={{textDecoration:"none", color:"black"}}>Shop Now</Link></InfoButton>
                    </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            

            <Arrow direction="right" onClick={() => handleSlide("right")}>
                <ArrowRightOutlined/>
            </Arrow>

        </Container>
    )
}

export default Slider
