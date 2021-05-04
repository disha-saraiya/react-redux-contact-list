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


function App() {
  return (
    <div className="App">
      Hello this is my Visa assessment
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
