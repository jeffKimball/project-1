import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import { useState } from 'react'

const Expenses = ({ items }) => {
    const [filteredYear, setFilteredYear] = useState('2022')

    const getFilteredYear = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredItems = items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear
    })

    let expensesContent = <p style={{color:'red'}}>No Expenses found</p>

    if(filteredItems.length > 0){
        expensesContent = filteredItems.map(expense => (
            <ExpenseItem 
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
            ))
    }

    return (
        
            <div>                            
                <Card className='expenses'>
                    <ExpenseFilter selected={filteredYear} onYearSelect={getFilteredYear}/>
                    {expensesContent}                    
                </Card>
        </div>
        
    )
}

export default Expenses