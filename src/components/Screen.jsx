function Screen({ crtOperand, prevOperand, operation }) {
	return (
		<div className='operand-box'>
			<div className='previous-operand'>
				{prevOperand} {operation}
			</div>
			<div className='first-operand'>{crtOperand}</div>
		</div>
	);
}

export default Screen;
