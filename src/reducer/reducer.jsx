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
	overwrite: false,
};

const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.CANCEL:
			console.log('C');
			return { ...state };
		case ACTIONS.ALL_CANCEL:
			console.log('AC');
			return initialStates;
		case ACTIONS.OPERATION:
			console.log(`${action.payload}`);
			return { ...state };
		case ACTIONS.DIGIT:
			if (state.crtOperand === '0') {
				return { ...state, crtOperand: action.payload };
			}
			return { ...state, crtOperand: `${state.crtOperand}${action.payload}` };

		case ACTIONS.EVALUATE:
			console.log('=');
			return { ...state };
		default:
			return initialStates;
	}
};

export { ACTIONS, initialStates, reducer };
