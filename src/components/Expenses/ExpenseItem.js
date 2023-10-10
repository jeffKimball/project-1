import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate' 
import Card from '../UI/Card'
import {useState} from 'react'

const ExpenseItem = ({title, amount, date}) => {
    const [titleOutput, setTitleOutput] = useState(title)

    const changeTitleHandler = () =>{
        setTitleOutput("Title Changed") 
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={date}/>
            <div className='expense-item__description'>
                <h2>{titleOutput}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>  
            <button onClick={changeTitleHandler}>ChangeTitle</button>          
        </Card>
    )
}

export default ExpenseItem
