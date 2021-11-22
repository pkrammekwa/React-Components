import styled from 'styled-components';
import {ProductsItems} from '../data';
import ProductItem from './ProductItem';

const Container = styled.div`
    padding: 20px;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;

`;

const Products = () => {
    return (
        <Container>
            {ProductsItems.map((item) =>(

                <ProductItem item={item} />

            ))}
        </Container>
    )
}

export default Products
