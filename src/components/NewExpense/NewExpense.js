import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'

const NewExpense = ({onAddExpense}) => {
  const [isEditing, setIsEditing] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) =>{
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }

    onAddExpense(expenseData)
  }

  const startEditingHandler = () => {
    setIsEditing((prevState) => !prevState)
  }


  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
      {isEditing && <ExpenseForm onCancel={startEditingHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
    </div>
  )
}

export default NewExpense