const Header = ({ title }) => {
    return <h2>{title}</h2>;
};

const Part = ({ part }) => {
    const { topic, numExcercises } = part;
    return <p>{topic} {numExcercises}</p>;
};

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part => (
                <Part key={part.id} part={part} />
            ))}
        </div>
    );
};

const Total = ({ total }) => {
    return (
        <strong>Total of {total} exercises</strong>
    );
};

const Course = ({ course }) => {
    const totalExercises = course.parts.reduce((accumulator, part) => accumulator + part.numExcercises, 0);

    return (
        <section>
            <Header title={course.title} />
            <Content parts={course.parts} />
            <Total total={totalExercises} />
        </section>
    );
};

export default Course;
