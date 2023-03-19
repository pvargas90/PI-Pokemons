import './App.css'; // importa el estilo de la app
import { Route, Switch } from 'react-router'; 
import Home from './components/Home'; // importa las paginas que se montan o desmontan
import PokeCreate from './components/PokeCreate/PokeCreate';
import LandingPage from './components/LandingPage';
import Error from './components/Error'; // importa una funcion para arrojar cuando haya error
import Detail from './components/Detail'; 
function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/'>
					<LandingPage />
				</Route>
				<Route path='/home'>
					<Home />
				</Route>
				<Route path='/create'>
					<PokeCreate />
				</Route>
				<Route path='/pokemons/:id'>
					<Detail />
				</Route>
				<Route>
					<Error />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
