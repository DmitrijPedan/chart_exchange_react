import React, {useState} from 'react';

const Clock = () => {

    const options = {hour: 'numeric', minute: 'numeric'};
    
    const [tick, setTick] = useState(new Date().toLocaleTimeString("ru", options));
    
    setInterval(() => setTick(new Date().toLocaleTimeString("ru", options)), 60000)
    
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