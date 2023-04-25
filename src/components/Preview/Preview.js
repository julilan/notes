import React from 'react';
import './Preview.css';

const Preview = (props) => {
  return (
    <div className='preview'>
      {/* <div className="lines"></div> */}
        <p>First name: <span>{props.firstname}</span></p>
        <p>Last name: <span>{props.lastname}</span></p>
        <p>Phone: <span>{props.phone}</span></p>
        <p>Role: <span>{props.role}</span></p>
        <p>Message: <span>{props.message}</span></p>
    </div>
  );
};

export default Preview;