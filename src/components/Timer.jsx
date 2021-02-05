import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components'


const TimerDiv = styled.div`
display:flex;
justify-content:center;
`

const Minute = styled.text`
text-align:center;
font-size:15vh;
color: #d9534f;
text-shadow:-1px -1px  1px gray, 1px 1px 1px gray;
`

const Point = styled.text`
text-align:center;
font-size:15vh;
color: #d9534f;
text-shadow:-1px -1px  1px gray, 1px 1px 1px gray;

`

const Sec = styled.text`
text-align:center;
font-size:15vh;
color: #d9534f;
text-shadow:-1px -1px  1px gray, 1px 1px 1px gray;
`


export default ({ countTime, isDownCounting, isOuterActive, setInActive }) => {
  const [s, setS] = useState(countTime);
  const [min, setMin] = useState(0);
  const [isActive, setIsActive] = useState(false);



  useEffect(() => {
    let running;
    console.log(isActive)
    setIsActive(isActive => isActive = isOuterActive)
    if (isActive) {
      running = setInterval(() => {
        isDownCounting ? setS(s => s - 1) : setS(s => s + 1);
        console.log(isActive);
        console.log(s);
        if (!isDownCounting && s === 59) {
          setMin(min => min + 1);
          setS(s => 0);
        }
      }, 1000);
    }
    if (isDownCounting && s == 0) {
      setIsActive(!isActive)
      setInActive()
    }
    return () => clearInterval(running);
  }, [isActive, s, isOuterActive]);

  return (
    <TimerDiv>
      <Minute>
        {min > 9 ? min : `0${min}`}
      </Minute>
      <Point >:</Point>
      <Sec>
        {s > 9 ? s : `0${s}`}
      </Sec>

    </TimerDiv>
  );
}
  ;