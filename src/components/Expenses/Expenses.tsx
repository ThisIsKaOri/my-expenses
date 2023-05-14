import './Expenses.css';

import { Expense } from '../../models/expenses';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';


type Props = {
    expenses: Expense[];
}

const Expenses = ({expenses}: Props) => {

    const [filteredYear, setFilteredYear] = useState("2023");

    const filterHandler = (selectedYear: string) => {

        setFilteredYear(selectedYear);
    }

    const filteredExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear() === Number(filteredYear);
    });

    

    return (
        <>
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilter={filterHandler}/>
            <ExpensesList expenses={filteredExpenses} year={filteredYear}/>
        </Card>
        </>
    );
};

export default Expenses;