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
    const total = parts.reduce((acum, part) =>part.exercises + acum, 0)
    return(
      <>
        {parts.map((part) => <Part name={part.name} exercises={part.exercises} key={part.id}/> )}
        <b>total of {total} exercises</b>
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

export default Course