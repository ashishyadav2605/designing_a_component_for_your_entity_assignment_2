// components/button.jsx
import React from 'react';

const Button = () => {
  const buttonStyle = {
    backgroundColor: 'crimson',
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '14px',
    transition: 'background-color 0.3s',
  };

  return (
    <button 
      style={buttonStyle}
      onMouseOver={(e) => e.target.style.backgroundColor = 'red'}
      onMouseOut={(e) => e.target.style.backgroundColor = 'crimson'}
    >
      View Product
    </button>
  );
};

export default Button;