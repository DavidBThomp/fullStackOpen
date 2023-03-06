import Part from './Part'

const Content = ({ course }) => {
    return (
        <div>
          {course.parts.map((part, i) => {
            return(
            <p key={i}>
             <Part part={part.name} exercises={part.exercises} keyValue={i}/>
            </p>
            )
          })}
        </div>
      )
}

export default Content