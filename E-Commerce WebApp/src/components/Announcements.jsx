import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    background-color: purple;
    color: white;
    font-Style: italic;
    display:flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`

const Announcements = () => {
    return (
        <div>
            <Container>
                New E-Commerce Website template
            </Container>
        </div>
    )
}

export default Announcements

