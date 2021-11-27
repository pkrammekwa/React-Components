import styled from 'styled-components';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/navbar';
import {SilderItems} from '../../../data';
import SlideItem from './SlideItem';

const Container = styled.div`
    padding: 20px;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;

`;

const SlideList = () => {
    return (
        <div>
            <Navbar/>
        <Container>
            
            {SilderItems.map((item) =>(

                <SlideItem key={item.id} item={item} />

            ))}
        </Container>
        <Footer/>
        </div>
    )
}

export default SlideList
