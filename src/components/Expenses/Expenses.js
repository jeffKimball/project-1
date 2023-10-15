import './Expenses.css'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import { useState } from 'react'

const Expenses = ({ items }) => {
    const [filteredYear, setFilteredYear] = useState('2022')

    const getFilteredYear = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredItems = items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear
    })


    return (        
        <li>                            
            <Card className='expenses'>
                <ExpenseFilter selected={filteredYear} onYearSelect={getFilteredYear}/>
                <ExpensesList filteredList={filteredItems}/>                   
            </Card>
        </li>        
    )
}

export default Expenses