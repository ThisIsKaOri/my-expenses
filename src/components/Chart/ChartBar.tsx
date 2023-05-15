import './ChartBar.css';

type Props = {

    monthAmounts: {label: string, value: number};
    maxValue: number;
}

const ChartBar = ({monthAmounts: {label, value}, maxValue}: Props) => {

    let barFillHeight = '0%';

    if(maxValue > 0) {
        //vado a calcolare la percentuale di riempimento 
        barFillHeight = Math.round((value / maxValue) *100) + '%';
    };

    return(
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
            </div>
            <div className="chart-bar__label">{label}</div>
        </div>
    );
}

export default ChartBar;