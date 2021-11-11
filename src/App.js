import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import DetailsOfCar from './Components/Pages/DetailsOfCar/DetailsOfCar';
import ExploreCars from './Components/Pages/ExploreCars/ExploreCars';
import Home from './Components/Pages/Home/Home/Home';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/explore_all_cars'>
              <ExploreCars></ExploreCars>
            </Route>
            <Route path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>
            <Route path='/carDetails/:detailId'>
              <DetailsOfCar></DetailsOfCar>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
