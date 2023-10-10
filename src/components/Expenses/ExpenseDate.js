import React from 'react'
import './ExpenseDate.css'

 const ExpenseDate = ({date}) => {
    const convertedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' })
    const month = date.toLocaleDateString('en-us', {month: 'long'})
    const year = date.toLocaleDateString('en-us', {year: 'numeric'})
    const day = date.toLocaleDateString('en-us', {day: '2-digit'})
  return (
    <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>        
        <div className='expense-date__day'>{day}</div>
    </div>
  )
}


export default ExpenseDate