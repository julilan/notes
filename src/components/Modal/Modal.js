import React from 'react';
import Button from '../../UI/Button';
import './Modal.css';

const Modal = (props) => {
  return (
    <div className='overlay'>
      <div className="popup">
        <h2>This is your note:</h2>
        <p>
          First name: <span>{props.firstname}</span>
        </p>
        <p>
          Last name: <span>{props.lastname}</span>
        </p>
        <p>
          Phone: <span>{props.phone}</span>
        </p>
        <p>
          Role: <span>{props.role}</span>
        </p>
        <p>
          Message: <span>{props.message}</span>
        </p>
        <Button name="Yes, I am sure"/>
        <Button name="No, I don't want to post it"/>
      </div>
    </div>
  );
};

export default Modal;