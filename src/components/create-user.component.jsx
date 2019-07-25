import React,{useState} from 'react'
import axios from 'axios'

function CreateUser() {

    const [User, setUser] = useState({
        username:''
    })


const handleChange=(e)=>{
    setUser({username:e.target.value})
}

const onSubmit=(e)=>{
    e.preventDefault();
    console.log(User)
    axios.post('http://localhost:5000/users/add', User)
        .then((res)=>console.log(res))

    setUser({username:''})

}

    return(
        <div className="container m-2">
        <label className='col-form-label-lg'>Create New User:</label>
        <form onSubmit={onSubmit}>

        <div className="form-group">
            <label>Username</label>
            <input 
                type="text" 
                className="form-control"  
                placeholder="Username"
                value={User.username}
                onChange={handleChange}
                required/>
            <small id="nameHelp" className="form-text text-muted">We'll never share your name with anyone else.</small>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    )
}

export default CreateUser