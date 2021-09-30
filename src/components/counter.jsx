import React from 'react';

const Counter = ({ counter, text, max }) => {
    if (!counter || !text || !max) return null;
    return (
        <h3>{text} {counter} מתוך {max}</h3>
    );
}

export default Counter;