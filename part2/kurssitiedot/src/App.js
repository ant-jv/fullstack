import Course from './components/Course'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
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
        }
      ]
    },
    {
      name: 'Joku toinen kurssi',
      id: 2,
      parts: [
        {
          name: 'Toisen kurssin osa 1',
          exercises: 3,
          id: 1
        },
        {
          name: 'Toisen kurssin osa 2',
          exercises: 3,
          id: 2
        },
        {
          name: 'Toisen kurssin osa 3',
          exercises: 3,
          id: 3
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map(course => <Course key={course.id} course={course} />)}
    </div>
  )
}

export default App