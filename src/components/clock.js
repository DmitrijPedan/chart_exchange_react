import React, {useState} from 'react';

const Clock = () => {

    const [tick, setTick] = useState(new Date().toLocaleTimeString());
    setInterval(() => setTick(new Date().toLocaleTimeString()), 1000);
    
    return (
        <div>
            <p>{new Date().toLocaleDateString()}<span style = {style}> {tick} </span></p>
        </div>
    )
}

const style = { 
    fontSize: '15px',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontWeight: '300',
    color: 'rgb(92, 167, 238)',
}

export default Clock;