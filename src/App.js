import logo from './logo.svg';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import Add from './components/Add.js';
import Client from './components/Client';
import Coach from './components/Coach';
import Gym from './components/Gym';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CoachDetail from './components/CoachDetail';
function App() {
  return (
    <Router>
    <div>
   <Header/>
   <Switch> 
   <Route path="/add">
     <Add/>
  </Route>
  <Route path="/gyms">
     <Gym/>
  </Route>
  <Route path="/clients">
     <Client/>
  </Route>
  <Route path="/coaches/:id">
     <CoachDetail/>
  </Route>
  <Route path="/coaches">
     <Coach/>
  </Route>
  <Route path="/login">
     <Login/>
  </Route>
  
  <Route path="/main">
   <Main/>
   </Route>
   <Route path="/">
     <Login/>
  </Route>
   </Switch>
   <Footer/>
   </div>
   </Router>
  );
}

export default App;
