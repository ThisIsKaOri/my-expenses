import './Chart.css';
import ChartBar from './ChartBar';

type Props = {

    monthlyAmounts: {label: string, value: number}[]
}

const Chart = ({monthlyAmounts}: Props) => {

    //qui prendo solo i value dall'array di oggetti dataPoints
    const amounts = monthlyAmounts.map(month => month.value);
    //qui prendo il valore piú alto per settare il massimo
    const maxAmount = Math.max(...amounts);

    return (
        <div className="chart">
            {monthlyAmounts.map((month) => (
            <ChartBar 
                key={month.label} 
                monthAmounts={month}
                maxValue={maxAmount}
            />))}
        </div>
    );
}

export default Chart;