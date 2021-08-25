import React from "react";

import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import SectionTitle from "./components/SectionTitle";
import Notification from "./components/Notification";

import "./App.css";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  сounterReviews = (option) => {
    // console.log(option.target.name);
    this.setState((prevState) => ({
      [option.target.name]: prevState[option.target.name] + 1,
    }));
  };

  render() {
    const totalFeedback = this.state;
    // console.log(totalFeedback);
    const countTotalFeedback = Object.keys(totalFeedback).reduce(
      (acc, key) => acc + totalFeedback[key],
      0
    );

    const { good } = this.state;
    const countPositiveFeedbackPercentage = Math.round(
      (100 * good) / countTotalFeedback
    );
    // console.log(countPositiveFeedbackPercentage);

    const allReviews = [
      { name: "good", color: "lime" },
      { name: "neutral", color: "yellow" },
      { name: "bad", color: "red" },
    ];

    return (
      <div>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            options={allReviews}
            onLeaveFeedback={this.сounterReviews}
          />
        </SectionTitle>

        <SectionTitle title="Statistics">
          {countTotalFeedback === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          )}
        </SectionTitle>
      </div>
    );
  }
}

export default App;

//  {/* <ul>
//           <li>
//             <button type="button" onClick={this.сounterGoodReviews}>
//               Good
//             </button>
//           </li>
//           <li>
//             <button type="button" onClick={this.сounterNeutralReviews}>
//               Neutral
//             </button>
//           </li>
//           <li>
//             <button type="button" onClick={this.сounterBadReviews}>
//               Bad
//             </button>
//           </li>
//         </ul> */}

// сounterGoodReviews = () => {
//   this.setState((prevState) => {
//     return {
//       good: prevState.good + 1,
//     };
//   });
// };

// сounterNeutralReviews = () => {
//   this.setState((prevState) => {
//     return {
//       neutral: prevState.neutral + 1,
//     };
//   });
//   // console.log("Увеличить neutral");
// };

// сounterBadReviews = () => {
//   this.setState((prevState) => {
//     return {
//       bad: prevState.bad + 1,
//     };
//   });
//   // console.log("Увеличить bad");
// };
