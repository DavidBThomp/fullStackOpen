const Notification = ({ message }) => {
    if (message === null) {
      return null
    }

    if (message === 404) {
        return (
            <div className='error'>
            {`The program ran into error: ${message}, user already deleted`}
          </div>
        )
    }
  
    return (
      <div className='success'>
        {message}
      </div>
    )
  }

export default Notification