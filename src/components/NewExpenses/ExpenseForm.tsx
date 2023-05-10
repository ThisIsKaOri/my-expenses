import { ChangeEvent, FormEvent, useState } from 'react';
import './ExpenseForm.css';

type Props = {
    onSubmit: ({title, amount, date} : 
        {title:string, amount: number, date: Date}) => void;
}
const ExpenseForm = ({onSubmit}: Props) => {

    const[enteredTitle, setEnteredTitle] = useState("");
    const[enteredAmount, setEnteredAmount] = useState("");
    const[enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredDate(event.target.value);
    };
    const submitHandler = (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const submittedData = {
            title: enteredTitle,
            amount: Number(enteredAmount),
            date: new Date(enteredDate)
        };

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");

        onSubmit(submittedData);
    };

    return (
        <form action="" onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" 
                        value={enteredTitle} 
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min={0.01} step={0.01}
                        value={enteredAmount} 
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min={2017-1-1} 
                        value={enteredDate} 
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;