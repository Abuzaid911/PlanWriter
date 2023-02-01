import React from 'react'
import { useStore ,Form } from '../store';
import { useForm } from 'react-hook-form';

const Qform = () => {
    const {handleSubmit, register} = useForm();
    const { setForm, questionForm } = useStore();
    const onSubmit = (form: Form) => 
    {
        setForm(form);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex gap-3 ">
                <div className='chat chat-start'>
            <input type="text" placeholder="Ask your question" className="chat-bubble"
                {...register("question")}
                />
                </div>
                <div className="flex justify-center">
                <button className="btn btn-outline btn-accent" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}


export default Qform
