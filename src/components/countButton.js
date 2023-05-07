import React, {useState} from "react";

export default function CountButton(){
    const [count, setCount] = useState(0);
    const clickButton = () => {
        setCount(count => (count+1)%11)
    };
    return(
        <div>
            <button onClick={clickButton}>カウンター</button>
            <div>
                <p>回数↓</p>
                <p> { count } </p>
            </div>
        </div>
    );
};