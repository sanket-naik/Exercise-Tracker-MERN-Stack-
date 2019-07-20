import React from 'react'
import {Link} from 'react-router-dom'
import Delete from './delete.exercise.component'

function Exercises({exercise, onDelete}) {
    return(
    <React.Fragment>
         <tr>
        <th scope="row">{exercise.username}</th>
        <td>{exercise.description}</td>
        <td>{exercise.duration} Min</td>
        <td>{exercise.date.substring(0,10)}</td>
        <td>
          <Link to={"/edit/"+exercise._id}>edit</Link> | <Delete onDelete={onDelete} exercise={exercise}/>
        </td>
      </tr> 

     
    </React.Fragment>
     
    )
}

export default Exercises