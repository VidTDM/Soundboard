import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap/';

export default function Sound(props) {
    return (
        <Button variant="dark" className='sound child' style={{ boxShadow: '0px 5px 25px 0 rgba(0, 0, 0, 0.25)'}}>{props.name}</Button>
    );
}