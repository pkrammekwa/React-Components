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
const whiteSpace = () =>{
    //get passwords
    let name = document.getElementById("Name");
    let surname = document.getElementById("Surname");
    let error = document.getElementById("ErrorMsg");
    const button = document.getElementById("btnSubmit");

    if(name.value === "" || surname.value === "")
    {
        error.innerHTML = "Warning: Name or Surname cannot be empty";
        button.style.background = "gray";
        button.disabled = true;
        return false;
    }else
    {
        error.innerHTML = "";
        button.style.background = "black";
        button.disabled = false;
        return true;
    }
}

const UpdateProfile = () => {
    return (
        <Container>
            <Wrapper>
                <Form>
                <Errormsg id="ErrorMsg"></Errormsg>
                    <Input id="Name" onChange={()=>whiteSpace()} type="text" placeholder="Name" required/>
                    <Input id="Surname" onChange={()=>whiteSpace()} type="text" placeholder="Surname" required/>
                    <Input type="email" placeholder="Email" required/>
                <Button id="btnSubmit" type="submit">Update</Button>
                </Form>

            </Wrapper>
        </Container>
    )
}

export default UpdateProfile
