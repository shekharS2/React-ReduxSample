import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, logIn } from './actions/index.js';
import './App.css';

function App() {
	const counter = useSelector(state => state.counter);
	const isLoggedIn = useSelector(state => state.logIn);
	const dispatch = useDispatch();

	return (
		<div className="App">
			{isLoggedIn ? (<>
				<h1>Counter: {counter}</h1>
				<button onClick={() => dispatch(decrement(5))} >-</button>
				<button onClick={() => dispatch(increment(10))} >+</button>
				</>) 
				: 
				''
			}
			<h3>{isLoggedIn ? 
				<button onClick={() => dispatch(logIn())} >LOG OUT</button>
				:
				<button onClick={() => dispatch(logIn())} >LOG IN</button>
			}</h3>
		</div>
	);
}

export default App;
