import Course from "./component/Course";

const App = () => {

  const courses = [
    {
      id: 1,
      title: 'Half Stack application development',
      parts: [
        { id: 1, topic: 'Fundamentals of React', numExcercises: 10 },
        { id: 2, topic: 'Using props to pass data', numExcercises: 7 },
        { id: 3, topic: 'State of a component', numExcercises: 14 },
        { id: 4, topic: 'Redux', numExcercises: 11 },
      ]
    },
    {
      id: 2,
      title: 'Node.js',
      parts: [
        { id: 1, topic: 'Routing', numExcercises: 3 },
        { id: 2, topic: 'Middlewares', numExcercises: 7 },
      ]
    }
  ];

  return (
    <div>
      <h1>Web Development Curriculum</h1>
      
      {courses.map(course => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

export default App;
