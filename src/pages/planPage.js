import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components'
import "../styles.css"
import TrainingCard from "../components/TrainingCard";

require('dotenv').config();


const Page = styled.div`
display: flex;
flex-direction:column;
justify-content:space-evenly;
background:black;
min-height:100vh;

`




export default () => {
    const { state } = useLocation();

    return (
        <Page>
            {state ? (
                state.map(training => (
                    <TrainingCard training={training}></TrainingCard>
                ))
            ) : (
                    <>Nincs adat</>
                )}
        </Page>
    );
}