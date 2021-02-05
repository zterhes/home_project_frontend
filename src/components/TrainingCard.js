import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


import backgroundimg from '../img/card.jpg'

const Card = styled.div`
display:flex;
justify-content:flex-start space-between;
align-items:center;
background-repeat:no-repeat;
background-size:cover;
background-position-y:bottom;
background:url(${backgroundimg});
height:20vw;
width: 90vw;
border-radius:5vw;
box-shadow:5px 5px 3px 3px white;
margin: 10px;
`

const CardText = styled.div`
margin-left:15vw;
font-size:5vw;
color:white;
text-shadow:-3px -3px  3px black, 3px 3px 3px black;
`


const DescriptionText = styled.div`
margin-left:15vw;
font-size:3vw;
color:white;
text-shadow:-3px -3px  3px black, 3px 3px 3px black;
`



const Button = styled.button`
display:flex;
justify-content:center;
align-items:center;
font-size:5vw;
height:100%;
width:15%;
background-color: #d9534f;
border-bottom-left-radius:5vw;
border-top-left-radius:5vw;
`
const Span = styled.div`
text-shadow: -1px -1px 1px #fff, 1px 1px 1px #000;
	color: #9c8468;
	opacity: 0.3;
`

export default ({ training }) => {


    return (
        <>
            <Card>
                <Link
                    className='link'
                    to={{
                        pathname: "/training",
                        training: training
                    }}>
                    <div>
                        <CardText>{training.title}</CardText>
                        <DescriptionText>{training.type}</DescriptionText>
                    </div>

                </Link>
            </Card>
        </>
    );
}