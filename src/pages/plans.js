import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import PlanCard from '../components/PlanCard'
import Modal from "../components/AddNewTrainingModal"
require('dotenv').config();

let isBigScreen;

const CardContainer = styled.div`
display:flex;
flex-direction:column;
@media only screen and (min-width: 900px) {
  flex-direction:row;
  flex-wrap: wrap;
}
`

const Page = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
background:black;
min-height:100vh;
`

const TitleDiv = styled.div`
display:flex;
justify-content:space-between;
color:white;
font-size:5vh;
`

const CardDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
@media only screen and (min-width: 900px) {
  width:30vw;
}
`

const AddPlanButtonBig = styled.button`
border-radius: 50%;
background: #d9534f;
width:5vw;
height:5vw;
justify-content:center;
align-items:center;
`

const AddPlanButtonSmall = styled.button`
border-radius: 30%;
background: #d9534f;
width:30vw;
height:15vw;
justify-content:center;
align-items:center;
`

export default () => {
    const url = process.env.REACT_APP_BACKEND_URL;
    const [modalShow, setModalShow] = useState(false);
    const [plans, setPlans] = useState();

    useEffect(async () => {
        console.log("A useEffectben")
        console.log("url az env-ben: " + url)
        const { data } = await axios.get(url + "/plans/getAll")
        console.log(data)
        setPlans(data)
    }, [])

    return (
        <Page>
            <TitleDiv>
                {window.innerWidth > 900 ? <div></div> : <></>}
                <p>A terveid</p>
                {window.innerWidth > 900 ? <AddPlanButtonBig onClick={() => setModalShow(true)}>+</AddPlanButtonBig> : <AddPlanButtonSmall onClick={() => setModalShow(true)}>+</AddPlanButtonSmall>}

            </TitleDiv>
            <CardContainer>
                {plans ? (
                    plans.map(plan => (
                        <CardDiv>
                            <PlanCard title={plan.title} id={plan._id} trainingEntityList={plan.trainingEntityList}></PlanCard>
                        </CardDiv>
                    ))
                ) : (
                        <p className="text-white">Szerverkapcsolati hiba</p>
                    )
                }
            </CardContainer>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Page >
    );
}