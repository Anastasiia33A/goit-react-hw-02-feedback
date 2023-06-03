import PropTypes from 'prop-types';
import css from './statistics.module.css'

function Statistics({ good, neutral, bad, total, positiveFeedback }) {
  
    return (
        <div>
            <ul>
                <li>
                    <p className={css.good}>Good: {good}</p>
                </li>
                <li>
                    <p>Neutral: {neutral}</p>
                </li>
                <li>
                    <p>Bad: {bad}</p>
                </li>
                <li>
                    <p>Total: {total}</p>
                </li>
                <li>
                    <p>Positive feedback: {positiveFeedback}</p>
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