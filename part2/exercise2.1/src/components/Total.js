const Total = ({ course }) => {
    return(
    <>
        <p><b>Total of {course.course.parts.reduce((total, num) => { return(total + num.exercises) }, 0)} exercises</b></p>
    </>
    )
}

export default Total