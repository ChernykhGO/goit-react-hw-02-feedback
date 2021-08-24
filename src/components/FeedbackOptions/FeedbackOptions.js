// - Вынеси блок кнопок в компонент
//   `<FeedbackOptions options={} onLeaveFeedback={}>`.

import React from "react";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((option) => (
      <button
        type="button"
        key={option.name}
        name={option.name}
        style={{ backgroundColor: option.color }}
        onClick={onLeaveFeedback}
      >
        {option.name}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
