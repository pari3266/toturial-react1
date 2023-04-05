import React from 'react'

function Message() {
    const name = 'pari';
    if(name) 
        return (
            <div>hello {name}</div>
        )
        return <div>Hello world</div>
}

export default Message