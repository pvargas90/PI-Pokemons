import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; // permite escribir creadores de acciones que retornan una funcion en vez de un objeto, va haciendo algo mientras sale otra cosa
import rootReducer from '../reducer/index';

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
