import React from 'react';
//import Button from '../../UI/Button';
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
        <button onClick={props.click}>Yes, I am sure</button>
        <button onClick={props.click}>No, I don't want to post it</button>
      </div>
    </div>
  );
};

export default Modal;