
import styled from 'styled-components'
import {Link} from 'react-router-dom';

import "../styles.css"


import teamPic from '../img/nyito_new2.jpeg'
import logobig from '../img/download.png'
import logo128 from '../img/128.png'

const PageContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
background:url(${teamPic});
width:100vw;
height: 100vh;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`
const LogoContainer = styled.div`
display: flex;
justify-content:center;
`

const TextContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
font-size:5vW;
@media (max-width: 768px) {
    font-size:5vh
  }
`

const Text = styled.p`
margin:0;
color:white;
text-align:center;
text-shadow: 4px 4px black;

`

const Span = styled.span`
color:#d9534f;
`

const SignInButton = styled.button`
align-self: center;
background-color: #d9534f;
color: white;
width:50vw;
height:10vh;
font-size:50%;
`

export default ()=> {
  return (
    <PageContainer>
      <LogoContainer>
        <a href="http://rugbyszeged.hu/">
          {window.innerWidth > 900 ? <img src={logobig} /> : <img src={logo128} />}
        </a>
      </LogoContainer>
      <TextContainer>
        <Text>Azért mert vírus van</Text>
        <Text><Span>MÉG EDZENI KELL!</Span></Text>
        <Link className='link' to='/plans'>
        <SignInButton>Kezd el most</SignInButton>
        </Link>
      </TextContainer>
      <div></div>
    </PageContainer>
  );
}