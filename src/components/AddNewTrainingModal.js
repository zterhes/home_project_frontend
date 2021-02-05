import React, { useState } from 'react'
import "../styles.css"
import axios from 'axios'
import styled from 'styled-components'
import { Button, Modal } from 'react-bootstrap';

require('dotenv').config();

const InputField = styled.input`
background:#d9534f;
width:100%;
border-top:0px;
border-left: 0px;
border-right: 0px;
border-bottom: 3px solid white;
`



// useEffect(async () => {
//     console.log("A useEffectben")
//     console.log("url az env-ben: " + url)
//     const { data } = await axios.get(url + "/plans/getAll")
//     console.log(data)
//     setPlans(data)
// }, [])

export default (props) => {
    const url = process.env.REACT_APP_BACKEND_URL;
    const [title, setTitle] = useState("");

    const handleClick = async () => {
        console.log("url az env-ben: " + url)
        const data  = await axios.post(url + "/addPlan?title=" + title)
        console.log("a post után")
        console.log(data)
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className="modal-background" closeButton>
                <Modal.Title className="text-white" >
                    Új edzésterv hozzáadása
        </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-background">
                <InputField
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Add meg a az edzésterv nevét"
                ></InputField>
            </Modal.Body>
            <Modal.Footer className="modal-background">
                <Button onClick={handleClick}>Mentés</Button>
                <Button onClick={props.onHide}>Bezárás</Button>
            </Modal.Footer>
        </Modal>
    );
}
    ;