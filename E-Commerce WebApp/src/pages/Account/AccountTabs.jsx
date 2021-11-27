import React,{useState} from 'react'
import styled from 'styled-components'
import { mobile } from '../../components/Responsive';
import ProfileView from './Tabs/ProfileView';
import UpdateProfile from './Tabs/UpdateProfile';
import PurchaseHistory from './Tabs/PurchaseHistory';
import ResetPassword from './Tabs/ResetPassword';

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
    margin: 0.5rem auto 1.5rem;
    padding: 1rem 1rem;
    color: black;
    border-radius: 2rem;
    ${mobile({margin:"-1rem", marginTop:"20px", width: "100%", padding:"0rem"})}
`;
const Tabs = styled.ul`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto 1rem;
    border-right: ${(props) => props.border};
    ${mobile({width:"90%"})}
`;
const TabItem = styled.li`
    width: 100%;
    border-right: ${(props) => props.border === "t1"  && "1px solid #ddd"};
    border-right: ${(props) => props.border === "t3"  && "1px solid #ddd"};
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
    ${mobile({fontSize:"11px"})}
`;
const Outline = styled.div`
    margin-left: 15px;
    width: 100%;
`;
/*
=================================================================================
                            Your Code Goes here
=================================================================================
*/



export const AccountTabs = () => {
    const [ActiveTab, setActiveTab] = useState("tab1");

    const handleTab = (tab) => {setActiveTab(tab);}

    return (
        <Container>
            <Tabs>
                <TabItem border={"t1"} onClick={() =>handleTab("tab1")} tabactive={ActiveTab === "tab1" ? "active" : ""}> Profile </TabItem>
                <TabItem onClick={() =>handleTab("tab2")} tabactive={ActiveTab === "tab2" ? "active" : ""}>Purchase History</TabItem>
                <TabItem border={"t3"} onClick={() =>handleTab("tab3")} tabactive={ActiveTab === "tab3" ? "active" : ""}>Update Profile</TabItem>
                <TabItem border={"t4"} onClick={() =>handleTab("tab4")} tabactive={ActiveTab === "tab4" ? "active" : ""}>Reset Password</TabItem>
            </Tabs>
          
            <Outline>
                <center>
                {ActiveTab === "tab1" ? <ProfileView/> : (
                    ActiveTab === "tab2" ? <PurchaseHistory/> : (
                        ActiveTab === "tab3" ? <UpdateProfile/> : <ResetPassword/>
                    )
                )} 
                </center>
            </Outline>
        </Container>
    )
}
