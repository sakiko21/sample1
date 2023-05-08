import React, {useState} from "react";

export default function TextField(){
    const[text, setText] = useState("");
    const changeText = (event) => {
        setText (event.target.value);
    };

    return(
        <div>
            <input type="text" value={text} onChange={changeText}></input>
            <p>入力した文字がここに表示されます</p>
            <p>{text}</p>
        </div>
    );
}