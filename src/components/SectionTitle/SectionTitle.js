// Создай компонент `<Section title="">`, который рендерит секцию с заголовком и
//   детей (children). Оберни каждый из `<Statistics>` и `<FeedbackOptions>` в
//   созданный компонент секции.

import React from "react";

const SectionTitle = ({ title, children }) => (
  <div>
    <h1>{title}</h1>
    {children}
  </div>
);

export default SectionTitle;
