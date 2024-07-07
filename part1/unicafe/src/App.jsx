import { useState } from 'react'

const Title = ({text}) => {
  return (<h1>{text}</h1>)
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick} style={{padding:10, margin:10, width:80}}>
      {text}
    </button>
  )
}

const StatisticLine = ({result}) => {
  return (
  <tr>
    <td style={{border: '1px solid #dddddd', padding:10}}>{result.text}</td>
    <td style={{border: '1px solid #dddddd', padding:10, width:50}}>{result.value}</td>
  </tr>
  )}

const Finalresults = ({results}) => {
  const [good, neutral, bad] = results

  const total = {
    text: 'Total',
    value: results.reduce((total, result) => total + result.value, 0)
  }

  if (total.value === 0) return <p>No information available yet. Leave a feedback to see the results.</p>

  const average = {
    text: 'Average',
    value: ((good.value-bad.value) / total.value).toFixed(2)
  }

  const positive = {
    text: '% of positive feedback',
    value: ((good.value / total.value) * 100).toFixed(0) + '%'
  }
  return (
    <table style={{border: '1px solid #dddddd'}}>
      <tbody>
        <StatisticLine result={good} />
        <StatisticLine result={neutral} />
        <StatisticLine result={bad} />
        <StatisticLine result={total} />
        <StatisticLine result={average} />
        <StatisticLine result={positive} />
      </tbody>
    </table>
  )
}


const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <>
      <Title text={'Unicafe reviews'} />
      <Button onClick={handleGood} text='Good' />
      <Button onClick={handleNeutral} text='Neutral' />
      <Button onClick={handleBad} text='Bad' />
      <Title text={'Results'} />
      <Finalresults results={[
        { text: 'Good', value: good },
        { text: 'Neutral', value: neutral },
        { text: 'Bad', value: bad }
      ]} />
    </>      
    )
}

export default App