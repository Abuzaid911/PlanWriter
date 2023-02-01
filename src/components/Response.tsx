import React from 'react'
import { useStore } from '../store'

const Response = () => {
    const { questionForm } = useStore();
    if (!questionForm) return (<div className="chat chat-end"> <div className='chat-bubble chat-bubble-success'>
        Waiting for your question...
    </div>
    </div>)

    return (
        <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-success"> Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
        </div>
    )
}

export default Response