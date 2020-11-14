import React, { useState } from 'react';

function RoomTemperature() {
    let [temp, setTemp] = useState(5);

    const increaseTemp = () => {
        console.log('Button Click of Age');
        setTemp(++temp);
    }
    const decreaseTemp = () => {
        console.log('Button Click of Age');
        setTemp(--temp);
    }

    return (
        <div>
            <button onClick={increaseTemp}>Increase Temperature</button>
            <br />
            Temperature : {temp}
            <br />
            <button onClick={decreaseTemp}>Decrease Temperature</button>

        </div>
    );
}

export default RoomTemperature;
