import React from 'react'
import styled from 'styled-components'
const MySignUp = () => {
  return (

    <Container>
        <Wrap>
        <Top>
            <h3>Daisy</h3>
        </Top>
        <Card>
            <Head>
            <h3>Create a Daisy account</h3>
            <p>One account for everything daisy, including<br />
            <div>Mint <span>Learn more</span></div>
            </p>
            </Head>
            <Inputs>
            <InputHolder>
                  <Label>Email</Label>
                  <Input type='email'/>
            </InputHolder>

            <InputHolder>
                  <Label>Phone <span>(recommended)</span></Label>
                  <Input type='password'/>
                  <div>Standard call, messages, or data rates may apply.</div>
                  </InputHolder>

                  <InputHolder>
                  <Label>Password</Label>
                  <Input type='password'/>
                  </InputHolder>
            </Inputs>
            <Button style={{backgroundColor: '#004080', color: '#fff'}}>
                Create Account
            </Button>
            <p>
                <i>
                By selecting Create account, you agree to our <span style={{color: 'blue'}}>Terms</span> and have read and acknowledge our <span style={{color: 'blue'}}>Global Privacy<br />Statement</span>

                </i>
            </p>
        </Card>
        </Wrap>
    </Container>
  )
}

export default MySignUp

const Container = styled.div`
width: 100%;
height: 100%;
display:flex ;
flex-direction:column ;
justify-content:center ;
align-items:center ;
background:#ECEEF2 ;
`

const Inputs= styled.div`
margin-top:40px ;
`

const InputHolder= styled.div`
margin-bottom:20px;
`

const Label= styled.div`
font-weight:500 ;
font-size:18px ;
span{
    color: #bbb
}
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
const Wrap= styled.div`
width: 85%;
display:flex ;
flex-direction:column ;
justify-content:center ;
align-items: center ;
`
const Top = styled.div`
width: 100%;
display:flex ;
flex-direction:column ;
justify-content:center ;
align-items: center ;
font-size:60px ;
font-family:forte ;
`

const Card = styled.div`
background:#fff ;
width:500px ;
height:80%;
padding: 20px ;

`
const Head = styled.div`
width:100% ;
display:flex ;
align-items: center ;
justify-content:center ;
flex-direction:column ;
h3{
    color:#ccc ;
    font-size: 15px;
    margin-bottom:10px ;
    
}
span{
    color: blue;
}
`
const Input = styled.input`
width: 95%;
height:45px ;
border-radius:5px;
font-size:15px ;
padding:0 10px;
margin-top:10px ;
border: none;
box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
:focus{
outline:1px solid rgba(0, 0, 0, 0.9);
box-shadow: 0 0 3px rgba(0.8, 1.2, 5, 1);

 
}

`

// const Card = styled.div`

// `