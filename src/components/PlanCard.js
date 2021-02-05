import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


import backgroundimg from '../img/card.jpg'
import Modal from './TrainingInfoModal'

const Card = styled.div`
display:flex;
justify-content:flex-start space-between;
align-items:center;
background-repeat:no-repeat;
background-size:cover;
background-position-y:bottom;
background:url(${backgroundimg});
height:20vw;
width: 90%;
border-radius:5vw;
box-shadow:5px 5px 3px 3px white;
margin: 10px;
`

const CardText = styled.div`
margin-left:1vw;
font-size:5vw;
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

export default ({ title, id, trainingEntityList }) => {
    const [modalShow, setModalShow] = useState(false);


    return (
        <>
            <Card>
                <Button onClick={() => setModalShow(true)}><Span>info</Span></Button>
                <Link
                    className='link'
                    to={{
                        pathname: "/planPage",
                        state: trainingEntityList
                    }}>
                    <CardText>{title}</CardText>
                </Link>
            </Card>

            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                title={title}
                id={id}
                trainingEntityList={trainingEntityList}
            />
        </>
    );
}