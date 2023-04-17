import React, { useState } from 'react'

function Navbar(props) {
    
    const [value, setValue] = useState(20);

    const handleChange = (event) => {
        setValue(event.target.value);
        props.onChange(event.target.value);
    };

  return (
    <>
        <nav className='nav-container'>
            
            <input type="range" min="0" max="300" value={value} onChange={handleChange} />
            <p className='nav-value'>Value: {value}</p>
            
        </nav>
    </>
  )
}

export default Navbar