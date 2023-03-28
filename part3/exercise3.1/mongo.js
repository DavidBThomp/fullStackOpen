const mongoose = require('mongoose')

if (process.argv.length > 5) {
  console.log('Incorrect format: node mongo.js [password] [phoneName] [phoneNumber]')
  process.exit(1)
}

const password = encodeURIComponent(process.argv[2])
const phoneNameArg = process.argv[3]
const phoneNumberArg = process.argv[4]

// The database is determined after the last forward slash
const url =
  `mongodb+srv://davidbthomp:${password}@cluster0.yq92yht.mongodb.net/phoneBook?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const numberSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Number = mongoose.model('Number', numberSchema)

// 
// Finding notes with query
// 



// 
// Adding Notes
// 


if (phoneNameArg && phoneNumberArg !== undefined) {
const number = new Number({
  name: phoneNameArg,
  number: phoneNumberArg,
})

number.save().then(result => {
  console.log(`Added: ${phoneNameArg} number ${phoneNumberArg} to phonebook`)
  mongoose.connection.close()
})
} else {
  console.log('Phonebook:')
  Number.find({}).then(result => {
    result.forEach(note => {
      console.log(`${note.phoneName} ${note.phoneNumber}`)
    })
    mongoose.connection.close()
})
}