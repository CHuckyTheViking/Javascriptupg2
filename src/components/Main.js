import React, { useState } from 'react'
import Form from './Form'
import Library from './Library'

const Main = () => {

    const [activities, setActivity] = useState([])

    return (
        <main className="container">
            <div>
                <div>
                    <Form activities={activities} setActivity={setActivity}/>
                </div>
                <div>
                    <Library activities={activities} setActivity={setActivity}/>
                </div>
            </div>
        </main>
    )
}

export default Main
