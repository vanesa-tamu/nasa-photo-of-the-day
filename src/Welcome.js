import React from 'react'
import styled from 'styled-components'

const Hi = styled.div`
    background: cornflowerblue;
    width: auto;
    border-block-color: red;
    height: 200px;
    display: flex;
    padding: 5rem;
    margin-left: 10rem;
    margin-right: 10rem;
    justify-content: center;
    font-size: 5rem;
`;

function Welcome(props){

    return(
        <>
        <Hi>{props.nasa.title}!</Hi>
        </>
    )
}

export default Welcome