import React from 'react'; // importa react
import ReactDOM from 'react-dom'; // importa metodos de dom 
import './index.css'; // importa el index de estilos
import App from './App'; // la distribucion de la app esta en otro archivo
import reportWebVitals from './reportWebVitals'; 
import { Provider } from 'react-redux'; // el componente provider acepta una prop value que se pasara a los componentes consumidores
import { store } from './store/index'; // representa el estado de la app, se le aplica el reducer 
import { BrowserRouter } from 'react-router-dom'; // inyecta propiedades al componenete para poder acceder al historial de navegacion

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
