import React, {useEffect} from "react";

export default function MountComponent(){

useEffect(() => {
    alert('マウントされました');

    return () => {
        alert('アンマウントされました');
    };
    }, []);
    return (
    <></>
    );
}

 