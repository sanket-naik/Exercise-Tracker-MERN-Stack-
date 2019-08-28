import React, {useState, useEffect} from 'react'
import DatePicker from 'react-date-picker'
import axios from 'axios'


function EditExcrcises({match}) {

    const [Exercises, setExercises] = useState({
        username:'',
        description:'',
        duration:'',
        date:new Date()
    })

    const disabled = true;


    useEffect(() => {
        const id=match.params.id;
        axios.get('https://exercise-tracker-endpoints.herokuapp.com/exercises/'+id)
            .then((res)=>(
                setExercises({
                username:res.data.username,
                description:res.data.description,
                duration:res.data.duration,
                date:new Date(res.data.date),
            })
            ))
            .catch((err)=>{
                console.log(err)
            })
    },[match.params.id])

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
        axios.patch('https://exercise-tracker-endpoints.herokuapp.com/exercises/update/'+match.params.id, exercises)
            .then((res)=>console.log(res))
        window.location='/';
    }

    return(
        <div className="container m-2">
            <label className='col-form-label-lg'>Edit User:</label>
            <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Username</label>
                <input 
                    type="text" 
                    name='username'
                    className="form-control"  
                    placeholder="Username"
                    value={Exercises.username}
                    onChange={handleChange}
                    disabled={disabled}
                    required/>
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

export default EditExcrcises