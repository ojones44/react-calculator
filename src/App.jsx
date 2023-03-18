// React Imports
import { useReducer } from 'react';

// Component Imports
import Header from './components/Header';
import Screen from './components/Screen';
import CalcButtons from './components/CalcButtons';

// Reducer Imports
import { initialStates, reducer } from './reducer/reducer';

function App() {
	const [{ crtOperand, prevOperand, operation }, dispatch] = useReducer(
		reducer,
		initialStates
	);

	return (
		<div className='container'>
			<Header />
			<div className='calculator-grid'>
				<Screen
					crtOperand={crtOperand}
					prevOperand={prevOperand}
					operation={operation}
				/>
				<CalcButtons dispatch={dispatch} />
			</div>
		</div>
	);
}

export default App;
