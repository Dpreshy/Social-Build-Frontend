import React from 'react'
import styled from "styled-components"
const Register = () => {
  return (
    <div>
        <Container>
            <Wrapper>
        <Logo>Social Build</Logo>
        <Text></Text>
        <Button>
            <Icon/>
            <span></span>
        </Button>

        <LineHolder>
            <Line/>
            <span>or</span>
            <Line/>
        </LineHolder>

        <ImageHolder>
            <Image/>
            <ImageLabel>

            </ImageLabel>
            <ImageInput/>
        </ImageHolder>

        <InputHold>
        <Icon/>
        <Input PlaceHolder = "Email"/>  
        </InputHold>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Register

const Container = styled.div`
padding-top:70px;
display: flex;
width:100% ;

`

const Wrapper = styled.div`
width:400px ;
height:100% ;
min-height: 400px;
margin-top:30px;
box-shadow: rgba(0, 0, 0, 0.);
flex-direction: column;
display: flex;
/* justify-content:center; */
align-items: center;
`


const InputHold = styled.div``

const Input = styled.div``


const Icon = styled.div``

const ImageHolder = styled.div``


const ImageInput = styled.div``


const Image = styled.div``

const Logo = styled.div`
margin-top:50px;
font-size:25px;
font-weight:500 ;


`


const LineHolder = styled.div``


const Text = styled.div`
padding:0 30px ;
color:gray ;


text-align:center ;
line-height:1.2 ;
` 

const Button = styled.div`
background-color:red ;

width: 100%;
color:white ;
margin:20px 30px ;
padding:0 40px ;

` 


const ImageLabel = styled.div`` 

const Line = styled.div`` 


// const ImageLabel = styled.div`` 




