import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap';

function Delete({exercise, onDelete}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <a href="#"  onClick={handleShow}>delete</a>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Warning</Modal.Title>
          </Modal.Header>
          <Modal.Body>You will not able to recover once deleted. Are you sure??</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="danger" onClick={()=>onDelete(exercise._id)}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default Delete