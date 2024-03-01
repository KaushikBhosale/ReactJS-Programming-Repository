import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import {increment,decrement, incrementByAmount, multiply} from './redux/counter/counterSlice';

export function App() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Welcome to React Redux</h1>
      <button onClick={()=>dispatch(increment())} className='btn btn-danger'>count++</button>
      |   Current Count : {count}   |
      <button  onClick={()=>dispatch(decrement())} className='btn btn-info'>count--</button> <br />
      <button className='btn btn-success' onClick={()=>dispatch(incrementByAmount(6))}>count+6</button>
      <button className='btn btn-warning' onClick={()=>dispatch(multiply())}>count*2</button>
    </div>
  );
}

export default App;
