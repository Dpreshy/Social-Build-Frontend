import React from 'react'
import styled from "styled-components"
import {BsSearch} from "react-icons/bs"
import {AiFillHome, AiOutlineHeart } from "react-icons/ai"
// import {AiFillHome } from "react-icons/ai"
import {BiAddToQueue} from "react-icons/bi"
import {FcLike } from "react-icons/fc"
import {MdOutlineShareLocation } from "react-icons/md"

import { BiMessageRoundedDots } from "react-icons/bi";
// import { Link } from 'react-router-dom'?




const Header = () => {
  return (
    <div>
        <Container>
            <Wrapper>
        <Hold>
            <Logo>Social Build</Logo>
            <Search>
                <Icon/>
                <SearchInput placeholder="search"/>
            </Search>
        </Hold>
        <Hold>
            <HomeIcon/>
            <MessageIcon />

            <PostIcon/>
            <FavIcon/>

            <LoveIcon/>


<Image  src='/images/4.jpg'/>


        </Hold>

            </Wrapper>
        </Container>
    </div>
  )
}

export default Header


const Hold = styled.div`
display:flex ;
align-items: center ;
/* height:100% */
margin-right:80px;
`


const Logo = styled.div`
margin-right:40px;
font-weight:600;
font-size:25px ;
font-style:italic ;
`


const Search = styled.div`
display:flex ;
align-items: center ;
width:350px ;
height: 40px;
border-radius: 5px ;
background-color: #EFEFEF;
/* margin-left:150px; */
`


const Icon = styled(BsSearch)`
margin-left:10px ;
`


const SearchInput = styled.input`
outline: none;
border: 0 ;
color:white ;
background-color: transparent;

font-size: 20px;

::placeholder{
    font-family:cursive;

}
`


const HomeIcon = styled(AiFillHome)`
font-size:27px ;
margin: 0 10px ;
color:#000000 ;
cursor: pointer ;
`
const PostIcon = styled(BiAddToQueue)`
font-size:27px ;
margin: 0 10px ;
color:#000000 ;
cursor: pointer ;
`
const LoveIcon = styled(AiOutlineHeart)`
font-size:27px ;
margin: 0 10px ;
color:#000000 ;
cursor: pointer ;
`
const FavIcon = styled(MdOutlineShareLocation)`
font-size:27px ;
margin: 0 10px ;
color:#000000 ;
cursor: pointer ;
`
const MessageIcon = styled(BiMessageRoundedDots)`
font-size:27px ;
margin: 0 10px ;
color:#000000 ;
cursor: pointer ;
`


const Image = styled.img`
width:40px ;height:40px;
border-radius: 50%;
object-fit: cover;
/* background-color:red; */
`


const Wrapper = styled.div`
width:90% ;
display:flex ;
justify-content: space-around ;
align-items: center ;
height:100% ;
`


const Container = styled.div`
width:100% ;
height:70px ;
display:flex ;
justify-content: center ;
border-bottom:1px solid silver ;
align-items: center ;
position:fixed ;
background-color:white;
`


