import React from 'react';
import { Modal, Button, Form, Container } from 'react-bootstrap/';
import './css/CreateSoundModal.css';

export default function CreateSoundModal({ show, setShow, /*handleClose,*/ setInputText, inputText }) {
    function handleSoundName(e) {
        // console.log(e.target.value);
        setInputText(e.target.value);
        console.log(inputText);
    }
    function handleClose() {
        setShow(false);
    }
    function handleSoundNameSubmit(e) {
        e.preventDefault();
        handleClose();
    }
    return (
        <Modal show={show} onHide={handleClose} className='CreateSoundModal'>
            <Modal.Header closeButton>
                <Modal.Title>Add Sound</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Sound name</Form.Label>
                        <Form.Control placeholder='Enter sound name' onChange={handleSoundName}/>
                    </Form.Group>
                    <Container className='submitHolder'>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSoundNameSubmit} type='submit'>
                            Create
                        </Button>
                    </Container>
                </Form>
            </Modal.Body>
        </Modal>
    );
}