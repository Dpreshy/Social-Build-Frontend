import React from 'react'
import styled from 'styled-components'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {FiSearch} from 'react-icons/fi'
import {BsThreeDotsVertical} from 'react-icons/bs'
const Header = () => {
  return (
    <Container>
        <Logo>
            {/* <Img /> */}
            Logo
        
        </Logo>
        <Illustration>
            <span>
                Illustration
            </span>
            <Icon1 />
        </Illustration>
        <Nav>Artists</Nav>
        <SearchInput>
            <Icon />
            <Input />
        </SearchInput>
        <Button bg1>Try Pro Free</Button>
        <Button bg >Sign In</Button>
       <MainMenu>
       <Menu/>
       </MainMenu>
    </Container>
  )
}

export default Header
const Container = styled.div`
height:70px ;
width:100% ;
border-bottom:1px solid silver ;
display:flex ;
align-items:center ;

`
const Logo = styled.div`
font-family:cursive ;
font-weight:800 ;
font-size:25px ;
margin-left:20px ;
`
const Img = styled.img``
const Illustration = styled.div`
margin: 0 15px;
display:flex ;
align-items:center ;
span{
    font-weight:600;
}
`
const Nav = styled.div`
margin-right:15px;
font-weight:600 ;

`
const Icon1 = styled(RiArrowDropDownLine)`
cursor: pointer;
margin-top:3px ;
font-size:20px;
`

const SearchInput = styled.div`
height:40px ;
border:1px solid lightgrey;
flex:1;
border-radius:5px ;

`
const Icon = styled(FiSearch)``
const Input = styled.input`
height:100% ;
width: 100%;
border:0 ;
/* margin-top: ; */
`
const Button = styled.button`
padding:6px 30px ;
outline:none ;
border:1px solid ;
background-color:${({bg})=>bg? '#fff':'#005EFF'} ;
color:${({bg})=>bg? '#000':'#fff'} ;
border-color:${({bg1})=>bg1? 'transparent':'gray'} ;
margin:0 5px ;
transition:all 350ms ;
:hover{
    background-color:${({bg1})=>bg1? '#005EFF':'transparent'} ;
    transform:scale(0.98) ;
}
`
const MainMenu = styled.div`
height:40px ;
width:40px;
border:1px solid gray ;

border-radius:50% ;
`
const Menu = styled(BsThreeDotsVertical)``
