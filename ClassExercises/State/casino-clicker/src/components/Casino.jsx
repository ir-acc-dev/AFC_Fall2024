import {useState} from 'react';

function Casino() {

    const [randomNumber, setRandomNumber] = useState(null);

    function handleClick() {
        let number = (Math.floor(Math.random() * 10))+1;
        setRandomNumber(number);
    }

    return (
        <>
            <h1>Hello</h1>

            {randomNumber !== 7 ? (
                <>
                    <button onClick={handleClick}>Feeling lucky?</button>
                    {randomNumber !== null && <p>Your number is: {randomNumber}</p>} 
                </>
            ) : (
                <h2>You Win!!!</h2> 
            )}

        </>
        
    )
}

export default Casino;