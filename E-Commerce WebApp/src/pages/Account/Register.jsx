
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Announcements from '../../components/Announcements';
import { mobile } from '../../components/Responsive';
import {ShoppingCartOutlined} from '@material-ui/icons';

/*
=================================================================================
                            Styled CSS
=================================================================================
*/
const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    border: 1px solid #ddd;
    ${mobile({width: "80%"})};
`;
const Button = styled.button`
    background: black;
    color: white;
    font-weight: bold;
    width: 100%;
    padding: 5px 50px;
    cursor: pointer;
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
    ${mobile({flexDirection: "column"})}
`;
const InputZ = styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 7px;
    background: none;
    border: 1px solid #ddd;
    ${mobile({display: "none"})}
`;
const Title = styled.h1`
    text-align: center;
    font-size: 25px;
    font-weight: bold;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    margin: 30px 10px;
`;
const LinkZContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: -30px;
`;
const LinkZ = styled.a`
    text-decoration: none;
    color: teal;
    cursor: pointer;
    margin: 15px 30px;
    border: 1px solid black;
    padding: 5px;
    font-weight: bold;
`;
const Errormsg = styled.p`
    color: red;
    width: 100%;
    font-size: 14px;
    margin: 0;
`;
/*
=================================================================================
                            Form Validation
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
const ConfirmPassword = () =>{
    //get passwords
    let password = document.getElementById("Password");
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


const Register = () => {
    return (
        <Container>

            <Wrapper>
                <Title>Register - Create Account</Title>
                <Form >
                    <Errormsg id="ErrorMsg"></Errormsg>
                    <Input id="Name" required onChange={() =>whiteSpace()} type="text" maxLength="15" placeholder="Name"/>
                    <Input id="Surname" required onChange={() =>whiteSpace()} type="text" maxLength="20" placeholder="Surname"/>
                    <Input required type="email" placeholder="Email"/>
                    <Input id="Password" required type="password" placeholder="Password"/>
                    <Input id="ConfirmPassword"  onChange={() => ConfirmPassword()} required type="password" placeholder="Confirm Password"/>
                    <InputZ disabled style={{border:"none"}}/>
                    <Errormsg id="ErrorPMsg"></Errormsg>
                    <Agreement>By signing up, you agree to the terms and conditions of Enelt Store.</Agreement>
                     <Button id="btnSubmit" type="submit">Sign Up</Button>
                </Form>
                <LinkZContainer>
                    <LinkZ><Link to="Login" style={{textDecoration:"none", color:"black"}}>Login</Link></LinkZ>
                    <LinkZ><Link to="/" style={{textDecoration:"none", color:"black"}}>Home</Link></LinkZ>
                </LinkZContainer>
            </Wrapper>
            
        </Container>
    )
}

export default Register
