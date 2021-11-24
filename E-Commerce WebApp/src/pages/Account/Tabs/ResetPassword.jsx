import React from 'react'
import styled from 'styled-components'
import { mobile } from '../../../components/Responsive';
import { Link } from 'react-router-dom';
/*
=================================================================================
                            Styled CSS
=================================================================================
*/
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: space-between;
    ${mobile({flexDirection:"column", margin:"0px 0px 0px 30px"})};
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({width: "80%"})}
`;
const Button = styled.button`
    background: black;
    border: 2px solid black;
    padding: 5px 50px;
    cursor: pointer;
    color: white;
    font-weight: bold;
    margin: 20px 10px 0px 0px;
    &:hover{
        background-color: black;
        font-weight: bold;
        color: white;
    }  
`;
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 7px;
    background: none;
    border: 1px solid #ddd;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px 20px;
    
`;
const Errormsg = styled.p`
    color: red;
    width: 100%;
    font-size: 14px;
    margin: 0;
`;

/*
=================================================================================
                            Your Code Goes Here
=================================================================================
*/
const ConfirmPassword = () =>{
    //get passwords
    let password = document.getElementById("NewPassword");
    let confirmpassword = document.getElementById("ConfirmPassword");
    let error = document.getElementById("ErrorPMsg");
    const button = document.getElementById("btnSubmit");

    if(password.value !== confirmpassword.value){
        error.innerHTML ="Warning: Passwords do not match";
        button.style.background = "gray";
        button.disabled = true;
        return false;
    }else
    {
        button.disabled = false;
        button.style.background = "black";
        error.innerHTML = "";
        return true;
    }
}

const ResetPassword = () => {
    return (
        <Container>
            <Wrapper>
                <Form>
                <Errormsg id="ErrorPMsg"></Errormsg>
                    <Input id="OldPassword" type="password" placeholder="Old Password" required/>
                    <Input id="NewPassword" onChange={()=>ConfirmPassword()} type="password" placeholder="New Password" required/>
                    <Input id="ConfirmPassword" onChange={()=>ConfirmPassword()} type="password" placeholder="Confirm New Password" required/>
                <Button id="btnSubmit" type="submit">Reset</Button>
                </Form>

            </Wrapper>
        </Container>
    )
}

export default ResetPassword
