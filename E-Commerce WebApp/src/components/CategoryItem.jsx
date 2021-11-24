import styled from 'styled-components';
import { mobile } from './Responsive';

/**IMPORTANT 
    - Flex: 1 (etc) makes elements equal in postion and size

*/

const Container = styled.div`
    flex: 1;
    margin: 4px;
    height: 70vh;
    position: relative;
   
`;

// Object-fit helps keep images in same size and crop so they dont look worn out
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover; 
   
`;
const Info = styled.div`
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
`;
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    background: rgba(0,0,0,0.5);
    padding: 10px;
`;
const Button = styled.a`
    background: rgba(0,0,0,0.5);;

    border-radius: 10%;
    color: white;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    text-decoration: none;

    &:hover{
        background-color: white;
        color: black;
    }
`;

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button href="http://localhost:3000/Shop">Shop Now</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
