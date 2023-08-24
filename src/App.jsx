import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { increment, decrement, reset, incrementByAmount } from './app/featchers/counter/counterSlice'
import { useState } from 'react'

function App() {
    const [value, setValut] = useState(0)
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    const handelChange = (e)=>{
        
            const inputValue = parseInt(e.target.value || 0)
            setValut(inputValue)
            dispatch(incrementByAmount(inputValue))
       
    }

    return (
        <>
            <div style={{ display: 'flex', gap: '30px' }}>
                <input type="number"  onChange={handelChange} />
                <button onClick={() => dispatch(increment())} className='btn btn-success'>Increment</button>
                <h3>Counter : {count }</h3>
                <button onClick={() => dispatch(decrement())} className='btn btn-success'>Decrement</button>
            </div>
            <button className='btn btn-danger' onClick={() => dispatch(reset())}>Reset</button>
        </>
    )
}

export default App
