import React, { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components"

import Timer from "../components/Timer"




const Page = styled.div`
height: 100vh;
background:black;
text-align:center;
`

const TitleDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
`

const Title = styled.text`
font-size:10vw;
color:white;
`

const SetCounter = styled.text`
font-size:10vw;
color:white;
`



const StartButton = styled.button`
background-color:green;
width:50vw;
height: 50vw;
border-radius:30vw;
`

const PauseButton = styled.button`
background-color:red;
width:50vw;
height: 50vw;
border-radius:30vw;
`

const InputDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
height:50vh;
`

const Inputs = styled.div`
display:flex;
justify-content:space-around;
`

const InputWeight = styled.input`
background:transparent;
height:30vw;
color:white;
`

const InputReps = styled.input`
background:transparent;
color:white;
`

const InputButton = styled.button`
background-color:#d9534f;
color:black;
height:50vw;
width:50vw;
border-radius:50vw;
`


export default () => {
    const { state } = useLocation();
    const inComingSetNum = 4;
    const { id, exerciseEntity, repeats, workTime, restBetweenSets, restAfterRound, linkedToTheNextExercise } = state;
    const { exercisePictureRoute, exercise_id, exercise_title } = exerciseEntity
    const [isTimeActive, setIsTimerActive] = useState(false)
    const [weight, setWeight] = useState()
    const [reps, setReps] = useState()
    const [result, setResult] = useState([]);
    const [setCounter, setSetCounter] = useState(1);


    const saveButtonPressed = () => {
        const tempArr = [[weight, reps], ...result];
        setResult(tempArr);
        setIsTimerActive(isTimeActive => isTimeActive = true)
        setSetCounter(setCounter + 1)
    }

    const setInactive = () => {
        setIsTimerActive(!isTimeActive)
    }
    return (
        <Page>
            <TitleDiv className='justify-content-center'>
                <Title>{exercise_title}</Title>
                <SetCounter>{setCounter} of 4 Sets</SetCounter>
            </TitleDiv>
            {!isTimeActive ? (
                setCounter < inComingSetNum ? (
                    < InputDiv >
                        <Inputs>
                            <InputWeight
                                type="number"
                                value={weight}
                                onChange={e => setWeight(e.target.value)}
                                placeholder="A felhasznált súlyok"
                            ></InputWeight>
                            <InputReps
                                type="number"
                                value={reps}
                                onChange={e => setReps(e.target.value)}
                                placeholder="Ismétlések száma"
                            ></InputReps>
                        </Inputs>
                        <InputButton onClick={saveButtonPressed}>Mentés</InputButton>
                    </InputDiv>
                ) : (
                        <h1>Gyakorlat vége</h1>
                    )
            ) : (
                    <>
                        <Timer countTime={restBetweenSets} isDownCounting isOuterActive={isTimeActive} setInActive={setInactive}></Timer>
                        <PauseButton onClick={() => setIsTimerActive(!isTimeActive)}>A következő kör kezdése</PauseButton>
                    </>)
            }

        </Page >
    );
}