import React, { useState, useReducer, useMemo } from 'react'
import CounterTwo from './CounterTwo'

const initialState = 0
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		case 'reset':
			return initialState
		default:
			return state
	}
}


function factorialOf(n) {
	console.log("factorialOf(n) called!");
	return n <= 0 ? 1 : n * factorialOf(n - 1);
}

function CounterOne() {
	console.log('CounterOne');
	const [number, setNumber] = useState(1);
	const [count, dispatch] = useReducer(reducer, initialState)

    // useMemo will store memoiezed results of factorialOf function so factorialOf will be not rerender  
	const factorial = useMemo(() => factorialOf(number), [number]);
	// const factorial = factorialOf(number)
	const onChange = (event) => {
		setNumber(Number(event.target.value));
	};
	return (
		<div>
			<div>Count = {count}</div>
			<button onClick={() => dispatch('increment')}>Increment</button>
			<button onClick={() => dispatch('decrement')}>Decrement</button>
			<button onClick={() => dispatch('reset')}>Reset</button>
			<CounterTwo/>
			<div>
				Factorial of
				<input type="number" value={number} onChange={onChange} />
				is {factorial}
			</div>
		</div>
	)
}

export default React.memo(CounterOne)