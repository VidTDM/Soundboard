import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap/';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CreateSoundModal from './CreateSoundModal';

export default function AddButton() {
    const [show, setShow] = useState(false);
    function handleClose() {
        setInputText('')
        return setShow(false);
    }
    function handleShow() { return setShow(true) }
    const [inputText, setInputText] = useState('');
    return (
        <>
            <Button variant="outline-dark" className='addButton child' style={{ boxShadow: '0 5px 25px 0 rgba(0, 0, 0, 0.25)' }} onClick={handleShow}>
                <FontAwesomeIcon icon={faPlus} size="xl"/>
            </Button>
            <CreateSoundModal show={show} setShow={setShow} handleClose={handleClose} setInputText={setInputText} inputText={inputText}></CreateSoundModal>
        </>
    );
}