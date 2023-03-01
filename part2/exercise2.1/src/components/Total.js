const Total = ({ course }) => {
    return(
    <>
    {course.course.parts.reduce((total, num) => {
        return(
            total + num.exercises
        )
        }, 0)}
    </>
    )
}

export default Total