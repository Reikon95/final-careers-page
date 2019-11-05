import face from './face.png'
import React from 'react';
export default function Face(props) {
    return (
        <>
        <img src={face} alt={props.name} />
        {props.name}
        </>
    )

}

//Need to add conditional rendering, only changing the face and the caption (name)