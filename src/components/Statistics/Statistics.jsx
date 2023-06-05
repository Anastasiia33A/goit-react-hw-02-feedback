import PropTypes from 'prop-types';
import css from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  
    return (
        <div>
            <ul className={css.item}>
                <li >
                    <p className={css.btnName}> Good: {good}</p>
                </li>
                <li >
                    <p className={css.btnName}>Neutral: {neutral}</p>
                </li>
                <li >
                    <p className={css.btnName}>Bad: {bad}</p>
                </li>
                <li >
                    <p className={css.btnName}>Total: {total}</p>
                </li>
                <li className={css.list}>
                    <p className={css.btnName}>Positive feedback: {positiveFeedback} %</p>
                </li>
            </ul>
        </div>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;