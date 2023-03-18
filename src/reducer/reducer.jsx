const ACTIONS = {
	CANCEL: 'cancel',
	ALL_CANCEL: 'allCancel',
	OPERATION: 'operation',
	DIGIT: 'digit',
	EVALUATE: 'evaluate',
};

const initialStates = {
	crtOperand: '0',
	prevOperand: null,
	operation: null,
	overwrite: true,
};

const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.ALL_CANCEL:
			return initialStates;
		case ACTIONS.CANCEL:
			if (state.crtOperand.split('').length === 1) {
				return {
					...state,
					crtOperand: '0',
				};
			}

			return {
				...state,
				crtOperand: state.crtOperand.slice(0, -1),
			};
		case ACTIONS.OPERATION:
			if (state.crtOperand === '0' && action.payload === '÷') {
				return { ...state };
			} else if (
				state.crtOperand === '0' &&
				state.overwrite &&
				action.payload === '-'
			) {
				return {
					...state,
					crtOperand: action.payload,
					overwrite: false,
				};
			} else if (state.prevOperand && state.operation) {
				return {
					...state,
					crtOperand: `${state.crtOperand}${action.payload}`,
				};
			}

			return {
				...state,
				operation: action.payload,
				prevOperand: state.crtOperand,
				crtOperand: '',
			};
		case ACTIONS.DIGIT:
			if (state.crtOperand.includes('.') && action.payload === '.') {
				return { ...state };
			} else if (state.crtOperand === '0' && action.payload === '.') {
				return {
					...state,
					crtOperand: `${state.crtOperand}${action.payload}`,
				};
			} else if (state.crtOperand === '0' || state.overwrite) {
				return {
					...state,
					crtOperand: action.payload,
					overwrite: false,
				};
			}
			return { ...state, crtOperand: `${state.crtOperand}${action.payload}` };
		case ACTIONS.EVALUATE:
			if (!state.operation || !state.crtOperand || !state.prevOperand) {
				return { ...state };
			}
			return {
				...state,
				crtOperand: evaluate(state),
				prevOperand: '',
				operation: '',
				overwrite: true,
			};
		default:
			throw new Error();
	}
};

function evaluate({ crtOperand, prevOperand, operation }) {
	const x = parseFloat(prevOperand);
	const y = parseFloat(crtOperand);

	if (isNaN(x) || isNaN(y)) {
		return '0';
	}

	let result = '';

	if (operation === 'x') {
		result = x * y;
	} else if (operation === '÷') {
		result = x / y;
	} else if (operation === '+') {
		result = x + y;
	} else if (operation === '-') {
		result = x - y;
	}

	return result.toString();
}

export { ACTIONS, initialStates, reducer };
