const Header = () => {
  const course = 'Half Stack application development'

  return (
    <>    
      <h1>{course}</h1>
    </>
  )
}

const Part1 = () => {
  const name = 'Fundamentals of React'
  const exercises = 10
  
  return (
    <>
      <p>
        {name} {exercises}
      </p>
    </>
  )
}

const Part2 = () => {
  const name = 'Using props to pass data'
  const exercises = 7

  return (
    <>
      <p>
        {name} {exercises}
      </p>
    </>
  )
}

const Part3 = () => {
  const name = 'State of a component'
  const exercises = 14

  return (
    <>
      <p>
        {name} {exercises}
      </p>
    </>
  )
}

const Content = () => {

  return (
    <>
      <Part1 />
      <Part2 />
      <Part3 />

    </>
  )
}

const Total = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <>    
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  )
}

const App = () => {

  return (
    <>
      <Header />
      <Content />
      <Total />    
    </>
  )
}

export default App
