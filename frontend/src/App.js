import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListStudentComponent from './components/ListStudentComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateStudentComponent from './components/CreateStudentComponent';
import ViewStudentComponent from './components/ViewStudentComponent';

function App() {
  return (
    <div id="page-container">
        <Router>
              <HeaderComponent />
                <div className="container content-wrap">
                    <Switch> 
                          <Route path = "/" exact component = {ListStudentComponent}/>
                          <Route path = "/student" component = {ListStudentComponent}/>
                          <Route path = "/add-student/:id" component = {CreateStudentComponent}/>
                          <Route path = "/view-student/:id" component = {ViewStudentComponent}/>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
