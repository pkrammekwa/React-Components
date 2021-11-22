import styled from 'styled-components';

import {ShoppingCartOutlined, StarBorderTwoTone, Star, FavoriteBorderOutlined, SearchOutlined} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { mobile } from './Responsive';

/*
=================================================================================
                            Styled CSS
=================================================================================
*/
const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.3);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
    
`;

const Container = styled.div`
    ${mobile({marginTop:"50px", width:"100%", height:"100%", boxShadow: "none"})}
    margin: 20px;
    flex-direction: column;
    width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    -webkit-box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.3);
    &:hover ${Info} {
         opacity: 1;
    }
`;
// Object-fit:cover helps keep images in same size and crop so they dont look worn out
const Image = styled.img`
    height: 63%;
    width: 80%;
    
`;
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    transition: all 0.4s ease;
    &:hover{
        transform: Scale(1.5)
    }
`;
const Name = styled.p`
   margin: 0px;
   padding: 0;
   font-size: 17px;
   display: flex;
   font-weight: 500;
   width: 75%;
   ${mobile({width:"68%"})}
`;
const Rating = styled.h3`
    font-size: 15px;
    margin: 0px;
    padding: 0;
    color: orange;
`;
const Price = styled.h3`
    margin: 0px;
    padding: 0;
    font-style: italic;
`;
const Details = styled.div`
   width: 75%;
   display: flex;
   justify-content: space-between;
   margin: 0px;
   padding: 0px;

   ${mobile({width:"68%"})}
`;
const Circle = styled.div``;
/*
=================================================================================
                            Your Code Goes Here
=================================================================================
*/



const ProductItem = ({item}) => {
    return (
        <Container>
            <Circle/>
            <Image src={item.img}/>
            <Info>
                <Icon>
                    
                    <Link to="ShoppingCart" style={{textDecoration:"none", color:"black"}}><ShoppingCartOutlined /></Link>
                </Icon>

                <Icon>
                <Link to="ProductDetails" style={{textDecoration:"none", color:"black"}}><SearchOutlined /></Link>
                </Icon>

                <Icon>
                   
                    <Link to="MyWishlist" style={{textDecoration:"none", color:"black"}}> <FavoriteBorderOutlined /></Link>
                </Icon>
            </Info>
           <Details> 
               <Price>R {item.price}</Price>
               <Rating>
                   <Star/>
                   <Star/>
                   <Star/>
                   <StarBorderTwoTone/>
                   <StarBorderTwoTone/>
               </Rating>
                
            </Details>
            
            <Name>{item.name}</Name>
           
        </Container>
    )
}

export default ProductItem
