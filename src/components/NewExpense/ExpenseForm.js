import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseForm = ({onSaveExpenseData}) => {
    const [titleInput, setTitleInput] = useState('')
    const [amountInput, setAmountInput] = useState('')
    const [dateInput, setDateInput] = useState('')

    const titleChangeHandler = (event) => {
        setTitleInput(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setAmountInput(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setDateInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const expenseData = {
            title:titleInput,
            amount: amountInput,
            date: new Date(dateInput)
        }

        setTitleInput('')
        setAmountInput('')
        setDateInput('')

        onSaveExpenseData(expenseData)

    }

  return (
    <form onSubmit={handleSubmit}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={titleInput} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" value={amountInput} onChange={amountChangeHandler} min="0.01" step="0.01"/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" value={dateInput} onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31"/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="submit">Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm