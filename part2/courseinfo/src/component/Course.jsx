const Header = ({ title }) => {
  return <h2>{title}</h2>;
};

const Part = ({ part }) => {
  const { name, exercises, id } = part;
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

const Total = ({ total }) => {
  return <strong>total of {total} exercises</strong>;
};

const Course = ({ course }) => {
  const total = course.parts.reduce((acc, part) => acc + part.exercises, 0);

  return (
    <section>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </section>
  );
};

export default Course;
