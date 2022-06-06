import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {imCheckboxUnchecked} from 'react-icons/im'
import {FcGoogle} from 'react-icons/fc'
import {HiArrowNarrowRight} from 'react-icons/hi'

const pix = '/images/jollof.jpg'
const SignUp = () => {
  return (
      <Container>
          <Left>
              <Blur>
                <TopText>
                    <Logo>THE GOOD
                        <br/> NETWORK</Logo>
                    <Line/>
                    <H5>We are</H5>
                    <Topic>Invite only right now</Topic>
                    <Text>
                    10million+ people have joined our network,
                        <br/>
                        We invite you to join the tribe
                    </Text>
                </TopText>
                <DownText>
                    Already have an account:?
                  {/* <Link to='/signin' style={{textDecoration: 'none'}}>
                 
                  </Link> */}
                     <span>Sign In</span>
                </DownText>
              </Blur>
          </Left>
          <Right>
              <FormHolder>
                  <Title>SignUp</Title>
                  <Inputs>
                  <InputHolder>
                  <Label>Email address</Label>
                  <Input placeholder='Enter your email' type='email'/>
                  </InputHolder>

                  <InputHolder>
                  <Label>Set password</Label>
                  <Input placeholder='Enter your password' type='password'/>
                  </InputHolder>
                  </Inputs>
                  <CheckBox>
                  <Check>
                      < imCheckboxUnchecked/>
                  </Check>
                  <span>Show your password</span>
                  </CheckBox>
                  <Buttons>
                      <Button>
                          Sign up
                          <HiArrowNarrowRight />
                      </Button>
                      <Or>
                          <OrLine></OrLine>
                          <span>Or</span>
                      </Or>
                      <GButton>
                          <span>
                              <FcGoogle />

                          </span>
                      </GButton>
                  </Buttons>
              </FormHolder>
          </Right>
      </Container>
  )
}

export default SignUp

const Container = styled.div`
width: 100%;
background-color:#fff ;
display:flex ;
height: 100vh;

`
const Left = styled.div`
background:blue;
flex: 0.5;
align-items: center;
display:flex ;
justify-content:center ;
border-radius:0 30px 30px 0;
background-image:url(${pix}) ;
background-position:center ;
background-repeat:no-repeat;
background-size:cover ;
`

const Blur = styled.div`
width: 70%;
height: 80%;
backdrop-filter:blur(10px);
border:1pix solid #fff;
background:rgba(0, 0, 0, 0,3);
border-radius:10px;
color: #fff;
padding:25px 20px ;
display:flex ;
flex-direction:column ;
justify-content:space-between ;
`

const TopText= styled.div`

`
const DownText= styled.div`
font-size: 16px;
opacity:0.8 ;
display:flex ;
flex-direction:column ;
span{
    font-size:19px ;
    font-weight:500 ;


}
`
const Logo= styled.div`
background:rgba(255,255,255,0.2) ;
width: 100px;
text-align:center ;

`

const Line= styled.div`
width: 30px;
height: 1px;
background-color:#fff ;
margin-top: 30px;
opacity:0.5 ;

`
const Topic= styled.div`
font-size:20px ;
margin-top: 30px ;
font-weight:300px ;
`
const H5= styled.div`
font-size:17px;
margin-top:30px ;


`
const Text= styled.div`
margin-top:10px ;
opacity:0.6;

`
const Title= styled.div`
font-size:30px;
font-weight:500;
margin-bottom:40px ;


`
const Right = styled.div`
background:#fff ;
flex: 0.5;
display:flex ;
align-items:center ;
justify-content:center;
@media screen and(max-width){

}
`
const CheckBox= styled.div`
display:flex ;
align-items: center ;
span{
    margin-left:10px;
}
`
const Check= styled.div`
display: flex;
align-items: center ;
opacity:0.4;
cursor: pointer;
`
const Label= styled.div`
font-weight:500 ;
font-size:18px ;
`
const Inputs= styled.div`
margin-top:40px ;
`
const Buttons= styled.div`
width: 100%;
background:red ;
display:flex ;
flex-direction:column ;
margin-top:30px;

align-items: center ;
`
const Input= styled.input`
width: 95%;
height:45px ;
border-radius:5px;
font-size:15px ;
padding:0 10px;
margin-top:10px ;
border: none;
box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
:focus{
outline:1px solid rgba(0, 0, 0, 0.9)
 
}

`
const FormHolder= styled.div`
width:70% ;
height:80%;
`
const InputHolder= styled.div`
margin-bottom:20px;
`

const Or= styled.div`
width:100% ;
display:flex ;
align-items: center ;
flex-direction:column ;
margin-top:30px ;
position:relative ;
span{
    position:absolute ;
    top:0;
    background:#fff ;
    padding:0 10px ;
}
`

const OrLine= styled.div`
width: 70px;
height:1px ;
background:black ;
opacity:0.4;
`
const GButton= styled.div`

`
const Button= styled.div`
width: 100%;
display:flex ;
height: 55px;
cursor:pointer ;
align-items: center ;
justify-content:center;
background:yellow ;
border-radius:5px ;
color: #fff;
span{
    display:flex ;
    align-items: center ;
    margin-left:5px;
}
`