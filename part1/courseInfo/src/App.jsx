const Header = ({course}) => {
  return (
    <h1>
      {course}
    </h1>
  )
}

const Part = ({name, exercises}) => {
  return(
    <p>
      {name} {exercises}
    </p>
  )

}
const Content = (parts) => {
  const part1 = parts.parts[0]
  const part2 = parts.parts[1]
  const part3 = parts.parts[2]
  return(
    <div>
      <Part name={part1.name} exercises={part1.exercises}/>
      <Part name={part2.name} exercises={part2.exercises}/>
      <Part name={part3.name} exercises={part3.exercises}/>
    </div>
  )
}

const Total = (props) => {
  const array = props.parts
  const suma = array[0].exercises + array[1].exercises + array[2].exercises 
  return(
    <p>
      Numer of exercises {suma}
    </p>
  )
}


const App = () => {
  const course ={
    name: 'Half Stack application development',
    parts: [ {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App
