import React from "react";

function Description(props){
    console.log("PROPSFSD", props.info)
    return(
        <>
            <p>{props.info}</p>
        </>
    )
}

export default Description