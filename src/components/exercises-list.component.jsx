import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Exercise from './exercises.component'

function ExcrcisesList() {

    const [exercises, setexercises] = useState([])

    useEffect(() => {
        axios.get('https://exercise-tracker-endpoints.herokuapp.com/exercises/')
            .then((res)=>{
                  setexercises(res.data)
            })
            .catch((err)=>{
                console.log(err.data)
            })
    },[])


    function deleteExercise(id){
        axios.delete('https://exercise-tracker-endpoints.herokuapp.com/exercises/'+id)
        .then((res)=>{
              console.log(res.data)
        })
        .catch((err)=>{
            console.log(err.data)
        })

        setexercises(exercises.filter(ex=>ex._id!==id))
    }


    return(
        <div className="container">
            <table className="table table-striped" >
            <thead>
                <tr>
                <th scope="col">Username</th>
                <th scope="col">Description</th>
                <th scope="col">Duration</th>
                <th scope="col">Date</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                  {  exercises.map(current=>(
                        <Exercise key={current._id} exercise={current} onDelete={deleteExercise}/>
                ))}
            </tbody>
            </table>
        </div>
    )
}

export default ExcrcisesList