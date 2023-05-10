import './ExpenseItem.css';

import { Expense } from '../models/expenses';
import ExpenseDate from './ExpenseDate';

type Props = {
    expense: Expense
}

function ExpenseItem({expense}: Props){

    const {title, amount, date } = expense;

    return(
        <div className="expense-item">
           <ExpenseDate date={date}/>
           <div className="expense-item__description">
               <h2>{title}</h2>
               <div className="expense-item__price">${amount}</div>
           </div>
       </div>
   );
};

export default ExpenseItem;