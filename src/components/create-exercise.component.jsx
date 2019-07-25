import React, {useState, useEffect} from 'react'
import DatePicker from 'react-date-picker'
import axios from 'axios'

function CreateExcrcises() {

    const [Exercises, setExercises] = useState({
        username:'',
        description:'',
        duration:'',
        date:new Date()
    })

    const [Users, setUsers] = useState([])

    useEffect(() => {
        const choices=['-----Select User-----']
        axios.get('http://localhost:5000/users')
            .then((res)=>{
                if(res.data.length>0){
                     res.data.map((obj)=>(
                        choices.push(obj.username)
                        ))
                }
                 setUsers(choices)
            })
    },[])

    const handleChange=(e)=>{
        const{name, value}=e.target
        setExercises({...Exercises, [name]:value})
    }

    const onChange=(date)=>{
      setExercises({...Exercises, date})
    }
    

    const onSubmit=(e)=>{
        e.preventDefault();
        const exercises={
            username:Exercises.username,
            description:Exercises.description,
            duration:Exercises.duration,
            date:Exercises.date,
        }
        axios.post('http://localhost:5000/exercises/add', exercises)
            .then((res)=>console.log(res))
            .catch((err)=>console.log("Error is: "+err))
         window.location='/';
    }

    return(
        <div className="container m-2">
            <label className='col-form-label-lg'>Create New Exercise:</label>
            <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Username</label>
                <select 
                    className="form-control" 
                    name='username'
                    aria-describedby="nameHelp"
                    value={Exercises.username}
                    onChange={handleChange}
                    >
                        {
                            Users.map((user)=>(
                              <option
                                key={user}
                                value={user}>{user}</option>
                            ))
                        }
                </select>
                <small id="nameHelp" className="form-text text-muted">We'll never share your name with anyone else.</small>
            </div>
            <div className="form-group">
                <label>Description</label>
                <input 
                    type="text" 
                    name='description'
                    className="form-control"  
                    placeholder="Description"
                    value={Exercises.description}
                    onChange={handleChange} 
                    required/>
            </div>
            <div className="form-group">
                <label>Duration (in minutes)</label>
                <input 
                    name='duration'
                    type="number" 
                    className="form-control"  
                    placeholder="Duration"
                    value={Exercises.duration}
                    onChange={handleChange}
                    required/>
            </div>
            <div className="form-group">
                <label>Date</label>
                <div>
                    <DatePicker
                        onChange={onChange}
                        value={Exercises.date}
                        />  
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default CreateExcrcises