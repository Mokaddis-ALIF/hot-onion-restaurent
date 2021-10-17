import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header/Header';
import Menu from './Components/Header/Menu/Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MenuDetails from './Components/Header/Menu/MainMenu/MainMenuItem/MenuDetails/MenuDetails';
import Footer from './Components/Header/Footer/Footer';
import Login from './Components/Header/Login/Login';
import AuthProvider from './Components/Header/Context/AuthProvider';
import PrivateRoute from './Components/Header/PrivateRoute/PrivateRoute';
import Register from './Components/Header/Login/Register/Register';

function App() {
	return (
		<AuthProvider>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Menu />
					</Route>
					<Route exact path="/menu">
						<Menu />
					</Route>
					<PrivateRoute exact path="/details/:id">
						<MenuDetails />
					</PrivateRoute>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</AuthProvider>
	);
}

export default App;
