import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul >
        {Object.keys(options).map(btnName => {
            return (
                <li className={css.list} key={btnName} ><button className={css.button} type="button" onClick={onLeaveFeedback}>{btnName}</button>
                </li>
                );
        })}
    </ul>
    );
};


FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

// options.map(option => (
        
//         <button type="button" key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>
//     ))