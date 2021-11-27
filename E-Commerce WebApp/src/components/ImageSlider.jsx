import React,{useState, useEffect, useRef} from 'react'
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
    ${mobile({flexDirection:"column"})};
`;
const Image = styled.img`
    height: 80%;
    ${mobile({height:"50%", width:"70%", marginLeft:"40px", marginTop:"10px"})}
`; 

const InfoContainer = styled.div`
    padding: 50px;
    ${mobile({ padding:"5px"})}

`;
const Title = styled.h2`
    font-size: 50px;
    ${mobile({ fontSize:"25px", textAlign:"center"})}

`;
const Description = styled.p`
    margin: 50px 0px;
    font-size: 25px;
    font-style: italic;
    font-weight: 100;
    ${mobile({ margin:"0px 0px", textAlign:"center"})}
`;
const InfoButton = styled.button`
    background: transparent;
    border: 1px solid #ddd;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    ${mobile({ display:"none"})}
`;

const ImageSlider = () => {
const [Index, setIndex]  = useState(0);
const timeoutRef = useRef(null);

function resetTimeout() {
        if (timeoutRef.current) {
                  clearTimeout(timeoutRef.current);
            }  
        }

useEffect(() => {
    resetTimeout();
        timeoutRef.current = setTimeout(()=>setIndex(
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
                    <SlideDots onClick={() => setIndex(idx)} active={`${Index === idx ? "blue" : "gray"}`} key={idx}/>
                ))}
            </SlideDotsContainer>
        </SlideShow>
    )
}

export default ImageSlider
