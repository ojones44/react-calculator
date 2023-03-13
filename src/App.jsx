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
			<Screen />
			<div className='calculator-grid'>
				<CalcButtons />
			</div>
		</div>
	);
}

export default App;
