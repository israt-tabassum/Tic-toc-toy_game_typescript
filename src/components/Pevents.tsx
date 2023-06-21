import React from 'react'

function Pevents() {

    function handleClick() {
        alert('Hey, You clicked me! >_<');
    }

    return (
        <button onClick={handleClick}>
          Click me
        </button>
      );
    }

export default Pevents