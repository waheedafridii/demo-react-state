import React, { useState } from 'react';

function Room() {
    let [isLit, setLit] = useState(false);
    let [age, setAge] = useState(23);
    function updateLit() {
        console.log('Button Click');
        setLit(!isLit);
    }
    const increaseAge = () => {
        console.log('Button Click of Age');
        setAge(++age);
    }

    return (
        <div>
            This is Room is Lit = {isLit ? "lit" : "dark"}
            <br />
            Age : {age}
            <br />
            <button onClick={updateLit}>Toggle Light</button>
            <button onClick={() => {
                console.log('Button Click of Age');
                setAge(++age);
            }}>Toggle Age</button>
        </div>
    );
}

export default Room;
