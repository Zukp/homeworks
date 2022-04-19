import './ExpenseEnd.css';
import { useState } from 'react';
function ExpenseEnd(){
    const [value,setValue] = useState('')
    const [result,setReult] = useState([])
    function handValue(event) {
        setValue(event.target.value)
    }

    function onClick(){
        if(value.trim() === ''){
            return
        }
        setReult([...result,{value:value}])
        setValue('')
        alert('сиздин email серверге кетти  ' + value)
    }
    return (
        <div>
            <div className='cont-register'>
                <h3>Subscrirbe to Our Newsletter for weekly Article Update </h3>
                <p>we have hiking-redated blog wosan share our thought
                 ruthiy in our that upated We will not spam you we promise</p>
                 <input value={value} onChange={handValue} placeholder='email your e-mail addres' />
                 <button onClick={onClick}>Subscribe</button>
                 <div>
                     {result.map((el,index)=>{
                         return <div key={index}>{el.value}</div>
                     })}
                 </div>
            </div>
        </div>
    )
}
export default ExpenseEnd