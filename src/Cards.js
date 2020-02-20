import React from "react";
// import Description from './Description.js'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Container, Row
  } from 'reactstrap';
import './Cards.css'


function Cards(props){
    console.log('card props', props.nasa)
    return(
        // <>
        //     <h1>Welcome!</h1>
        //     <h2>{props.nasa.title}</h2>
        //     <img src={props.nasa.url} alt='photo of the day'/>
        //     {/* <p>{props.nasa.explanation}</p> */}
        //     <Description info={props.nasa.explanation}/>
        // </>
        <Container className='general-card'>
        <Card>
            <CardImg top-width='100%' src={props.nasa.url} alt='photo of the day'/>
            <CardBody>
                {/* <CardTitle>{props.nasa.title}</CardTitle> */}
                <CardSubtitle>{props.nasa.date}</CardSubtitle>
                <CardText>{props.nasa.explanation}</CardText>
            </CardBody>
        </Card>
        </Container>


    )
}

export default Cards