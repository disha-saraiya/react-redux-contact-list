import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import CreateContact from './components/CreateContact';
import EditContact from './components/EditContact';
import Home from './components/Home';
import DeleteAlert from './components/DeleteAlert';


/* This is a single page application without backend persistance. It uses React Router to route to 
   different components. The edit and delete components are given props on rendering, to recognize 
   which contacts to perform operations on. */ 
   
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path = "/"><Home/></Route>
        <Route path = "/new"><CreateContact /></Route>
        <Route path = "/edit" render = {props => <EditContact {...props} />}></Route>
        <Route path = "/delete" render = {props => <DeleteAlert {...props} />}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
