import React from 'react'
import "../styles.css"
import styled from 'styled-components'
import { Button, Modal } from 'react-bootstrap';

const InfoDivDesign = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:white;
border-bottom: 2px solid white;
`


const InfoDiv = (props) => (
  <InfoDivDesign>
    <h2>
      {props.title}
    </h2>
    <h5>{props.type}</h5>
  </InfoDivDesign>
)

export default (props) => {
  const { title, trainingEntityList } = props


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="modal-background" closeButton>
        <Modal.Title className="text-white" >
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-background">
        {trainingEntityList ? (
          trainingEntityList.map(training => (
            <InfoDiv title ={training.title} type={training.type}></InfoDiv>
          ))
        ) : (
            <>Szerver hiba</>
          )}
      </Modal.Body>
      <Modal.Footer className="modal-background">
        <Button  onClick={props.onHide}>Bezárás</Button>
      </Modal.Footer>
    </Modal>
  );
}
  ;