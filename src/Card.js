import React from "react";
import Description from './Description.js'

function Card(props){
    console.log('card props', props.nasa)
    return(
        <>
            <h1>Welcome!</h1>
            <h2>{props.nasa.title}</h2>
            <img src={props.nasa.url} alt='photo of the day'/>
            {/* <p>{props.nasa.explanation}</p> */}
            <Description info={props.nasa.explanation}/>
        </>
    )
}

export default Card