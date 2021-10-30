import './App.css';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import Appbar from './components/Appbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Notfound from './components/Notfound';
import EditUser from './components/EditUser';



function App() {
  return (
    <Router>
      <div className="App">
        <Appbar />
        <Switch>
          <Route exact path='/userdetail' component={AllUsers} />
          <Route exact path='/adduser' component={AddUser} />
          <Route exact path='/edituser/:id' component={EditUser} />
          <Route component={Notfound} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
