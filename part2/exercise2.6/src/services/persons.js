import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getPersons = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const createPerson = (nameObject) => {
    const request = axios.post(baseUrl, nameObject)
    return request.then(response => response.data)
}

const personsService = {
    getPersons,
    createPerson
}

export default personsService