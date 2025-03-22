import { useState } from 'react'

const Button = ({name, handler}) => {
  return(
    <button onClick={handler}>{name}</button>
  )
}
const GiveFeedback = () => {
  return(
    <h1>Give feedback</h1>
  )
}
const Statistics = () => {
  return(
    <h1>Statistics</h1>
  )
}
const Counter = ({name, contador}) => {
  return(
    <p>{name} {contador}</p>
  )
}

function App() {
  const [contGood, setContGood] = useState(0)
  const [contNeutral, setContNeutral] = useState(0)
  const [contBad, setContBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {

    const updatedGood = contGood + 1
    setContGood(updatedGood)

    const updatedAll = updatedGood + contNeutral + contBad
    setAll(updatedAll)

    const porcentaje = (updatedGood/updatedAll) * 100
    setPositive(porcentaje.toFixed(5))

    const promedio = (average + 1) 
    console.log(average)
    setAverage(promedio)
  }
  const handleNeutralClick = () => {
    const updatedNeutral = contNeutral + 1
    setContNeutral(updatedNeutral)

    const updatedAll = updatedNeutral + contGood + contBad
    setAll(updatedAll)

    const porcentaje = (contGood/updatedAll) * 100
    setPositive(porcentaje.toFixed(5))

    const promedio = (average + 0) 
    console.log(promedio)
    setAverage(promedio)
  }
  const handleBadClick = () => {
    const updatedBad = contBad + 1
    setContBad(updatedBad)

    const updatedAll = updatedBad + contGood + contNeutral
    setAll(updatedAll)

    const porcentaje = (contGood/updatedAll) * 100
    setPositive(porcentaje.toFixed(5))

    const promedio = (average - 1) 
    console.log(promedio)
    setAverage(promedio)
  }

  return (
    <div>
      <GiveFeedback/>
      <Button name={"good"} handler={handleGoodClick}/>
      <Button name={"neutral"} handler={handleNeutralClick}/>
      <Button name={"bad"} handler={handleBadClick}/>
      <Statistics/>
      <Counter name={"good"} contador={contGood}/>
      <Counter name={"neutral"} contador={contNeutral}/>
      <Counter name={"bad"} contador={contBad}/>
      <Counter name={"all"} contador={all}/>
      <Counter name={"average"} contador={average/all}/>
      <Counter name={"positive"} contador={positive + " %"}/>
    </div>
  )
}

export default App
