import React from 'react'
import styled from 'styled-components'
import {AccountTabs} from './AccountTabs';
import Navbar from '../../components/navbar';
import Footer from '../../components/Footer';
/*
=================================================================================
                            Styled CSS
=================================================================================
*/
const Container = styled.div``;



const profile = () => {
    return (
        <Container>
            <Navbar/>
             <AccountTabs/>
            <Footer/>
        </Container>
    )
}

export default profile
