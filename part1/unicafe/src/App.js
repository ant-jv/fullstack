import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <p>
        <Button clickHandler={() => setGood(good+1)} text="Good"/>
        <Button clickHandler={() => setNeutral(neutral+1)} text="Neutral"/>
        <Button clickHandler={() => setBad(bad+1)} text="Bad"/>
      </p>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.clickHandler}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.good !== 0 || props.neutral !== 0 || props.bad !== 0){
    let average = ((-props.bad + props.good)/3).toFixed(1);
    let positivePercentage = (props.good / (props.bad+props.neutral+props.good)*100).toFixed(1) + "%";
    return (
      <div>
        <h2>statistics</h2>
        <table>
          <tbody>
            <StatisticLine text="Good: " value={props.good}/>
            <StatisticLine text="Neutral: " value={props.neutral}/>
            <StatisticLine text="Bad: " value={props.bad}/>
            <StatisticLine text="Average: " value={average}/>
            <StatisticLine text="Positive: " value={positivePercentage}/>
          </tbody>
        </table>
      </div>
    )
  }
  return "No feedback given";
}

export default App