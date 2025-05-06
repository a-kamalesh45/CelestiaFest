import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Schedule from './Schedule';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import TeamSeccy from './TeamSeccy';
import TeamHead from './TeamsHead';
import TeamSubhead from './TeamSubhead';

function App() {

    const [status, setStatus] = useState(localStorage.getItem("status")==='true');
    

  return (
    <Router>
      <Navbar status={status} setStatus={setStatus}/>
      <div className="content">
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route exact path = "/schedule">
            <Schedule />
          </Route>
          <Route exact path = "/login">
            <Login setStatus={setStatus}/>
          </Route>
          <Route exact path="/signup">
            <Signup setStatus={setStatus} />
          </Route>
          <Route exact path = "/profile">
            <Profile />
          </Route>
          <Route exact path = "/teamseccy">
            <TeamSeccy />
          </Route>
          <Route exact path = "/teamhead">
            <TeamHead />
          </Route>
          <Route exact path = "/teamsubhead">
            <TeamSubhead />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
