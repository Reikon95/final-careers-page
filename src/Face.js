import face from './face.png'
import React from 'react';
import bill from './bill.jpg'

export default function Face(props) {
    return (
        <>
        <img src={face} alt={props.name} hoverSrc={props.pic}/>
        {props.name}
        </>
    )

}