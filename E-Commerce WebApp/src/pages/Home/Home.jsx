import React from 'react'
import Announcements from '../../components/Announcements'
import Navbar from '../../components/navbar'
import Slider from '../../components/Slider'
import Categories from '../../components/Categories'
import Products from '../../components/Products'
import Footer from '../../components/Footer'
import styled from 'styled-components';
import ImageSlider from '../../components/ImageSlider'


const Hr = styled.hr`
        background-color: #ddd;
        border: none;
        height: 1px;
        width: 90%;
`;

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Announcements/>
            <ImageSlider/>
            <Categories/>
            <Hr/>
            <Products/>
            <Footer/>
        </div>
    )
}

export default Home
