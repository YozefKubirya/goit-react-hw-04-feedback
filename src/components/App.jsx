import React, { useState } from "react"
import { Section } from "./Section/Section";
import { FeedBackOptions } from "./FeedBackOptions/FeedBackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
export  const App = () => {
  const [feedback, setFeedbackState] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })
  const { good, neutral, bad } = feedback;
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

 const countPositiveFeedback = () => {
   const result = Math.round((good / (good + neutral + bad)) * 100);
    return result;
 }
 const  handleClick = (e) => {
    const { name } = e.target;
    setFeedbackState(prevState=>({ ...prevState,[name]: prevState[name] + 1}));
 }
    const options = Object.keys(feedback);
  return (
    <>
        <Section title={"Please leave feedback"}>
        <FeedBackOptions options={options} onLeaveFeedback={handleClick} />
      </Section>
           <Section title={"Statistics"}>
         {countTotalFeedback() > 0 ?
    <Statistics good={good} neutral={neutral} bad={bad} positivePercentage={countPositiveFeedback()} total={countTotalFeedback()}>
            </Statistics> :
            <Notification title={"There is no feedback"}></Notification>} 
        </Section>
    </>
  )
}
 
