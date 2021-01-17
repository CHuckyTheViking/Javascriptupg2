import React from 'react'
import Activity from './Activity'


const Library = ({ activities, setActivity }) => {

    if(activities.length === 0) {
        return (
            <div className="d-flex justify-content-center" id="library">
                <h3>Inga aktiviteter att visa</h3>
            </div>
        )
    }

    return (
        <div id="library" className="asd">
            {
                activities.map(activity => (
                    <Activity key={activity.id} activity={activity} activities={activities} setActivity={setActivity}/>
                ))
            }
        </div>
    )

}

export default Library;