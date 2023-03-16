// React Imports
import { useReducer } from 'react';

// Component Imports
import Header from './components/Header';
import Screen from './components/Screen';
import CalcButtons from './components/calcButtons';

function App() {
	return (
		<div className='container'>
			<Header />
			<div className='calculator-grid'>
				<Screen />
				<CalcButtons />
			</div>
		</div>
	);
}

export default App;
