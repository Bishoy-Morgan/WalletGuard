import React, {useState, useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState'

const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 1000 ),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
    }

    return (
    <section>
        <h3>Add New Transaction</h3>
            <form 
                onSubmit={onSubmit}>
                <div 
                    className='form-control'>
                    <label 
                        htmlFor='text'>Text</label>
                    <input 
                        type='text'  
                        placeholder='Title of your expense'
                        value={text}
                        onChange={(i) => setText(i.target.value)}
                    />
                </div>
                <div 
                    className='form-control'>
                    <label 
                        htmlFor='amount'>Amount</label>
                    <input 
                        type='number' 
                        placeholder='Insert positive or negavive number' 
                        value={amount}
                        onChange={(i) => setAmount(i.target.value)}
                    />
                </div>
                <button 
                    className='btn'>Add Transaction</button>
            </form>
    </section>
    )
}

export default AddTransaction
