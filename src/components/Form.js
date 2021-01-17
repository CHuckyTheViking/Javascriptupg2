import React, { useState } from 'react'
import uuid from 'react-uuid'

import '../App.css';


const Form = ({ activities, setActivity }) => {

    const [header, setHeader] = useState('')
    const [description, setDescription] = useState('')
    const [disableSubmit, setDisableSubmit] = useState(true)

    const headerHandler = (e) => {  
        setHeader(e.target.value)
    }

    const descriptionHandler = (e) => {
        e.target.value.length >= 5 ? setDisableSubmit(false) : setDisableSubmit(true)
        setDescription(e.target.value)  
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setActivity([ ...activities, {header: header, description: description, id: uuid()}])
        setHeader('')
        setDescription('')
        setDisableSubmit(true)
    }

    return (
        
        <form  className="container mb-5 col-3">
            <label className="mt-4 mb-3" htmlFor="issueName">Aktivitet:</label>   
            <input onChange={headerHandler} value={header} name="activityHeader" className="" type="text" id="activityHeader" />
            
            <label htmlFor="activityText">Information om aktiviteten:</label>
            <textarea onChange={descriptionHandler} value={description} name="activityText" id="activityText" cols="34" rows="10"></textarea>
            
            <button onClick={submitHandler} disabled={disableSubmit} type="submit">Lägg till aktivitet</button>


        </form>
            
    )
}

// me-3 mt-5
// mb-4 border

export default Form
