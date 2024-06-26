const Header = ({title}) => {
  return (<h1>{title}</h1>)
}

const Part = ({part}) => {
  const { name, excercises } = part;
  
  return (<li>{name} {excercises}</li>)
}

const Content = ({parts}) => {
  return(
    <div>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />      <br />
    </div>
  )
}

const Total = ({total}) => {
  return(
    <>
     Total number of exercises: {total}
    </>
  )
}

const App = () => {
  const course =  'Half Stack application development'
  const parts = [
      {
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
      }
    ]
  
  
  const totExercises = parts.reduce((total, part) => total + part.exercises, 0);

  return (
    <div>
      <Header title={course} />
      <p><b>Table of contents:</b></p>
      <Content parts={parts} />
      <Total total={totExercises} />
    </div>
  )
}

export default App


