import Part from './Part'

const Content = ({ course }) => {
    return (
        <div>
          <Part part={course.course.parts[0].name} exercises={course.course.parts[0].exercises}/>
          <Part part={course.course.parts[1].name} exercises={course.course.parts[1].exercises}/>
          <Part part={course.course.parts[2].name} exercises={course.course.parts[2].exercises}/>
        </div>
      )
}

export default Content