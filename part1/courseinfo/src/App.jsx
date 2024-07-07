const Header = ({title}) => {
  return (<h1>{title}</h1>)
}

const Part = ({part}) => {
  const { name, numExercise } = part;
  
  return (<li>{name}: {numExercise}</li>)
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

const Total = ({totalExcercises}) => {
  return(
    <>
     Total number of exercise: {totalExcercises}
    </>
  )
}


const App = () => {
  
  const course = {
    title: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        numExercise: 10
      },
      {
        name: 'Using props to pass data',
        numExercise: 7
      },
      {
        name: 'State of a component',
        numExercise: 14
      }
    ]
  }
  
  const totnumExcercise = course.parts.reduce((totalExcercises, part) => totalExcercises + part.numExercise, 0);

  return (
    <div>
      <Header title={course.title} />
      <p><b>Table of contents:</b></p>
      <Content parts={course.parts} />
      <Total totalExcercises={totnumExcercise} />
    </div>
  )
}

export default App
