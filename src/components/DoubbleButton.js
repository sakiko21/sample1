import "./DoubbleButton.css";

export default function DoubbleButton(){
    function changeText(comment){
        const changeText = document.getElementById("change-text");
        changeText.innerHTML = `${comment} Clicked! `;
    }
    return (
        <>
        <div className="dinamic-comment">
                <h2 id="change-text">この部分のテキストが変更されます</h2>
        </div>
        <div className = "doubble-button-area">
            <div className="button-wrap">
                <button onClick={()=> changeText("First Button")} >First Buttom</button>
            </div>
            <div className="button-wrap">
                <button onClick={()=> changeText("Second Button")} >Second Buttom</button>
            </div>
        </div>
        </>
    );
}