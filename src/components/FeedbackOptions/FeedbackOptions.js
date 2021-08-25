// - Вынеси блок кнопок в компонент
//   `<FeedbackOptions options={} onLeaveFeedback={}>`.

import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((option) => (
      <button
        type="button"
        key={option.name}
        name={option.name}
        style={{ backgroundColor: option.color }}
        className={styles.button}
        onClick={onLeaveFeedback}
      >
        {option.name}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string,
    })
  ),
};
