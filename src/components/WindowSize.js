import { useState, useEffect } from 'react';
export default function WindowSize(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

useEffect(() => {
    const windowResize = () => {
        setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', windowResize);
    return() => {
        window.removeEventListener('resize', windowResize);
    };
    }, []);

    return( 
    <div className="container">
        <p>現在の画面横幅：{windowWidth}</p>
    </div>
    );
}