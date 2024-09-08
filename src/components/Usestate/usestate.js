import React, { useState } from 'react';

function LearnState() {
  const [inputValue, setInputValue] = useState('salman');

  const onchange = (event) => {
    setInputValue(event.target.value);
  };

  // Styles
  const containerStyle = {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '2px solid #ccc',
    outline: 'none',
    marginTop: '10px',
    width: '250px',
  };

  const headingStyle = {
    color: "black",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>{inputValue}</h1>
      <input
        style={inputStyle}
        type="text"
        value={inputValue}
        placeholder="What's Your Name"
        onChange={onchange}
      />
    </div>
  );
}

export default LearnState;
