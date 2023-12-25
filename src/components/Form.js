import './FormStyles.css'

import React from 'react';

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label for="">Your Name</label>
            <input type="text"></input>
            <label for="">Email</label>
            <input type="text"></input>
            <label for="">Subject</label>
            <input type="text"></input>
            <label for="">Message</label>
            <textarea rows="6" placeholder='Type your message here' cols=""></textarea>
            <button className='btn'>Submit</button>
        </form>
      
    </div>
  );
}

export default Form;
