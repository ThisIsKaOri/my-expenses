import { ChangeEvent } from 'react';

import './ExpensesFilter.css';

type Props = {
  selected: string
  onFilter: (year: string) => void;
}

const ExpensesFilter = ({selected, onFilter}: Props) => {


    const onSelectHandler = (event: ChangeEvent<HTMLSelectElement>) => {

        const enteredYear = event.target.value;
        onFilter(enteredYear);
    };


    return (
        <div className='expenses-filter'>
          <div className='expenses-filter__control'>
            <label>Filter by year</label>
            <select value={selected} onChange={onSelectHandler}>
              <option value='2023'>2023</option>
              <option value='2022'>2022</option>
              <option value='2021'>2021</option>
              <option value='2020'>2020</option>
              <option value='2019'>2019</option>
              <option value='2018'>2018</option>
              <option value='2017'>2017</option>
            </select>
          </div>
        </div>
    );
};

export default ExpensesFilter;