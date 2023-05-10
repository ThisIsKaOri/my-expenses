import './NewExpense.css';

import ExpenseForm from './ExpenseForm';
import { Expense } from '../../models/expenses';

type Props = {
    
    onAdd: (expense: Expense) => void;
}

const NewExpense = ({onAdd}: Props) => {

    const submittedDataHandler = ({title, amount, date} : 
        {title: string,  amount: number, date: Date}) => {

        const newExpenseData = {

            id: Math.random().toString(),
            title: title,
            amount: amount,
            date: date
        };

        onAdd(newExpenseData);
    }

    return(
        <div className='new-expense'>
            <ExpenseForm onSubmit={submittedDataHandler}/>
        </div>
    );
};

export default NewExpense;