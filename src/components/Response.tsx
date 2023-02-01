import React from 'react'
import { useStore } from '../store'

const Response = () => {
    const { questionForm } = useStore();
    if (!questionForm) return (<div className="chat chat-end"> <div className='chat-bubble chat-bubble-success'>
        Waiting for your question...
    </div>
    </div>)

    return (
        <div>
            <div className="chat chat-end">

                {/* we will implement this later =>
                 <textarea
                className="textarea textarea-accent"
                placeholder="Response will be displayed here"
                value={questionForm.question}
                readOnly
            /> */}

                <div className="chat-bubble chat-bubble-success"> Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            </div>
            <div className="flex justify-center gap-2">
                <button className="btn btn-outline btn-warning" type="submit">Edit</button>
                <button className="btn btn-outline btn-error" type="submit">Delete</button>
            </div>
        </div>
    )
}

export default Response