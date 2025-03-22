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
const Statistics = (props) => {
  const [objGood, objNeutral, objBad, objAll, objAverage, objPositive] = props.props
  if (objAll.cont > 0){
    return(
      <>
      <h1>Statistics</h1>
      <table>
      <StatisticsLine name={objGood.name} contador={objGood.cont}/>
      <StatisticsLine name={objNeutral.name} contador={objNeutral.cont}/>
      <StatisticsLine name={objBad.name} contador={objBad.cont}/>
      <StatisticsLine name={objAll.name} contador={objAll.cont}/>
      <StatisticsLine name={objAverage.name} contador={objAverage.cont}/>
      <StatisticsLine name={objPositive.name} contador={objPositive.cont}/>
      </table>
      </>
    )
  } 
  return(
    <h2>No feedback given</h2>
  )
}
const StatisticsLine = ({name, contador}) => {
  return(
    <>
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{contador}</td>
      </tr>
    </tbody>
    </>
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
    setAverage(promedio)
  }

  //Definicion de los objetos para pasarlos a los componentes
  const arrayObj = [{
    name: "good",
    cont: contGood
  },
  {
    name: "neutral",
    cont: contNeutral
  },
  {
    name: "bad",
    cont: contBad
  },
  {
    name: "all",
    cont: all
  },
  {
    name: "average",
    cont: average/all
  },
  {
    name: "positive",
    cont: positive + " %"
  }
  ]


  return (
    <div>
      <GiveFeedback/>
      <Button name={"good"} handler={handleGoodClick}/>
      <Button name={"neutral"} handler={handleNeutralClick}/>
      <Button name={"bad"} handler={handleBadClick}/>
      <Statistics props={arrayObj}/>
      
    </div>
  )
}

export default App
