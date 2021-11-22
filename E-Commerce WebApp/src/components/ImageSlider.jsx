import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {SilderItems} from '../data';
import { mobile } from './Responsive';


const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 4000;

const SlideShow = styled.div`
    margin: 0 auto;
    overflow: hidden;
    max-width: 100%;
    max-height: 100%;
`;
const SlideShowSlide = styled.div`
    white-space:nowrap;
    transition: ease 1000ms;
`;
const Slide = styled.div`
    width: 100vw;
    height: 90vh;
    display: inline-block;
    align-items: center;
    margin-bottom: -90px;
`;
const SlideDotsContainer = styled.div`
    text-align: center;
`;
const SlideDots = styled.div`
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    margin: 15px 7px 0px;
    background-color: ${(props) => props.active};

`;
const ImageContainer = styled.div`
    height: 100%;
    display: flex;
`;
const Image = styled.img`
    height: 80%;
    ${mobile({height:"60%"})}
`; 

const InfoContainer = styled.div`
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

const ImageSlider = () => {
const [Index, setIndex]  = useState(0);

useEffect(() => {
        setTimeout(()=>setIndex(
            (prevIndex) =>
              prevIndex===colors.length - 1 ? 0 : prevIndex + 1 
              ),delay);
                  return () => {};
                },
    [Index]);

    return (
        <SlideShow>
            <SlideShowSlide style={{transform:`translate3d(${-Index * 100}%, 0, 0)`}}>
                {SilderItems.map((item, index) => (
                    <Slide  key={index} >
                        
                        <ImageContainer>
                            <Image src={item.img} />
                            <InfoContainer >
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                            <InfoButton><Link to="Shop" style={{textDecoration:"none", color:"black"}}>Shop Now</Link></InfoButton>
                        </InfoContainer>
                        </ImageContainer>
                         
                    </Slide>
                ))}
            </SlideShowSlide>
            <SlideDotsContainer>
                {colors.map((_, idx) => (
                    <SlideDots active={`${Index === idx ? "blue" : "gray"}`} key={idx}/>
                ))}
            </SlideDotsContainer>
        </SlideShow>
    )
}

export default ImageSlider
