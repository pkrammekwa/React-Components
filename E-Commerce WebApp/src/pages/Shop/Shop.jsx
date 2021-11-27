import React from 'react'
import Announcements from '../../components/Announcements'
import Navbar from '../../components/navbar';
import styled from 'styled-components';
import Products from '../../components/Products';
import Footer from '../../components/Footer';
import { mobile } from '../../components/Responsive';

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
    ${mobile({flexDirection:"column", margin: "20px"})};
`;
const Title = styled.h2`
    text-align: center;
`;
const Filter = styled.div`
    margin: 20px;
    
    ${mobile({flexDirection:"column", margin:"0", width:"30px"})};
`;
const FilterText = styled.span`
    font-weight: 600;
    font-size: 15px;
    font-style: italic;
`;
//Filter
const Select = styled.select`
    padding: 10px;
    margin-left: 10px;
    margin: 5px;
    background: none;
    border: 1px solid #ddd;
    border-radius: 5px;
`;
const Option = styled.option`
    background-color: white;
    
    ${mobile({width: "330px"})};
`;

const Search = styled.div`
    ${mobile({width:"330px"})}

`;

const SearchInput = styled.input`
padding: 10px;
margin-left: 10px;
margin: 5px;
background: none;
border: 1px solid #ddd;
border-radius: 5px;
margin-left: 20px;
width: 300px;
${mobile({flexDirection:"column", margin:"0px 5px", width: "355px"})};
`;

const Pagination = styled.div`
    font-size: 20px;
    font-weight: 100;
`;

const Shop = () => {
    return (
        <div>
            <Navbar/>
            <Announcements/>
                <Title>Shop</Title>
                <center>
                <FilterContainer>
                    
                    <Filter>
                        <FilterText>Filter: </FilterText>
                        <Select>
                            <Option disabled selected> Price</Option>
                            <Option > R0 - R99</Option>
                            <Option > R99 - R999</Option>
                            <Option > R999 - R4999</Option>
                            <Option > R4999 - R9999</Option>
                            <Option > R9999+</Option>
                        </Select>
                        <Select>
                            <Option disabled selected> Category</Option>
                            <Option > Weaklings</Option>
                            <Option > Soul Reapers</Option>
                            <Option > Arrancars</Option>
                            <Option > Captains</Option>
                            <Option > Espadas</Option>
                        </Select>
                    </Filter>
                    
                    <Filter>
                        <FilterText>Search</FilterText>
                            
                                <SearchInput/>
                                                     
                    </Filter>
                    
                    <Filter><FilterText>Sort:
                        </FilterText>
                        <Select>
                            <Option disabled selected> Newest</Option>
                            <Option > Price (Lowest)</Option>
                            <Option > Price (Highest)</Option>
                            
                        </Select>
                    </Filter>
                  
                </FilterContainer>
               </center>
                <Products/>

                <center>
                    <Pagination>Page:   1  |  2  |  3  |  4</Pagination>
                </center>

                <Footer/>
        </div>
    )
}

export default Shop
