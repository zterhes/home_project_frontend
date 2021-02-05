import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled, { keyframes } from 'styled-components'
import { useLocation } from 'react-router'

import "../styles.css"
import ExerciseCard from "../components/exerciseCard";
import BigIcon from "../img/dumbbell128white.png"
import SmallIcon from "../img/dumbbell64white.png"


require('dotenv').config();

const rotate360 = keyframes`
from{
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}
`

const Page = styled.div`
background: black;
min-height:100vh;
`

const GymLogo = styled.img`
animation: ${rotate360} infinite 15s linear;
  height: 80px;
  &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
    `

const TitleDiv=styled.div`
display:flex;
justify-content:space-around;
padding-top:4vw;
margin-bottom:4vw;
`

const Title = styled.text`
color:#d9534f;
margin-left:15vw;
font-size:10vw;
text-shadow:-1px -1px  1px gray, 1px 1px 1px gray;
`

export default () => {
    const url = process.env.REACT_APP_BACKEND_URL;
    const { training } = useLocation();
    const [response, setResponse] = useState();

    useEffect(async () => {
        console.log("A useEffectben")
        console.log("ENV URL: " + url)
        const path = url + "/job/getAllExercisesByTrainingId?id=" + training.id
        console.log("A path: " + path)
        const { data } = await axios.get(path)
        console.log("A beérkezett adatok: " + data)
        setResponse(data)
    }, [])
    return (
        <Page>
            <TitleDiv className="justify-content-around">
                <div>
                    <GymLogo src={window.innerWidth > 900 ? BigIcon : SmallIcon}></GymLogo>
                </div>
                <div>
                    <Title>{training.type}</Title>
                </div>
            </TitleDiv>
            {response ? (
                response.map(exercise => (
                    <ExerciseCard exercise={exercise}></ExerciseCard>
                ))
            ) : (
                    <>nincs adt</>
                )}

        </Page>
    );
}