import React from 'react';

//you can create component through functional component or class based component
//props, you can give any name for it
// children is a reserved word to project the content
const person = (props) => {
    return (
        <div>
            <h1>Hi I'm {props.name} and I'm {props.age} years old</h1>
            <p>{props.children}</p>
        </div>
    );
}

export default person;
