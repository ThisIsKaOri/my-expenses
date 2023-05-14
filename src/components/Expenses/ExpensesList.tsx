import { Expense } from '../../models/expenses';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

type Props = {
    expenses: Expense[];
    year: string;
}

const ExpensesList = ({expenses, year}: Props) => {

    if(expenses.length === 0) {

        return <h2 className='expenses-list__fallback'>No expenses for {year}</h2>;
    };

    return (
        <ul className='expenses-list'>
            {expenses.map((item) => <ExpenseItem key={item.id} expense={item}/>)}
        </ul>
    );
};

export default ExpensesList; 