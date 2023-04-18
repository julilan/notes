import React from 'react';
//import Button from '../../UI/Button';
import './Form.css';

const Form = (props) => {
  return (
    <form onSubmit={props.submit}>
      <div className="form_group">
        <label htmlFor="firstname">First name</label>
        <input type="text" id="firstname" name="firstname" />
      </div>
      <div className="form_group">
        <label htmlFor="lastname">Last name</label>
        <input type="text" id="lastname" name="lastname" />
      </div>
      <div className="form_group">
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" />
      </div>
      <div className="form_group">
        <label htmlFor="role">Role</label>
        <select name="role" id="role">
          <option value="" invalid="true" hidden>Choose a role...</option>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form_group">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="3"></textarea>
      </div>
      <button type='submit'>Send</button>
    </form>
  );
};

export default Form;