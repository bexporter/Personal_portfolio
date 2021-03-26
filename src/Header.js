import React from 'react'
import styled, { withTheme } from 'styled-components'

function Header( {
    return (
        <Container>
            <HeaderLogo>
                <img src={"https://i.imgur.com/719Was5.png"}
            </HeaderLogo>

            <HeaderOptionAddress>
                <OptionLineOne>Hello</OptionLineOne>
                <OptionLineTwo>Select Your Address</OptionLineTwo>
            </HeaderOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type= 'text'/>

                <HeaderSearchContainer>
                
                </HeaderSearchContainer>
            </HeaderSearch>
        </container>
       
    )
}

export default header

const Container = styled.div
height:60px;
background-color: #0F1111;
display: flex;
align-items: center;
color: withTheme;
const HeaderLogo = styled.div`
img {
    width: 100px;
    margin-left: 11px;
}
const HeaderOptionAddress = styled.div`

const OptionLineOne = styled.div`
``

const OptionLinetwo = styled.div`
`
const Header 