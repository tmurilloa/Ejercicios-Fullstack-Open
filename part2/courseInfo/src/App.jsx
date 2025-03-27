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
const Content = ({parts}) => {
  return(
    <>
      {parts.map((part) => <Part name={part.name} exercises={part.exercises}/> )}
    </>
  )
}

const Course = ({course}) => {
  return(
    <>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
    </>
  )
}



const App = () => {
  const course ={
    id: 1,
    name: 'Half Stack application development',
    parts: [ {
      name: 'Fundamentals of React',
      exercises: 10,
      id: 1
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
      id: 2
    },
    {
      name: 'State of a component',
      exercises: 14,
      id: 3
    },
    {
      name: 'Redux',
      exercises: 11,
      id: 4
    }]
  }

  return (
    <>
      <Course course={course}/>
    </>
  )
}

export default App
