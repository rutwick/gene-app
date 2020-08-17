import React from 'react';
import './form.css';

const Form = (props) => {
    return <div className="form-container">
        <span className="close" onClick={props.onClose}>X</span>
        <form className="form">
            <input type="text" />
            <input type="button" value="Submit" />
        </form>
    </div>;
}

export default Form;