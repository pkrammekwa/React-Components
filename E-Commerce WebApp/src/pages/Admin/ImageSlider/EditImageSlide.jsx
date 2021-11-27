import React from 'react'
import styled from 'styled-components'
import Navbar from '../../../components/navbar';
import Footer from '../../../components/Footer';
import { mobile } from '../../../components/Responsive';


/*
=================================================================================
                            Styled CSS
=================================================================================
*/
const Container = styled.div``;
const Wrapper = styled.div`
    margin: 60px;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px; 
    height: 50vh;
    width: 40%;
    margin-left: 25%;
    margin-bottom: 60px;
    ${mobile({width:"85%", marginLeft:"10px"})}
`;
const Button = styled.button`
    background: black;
    border: 2px solid black;
    padding: 5px 50px;
    cursor: pointer;
    color: white;
    font-weight: bold;
    margin: 30px 10px 0px 0px;
    border-radius: 5px;
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
const Title = styled.h2`
    text-align: center;
`;

/*
=================================================================================
                            Your Code Goes Here
=================================================================================
*/
const whiteSpace = () =>{
    //get passwords
    let name = document.getElementById("Title");
    let surname = document.getElementById("Description");
    let error = document.getElementById("ErrorMsg");
    const button = document.getElementById("btnSubmit");

    if(name.value === "" || surname.value === "")
    {
        error.innerHTML = "Warning: Title or Description cannot be empty";
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

const EditImageSlide = () => {
    return (
        <Container>
            <Navbar/>
            <Wrapper>
               <Title>Update Slide</Title>
                <Form>
                <Errormsg id="ErrorMsg"></Errormsg>
                     <Input id="Title" maxLength="20" onChange={()=>whiteSpace()} type="text" placeholder="Title" required/>
                    <Input id="Description" maxLength="30" onChange={()=>whiteSpace()} type="text" placeholder="Description" required/>
                    <Input type="file" placeholder="Upload image" required/>
                <Button id="btnSubmit" type="submit">Update</Button>
                </Form>

            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default EditImageSlide
