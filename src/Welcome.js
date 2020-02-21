import React from 'react'
import styled from 'styled-components'

const Hi = styled.div`
    background: cornflowerblue;
    width: auto;
    border-block-color: red;
    height: 100px;
    display: flex;
    margin-left: 10rem;
    margin-right: 10rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    box-shadow: 10px 5px 5px grey;
`;

function Welcome(props){

    return(
        <>
        <Hi>{props.nasa.title}!</Hi>
        </>
    )
}

export default Welcome