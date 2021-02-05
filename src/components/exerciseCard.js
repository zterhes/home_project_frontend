import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components"
import defaultImg from "../img/dumbbell.png"
import smallRestIcon from "../img/relaxing.png"
import bigRestIcon from "../img/relaxingBig.png"
import smallRepIcon from "../img/repeatsmall.png"
import bigRepIcon from "../img/repeatBig.png"

const Card = styled.div`
height:100%;
width:95%;
margin-bottom:2vh;
box-shadow:2px 2px 2px 2px white;
margin: 10px;
`

const TitleDiv = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
`

const Icon = styled.img`
background-color:white;
border-radius:30%;
`
const Title = styled.p`
margin-left:15vw;
font-size:10vw;
color: black;
text-shadow:-1px -1px  1px gray, 1px 1px 1px gray;
`

const CountSet = styled.p`
text-align:center;
font-size:5vw;
color: white;
text-shadow:-1px -1px  1px gray, 1px 1px 1px gray;
`

const RestDiv = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
`

const Img = styled.img`
margin-right:1vw;
`
const RestText = styled.text`
color:white;
`

const Details = styled.div`

`

export default ({ exercise }) => {
    const { id, exerciseEntity, repeats, workTime, restBetweenSets, restAfterRound, linkedToTheNextExercise } = exercise;
    const { exercisePictureRoute, exercise_id, exercise_title } = exerciseEntity
    let imgPath;
    exercisePictureRoute ? imgPath = exercisePictureRoute : imgPath = defaultImg
    let restPath;
    let repPath;
    if (window.innerWidth > 900) {
        restPath = bigRestIcon
        repPath = bigRepIcon;
    } else {
        restPath = smallRestIcon
        repPath = smallRepIcon
    }
    return (
        <Link
            className='link'
            to={{
                pathname: "/gymTraining",
                state: exercise
            }}>


            <Card>
                <TitleDiv>
                    <p>{workTime}</p>
                    <Icon src={imgPath}></Icon>
                    <Title className="text-white">{exercise_title}</Title>
                </TitleDiv>
                <Details>
                    <div>
                        <CountSet>12 ismétlés</CountSet>
                    </div>
                    <div>
                        <RestDiv>
                            <div>
                                <Img src={restPath}></Img>
                                <RestText>rest: {restBetweenSets}</RestText>
                            </div>
                            <div>
                                <Img src={repPath}></Img>
                                <RestText>sets: 4</RestText>
                            </div>
                        </RestDiv>
                    </div>
                </Details>
            </Card>
        </Link>

    );
}