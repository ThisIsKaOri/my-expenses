import './Expenses.css';

import { Expense } from '../../models/expenses';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';


type Props = {
    expenses: Expense[];
}

const Expenses = ({expenses}: Props) => {

    return (
        <Card className="expenses">
        {expenses.map((item) => <ExpenseItem expense={item}/>)}
        </Card>
    );
};

export default Expenses;