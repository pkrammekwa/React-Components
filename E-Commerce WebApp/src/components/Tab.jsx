import React,{useState} from 'react'
import styled from 'styled-components'
import { mobile } from './Responsive';
import {More} from './TabItems/More';
import {Reviews} from './TabItems/Reviews';
import {WriteReview} from './TabItems/WriteReview';

/*
=================================================================================
                            Styled CSS
=================================================================================
*/
const Container = styled.div`
    width: 80%;
    height: auto;
    min-height: 400px;
    background-color: white;
    margin: 3.5rem auto 1.5rem;
    padding: 2rem 1rem;
    color: black;
    border-radius: 2rem;
    ${mobile({margin:"-3rem auto 0rem"})}
`;
const Tabs = styled.ul`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto 2rem;
    border-right: ${(props) => props.border};
    ${mobile({width:"90%"})}
`;
const TabItem = styled.li`
    width: 100%;
    border-right: ${(props) => props.border === "t1" && "1px solid #ddd"};
    border-left: ${(props) => props.border === "t3" && "1px solid #ddd"};
    padding: 0.38rem;
    list-style: none;
    text-align: center;
    cursor: pointer;
    transition: all 0.7s;
    background-color: ${(props) =>props.tabactive === "active" && "black"};
    color: ${(props) => props.tabactive === "active" && "white"};
    &:nth-child(3){
    }
    &:hover{
        background: black;
        color: white;
    }  
`;
const Outline = styled.div``;
/*
=================================================================================
                            Your Code Goes here
=================================================================================
*/



export const Tab = () => {
    const [ActiveTab, setActiveTab] = useState("tab1");

    const handleTab = (tab) => {setActiveTab(tab);}

    return (
        <Container>
            <Tabs>
                <TabItem border={"t1"} onClick={() =>handleTab("tab1")} tabactive={ActiveTab === "tab1" ? "active" : ""}> More </TabItem>
                <TabItem onClick={() =>handleTab("tab2")} tabactive={ActiveTab === "tab2" ? "active" : ""}>Reviews</TabItem>
                <TabItem border={"t3"} onClick={() =>handleTab("tab3")} tabactive={ActiveTab === "tab3" ? "active" : ""}>Write Review</TabItem>
            </Tabs>
          
            <Outline>
                {ActiveTab === "tab1" ? <More/> : (
                    ActiveTab === "tab2" ? <Reviews/> : <WriteReview/>
                )} 
            </Outline>
        </Container>
    )
}
