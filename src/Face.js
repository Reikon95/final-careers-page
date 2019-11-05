import face from './face.png'
import React from 'react';
import HoverImage from "react-hover-image";
import bill from './bill.jpg'

export default function Face(props) {
    return (
        <>
        <HoverImage src={face} alt={props.name} hoverSrc={props.pic}/>
        {props.name}
        </>
    )

}

//Need to add conditional rendering, only changing the face and the caption (name)