import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/navbar.component'
import ExcrcisesList from './components/exercises-list.component'
import EditExcrcises from './components/edit-exercise.component'
import CreateExcrcises from './components/create-exercise.component'
import CreateUser from './components/create-user.component'

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <Route path='/' exact component={ExcrcisesList}/>
        <Route path='/edit/:id' exact component={EditExcrcises}/>
        <Route path='/create' exact component={CreateExcrcises}/>
        <Route path='/user' exact component={CreateUser}/>
      </div>
    </Router>
    
  );
}

export default App;
