import React from 'react'
import styled from 'styled-components'
import Fade from "react-reveal/Fade";

function Section({title, description,leftBtntext,rightBtntext,backgroundImage}) {
    return (
        <Wrap bgImg ={backgroundImage}>
            <Fade bottom>
            <SectionHeading>
                <h1>{title}</h1>
                <p>{description}</p>
                
            </SectionHeading>
            </Fade>
            <Buttons>
                <Fade bottom> 
                <ButtonGroup>
                    <LeftButton>
                        {leftBtntext}
                    </LeftButton>
                    {rightBtntext && <RightButton>
                             {rightBtntext}
                            </RightButton>
                    }                      
                </ButtonGroup>
                </Fade> 
                <DownArrow src="/images/down-arrow.svg"/>
            </Buttons>

           
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    height:100vh;
    width:100vw;
    background-size:cover;
    background-position:center;
    background-image: ${props=> `url("/images/${props.bgImg}")`};
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`
const SectionHeading = styled.div`
    
    padding-top:15vh;
    margin-bottom:20px;
    text-align:center;
    h1{
        font-weight:400;
        font-size:40px;
    }
    p{
        font-weight:300;
        letter-spacing:0.03rem;
        color:black;
    }
    

`    
const Buttons = styled.div`
    text-transform :uppercase;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
`
const ButtonGroup = styled.div`
    display:flex;
    margin-bottom: 10px;
    margin-bottom:20px;
    @media screen and (max-width:768px){
        flex-direction column;
        LeftButton{
            width :200px;
        }

    }
`
const LeftButton = styled.div`
    width:256px;
    height:40px;
    display:flex; 
    align-items:center;
    justify-content:center;
    background-color:rgba(23,26,32,0.8);
    border-radius:100px;
    color:white;
    font-size:12px; 
    opacity:0.9;
    text-transform:uppercase;
    margin:8px;
    cursor:pointer;
`
const RightButton = styled(LeftButton)`
    background-color:white;
    color:black;
    opacity:0.65
`
const DownArrow = styled.img`
    margin-bottom:20px;
    height:40px;
    animation:animateDown infinite 1.5s;
`