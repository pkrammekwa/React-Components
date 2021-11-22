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
    width: 25%;
    padding: 20px;
    background-color: white;
    border: 1px solid #ddd;
    ${mobile({width: "80%"})}
`;
const Button = styled.button`
    background: black;
    border: 2px solid black;
    padding: 5px 50px;
    cursor: pointer;
    color: white;
    font-weight: bold;
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
const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px 20px;
    
`;

const LinkZContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: -20px;
`;
const LinkZ = styled.a`
    text-decoration: none;
    color: teal;
    cursor: pointer;
    margin: 20px 20px;
    font-weight: bold;
    border: 1px solid black;
    padding: 5px;
`;
const LinkFP = styled.a`
    text-decoration: underline;
    color: teal;
    cursor: pointer;
    margin: 0px 0px 20px;
    font-weight: bold;
`;
/*
=================================================================================
                            Your Code Goes Here
=================================================================================
*/



const Login = () => {
    return (
        <Container>

            <Wrapper>
                <Title><ShoppingCartOutlined/> Store - Login</Title>
                <Form>
                    <Input type="email" placeholder="Email" required/>
                    <Input type="password" placeholder="Password" required/>
                    <Agreement>By logging in, you agree to the terms and conditions of Enelt Store.</Agreement>
                    <LinkFP><Link to="FP" style={{textDecoration:"none", color:"black"}}>Forgot Password</Link></LinkFP>
                <Button type="submit">Login</Button>
                </Form>
                <LinkZContainer>
                    <LinkZ><Link to="Register" style={{textDecoration:"none", color:"black"}}>Register</Link></LinkZ>
                    <LinkZ><Link to="/" style={{textDecoration:"none", color:"black"}}>Home</Link></LinkZ>
                </LinkZContainer>
            </Wrapper>
      
        </Container>
    )
}

export default Login
