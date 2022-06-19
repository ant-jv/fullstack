const Course = ({course}) => {
    const total = course.parts.reduce((total, part) => total + part.exercises, 0)
    return (
        <div>
        <Header name={course.name} />
        {course.parts.map(part => 
            <Part key={part.id} part={part.name} exercises={part.exercises} />
        )}
        <Total total={total} />
        </div>
    )
}

const Header = ({name}) => <h1>{name}</h1>

const Part = ({part, exercises}) => <p>{part} {exercises}</p>

const Total = ({total}) => <p><strong>total of {total} exercises</strong></p>

export default Course