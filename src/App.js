import React from 'react';
import Home from './containers/Home/index'
import './App.css';
import Header from './components/Header';
import Header2 from './components/header2';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import AboutUs from './containers/AboutUs';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/ProjectList/CreateProject';
import Books from './components/Books/Books';
import anime from './components/Anime/anime';
import tech from './components/Tech/tech';
import techdetails from './components/Tech/techdetails';
import bookDetails from './components/Books/bookDetails';
import animeDetails from './components/Anime/animeDetails';
import Notifications from './components/Dashboard/Notifications';

function App() {
  return (
    <Router>
    <div className="App">
      <div><Header/></div>
      <div style={{justifyContent:"center"}}>
      <Header2/></div>
      <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/AboutUs"  component={AboutUs}></Route>
      <Route path="/notifications" component={Notifications}/>
      <Route path="/tech/:id" component={techdetails}/>
      <Route path="/books/:id" component={bookDetails}/>
      <Route path="/anime/:id" component={animeDetails}/>
      <Route path='/signin' component={SignIn} />
       <Route path='/signup' component={SignUp} />
       <Route path='/books' component={Books}></Route>
       <Route path='/anime' component={anime}></Route>
       <Route path='/tech' component={tech}></Route>
       <Route path='/create' component={CreateProject} />
      </Switch>
    </div></Router>
  );
}

export default App;
