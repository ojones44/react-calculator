// Asset Imports
import BackspaceIcon from '../assets/embedded-svgs';

// Actions
import { ACTIONS } from '../reducer/reducer';

function DigitButton({ digit, dispatch }) {
	return (
		<button onClick={() => dispatch({ type: ACTIONS.DIGIT, payload: digit })}>
			{digit}
		</button>
	);
}

function OperationButton({ operation, dispatch }) {
	return (
		<button
			className='operation-type'
			onClick={() => dispatch({ type: ACTIONS.OPERATION, payload: operation })}
		>
			{operation}
		</button>
	);
}

function CalcButtons({ dispatch }) {
	return (
		<>
			<button
				className='span-two'
				onClick={() => dispatch({ type: ACTIONS.ALL_CANCEL })}
			>
				AC
			</button>
			<button onClick={() => dispatch({ type: ACTIONS.CANCEL })}>C</button>
			<OperationButton operation='÷' dispatch={dispatch} />
			<DigitButton digit='7' dispatch={dispatch} />
			<DigitButton digit='8' dispatch={dispatch} />
			<DigitButton digit='9' dispatch={dispatch} />
			<OperationButton operation='x' dispatch={dispatch} />
			<DigitButton digit='4' dispatch={dispatch} />
			<DigitButton digit='5' dispatch={dispatch} />
			<DigitButton digit='6' dispatch={dispatch} />
			<OperationButton operation='-' dispatch={dispatch} />
			<DigitButton digit='1' dispatch={dispatch} />
			<DigitButton digit='2' dispatch={dispatch} />
			<DigitButton digit='3' dispatch={dispatch} />
			<OperationButton operation='+' dispatch={dispatch} />
			<DigitButton digit='.' dispatch={dispatch} />
			<DigitButton digit='0' dispatch={dispatch} />
			<button
				className='span-two'
				onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
			>
				=
			</button>
		</>
	);
}

export default CalcButtons;
