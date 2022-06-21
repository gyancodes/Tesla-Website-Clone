import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        // eslint-disable-next-line react/jsx-no-undef
        <Container>
            <Section/>
        </Container>
    )
}

export default Home

const Container = styled.div`
height: 100vh;


`