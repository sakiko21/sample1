import React, {useState} from "react";

export default function TextField(){
    const[text, setText] = useState("");
    const changeText = (event) => {
        setText (event.target.value);
    };
    //focusについて。
    const [focusField, setFocusField] = useState(false);

    const focus = () => {
        setFocusField(true);
    };
    const notFocus = () => {
        setFocusField(false);
    }

    return(
        <div>
            <input type="text" value={text} onChange={changeText} onFocus={focus} onBlur={notFocus} />
            <p>入力した文字がここに表示されます</p> 
            <p>{text}</p>
            <p>{focusField ? "フォーカス":"フォーカスされてない"}</p>
        </div>
    );
}