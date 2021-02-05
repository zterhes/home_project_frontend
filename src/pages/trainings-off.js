import React, { useEffect, useState } from 'react'
import axios from 'axios'

import TrainingCard from '../components/TrainingCard'



export default () => {
    const [trainings, setTrainings] = useState();
    useEffect(async () => {
        console.log("Benne")
        const { data } = await axios.get('http://localhost:3000/trainings');
        setTrainings(data);
        console.log(data);
    }, [])
    return (
        <div>
            {trainings ? (
                trainings.map(training => (
                    <TrainingCard training={training} key={training._id} />
                )
                )
            )
                : (
                    <>Várás van</>
                )}
        </div>
    );
}