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

const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const updateNumber = (id, newPhone) => {
    const request = axios.put(`${baseUrl}/${id}`, newPhone)
    return request.then(response => response.data)
}

const personsService = {
    getPersons,
    createPerson,
    deletePerson,
    updateNumber
}

export default personsService