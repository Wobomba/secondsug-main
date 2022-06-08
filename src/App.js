import React from 'react'
import Home from './pages/Home';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Signup from './pages/Signup';
import About from './pages/About';
import Partner from './pages/Partner';
import Boda from './pages/Boda';
import Ride from './pages/Ride';
import Ferry from './pages/Ferry';
import Privacy from './pages/Privacy';
import RegDriver from './pages/RegDriver';
import RegPassenger from './pages/RegPassenger';
import RegBusiness from './pages/RegBusiness';
import SignIn from './pages/SignIn';

function App() {
	return (

		<div>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route path="/Signup" component={Signup}></Route>
				<Route path='/SignIn' component={SignIn}></Route>
				<Route path="/About" component={About}></Route>
				<Route path="/Partner" component={Partner}></Route>
				<Route path="/Boda" component={Boda}></Route>
				<Route path="/Ride" component={Ride}></Route>
				<Route path="/Ferry" component={Ferry}></Route>
				<Route path="/Privacy" component={Privacy}></Route>
				<Route path="/RegDriver" component={RegDriver}></Route>
				<Route path='/RegPassenger' component={RegPassenger}></Route>
				<Route path='/RegBusiness' component={RegBusiness}></Route>

			</Switch>
		</div>
	)
}

export default App;

