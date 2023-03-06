import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ( {courses} ) => {
    return (
    <div>
        {courses.map((course) => {
            return (
                <div key={course.id}>
                <Header course={course}/>
                <Content course={course} />
                <Total course={course} />
                </div>
            )
        })}
    </div>
    )
}


export default Course