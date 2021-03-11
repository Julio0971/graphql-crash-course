const express = require('express')
const { graphqlHTTP } = require('express-graphql') 
const schema = require('./schema')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost:27017/graphql-crash-course', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => app.listen(4000, () => {
    console.log('Listening for requests on port 4000')
}))
.catch(error => console.log(error))

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))