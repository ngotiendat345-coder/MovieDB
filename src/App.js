import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Home from './pages/Home'
import SingleMovie from './pages/SingleMovie'


function App(){
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/movie/:id" component={SingleMovie} />
                </Switch>

            </Router>
        </>
    )
}   

export default App;