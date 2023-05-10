import './Card.css';

type Props = {
    children?: string | JSX.Element | JSX.Element[];
    className?: string;
}

const Card = ({children, className}: Props) => {

    const classes = `card ${className}`;

    return (
        <div className={classes}>{children}</div>
    );
};

export default Card;