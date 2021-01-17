
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const Activity = ({activity, activities, setActivity}) => {
    const deleteHandler = () => {
        setActivity(activities.filter(activities => activities.id !== activity.id))
    }

    function click () {
        const select1 = document.getElementById("select-" + activity.id)
        const icon2 = document.getElementById("icon-" + activity.id)
        
        if(select1.value === "Ej påbörjad") {
            icon2.classList.remove('iconGreen')
            icon2.classList.remove('iconOrange')
            icon2.classList.add('iconRed')
        }
        if(select1.value === "Påbörjad") {
            icon2.classList.remove('iconGreen')
            icon2.classList.remove('iconRed')
            icon2.classList.add('iconOrange')
        }
        if(select1.value === "Färdig") {
            icon2.classList.remove('iconOrange')
            icon2.classList.remove('iconRed')
            icon2.classList.add('iconGreen')
        }
    }
    
    return (

        <div className="container col-3 justify-content-center p-1" id="activitiesDiv">
           <p className="ms-3 mt-2" id="activitiesHeader" >{activity.header}</p>
           
           <textarea className="container" name="activitiesText" id="activitiesText" cols="36" rows="5" defaultValue={activity.description}></textarea>
           <div id="selectedDiv" className="d-flex justify-content-center">
                <select onChange={click} className="mb-3 mt-2" id={"select-" + activity.id}>
                    <option value="Ej påbörjad">Ej påbörjad</option>
                    <option value="Påbörjad">Påbörjad</option>
                    <option value="Färdig">Färdig</option>
                </select>
            
                <FontAwesomeIcon id={"icon-" + activity.id} className="faIcon iconRed" icon={ faCheckSquare }/>
                <FontAwesomeIcon onClick={deleteHandler} id="trash" className="faIcon iconRed" icon={ faTrash }/>
           </div>

        </div>

    )


}

export default Activity