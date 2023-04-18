import React from 'react';
import './Preview.css';

const Preview = (props) => {
  return (
    <div className='preview'>
      <div className="lines"></div>
      <ul>
        <li>First name: <span>{props.firstname}</span></li>
        <li>Last name: <span>{props.lastname}</span></li>
        <li>Phone: <span>{props.phone}</span></li>
        <li>Role:<span>{props.role}</span></li>
        <li>Message: {props.message}</li>
      </ul>
    </div>
  );
};

export default Preview;