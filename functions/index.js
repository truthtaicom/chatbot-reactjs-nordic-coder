const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const chatbot = require('./chatbot')

const app = express()
app.use(cors({ origin: true }))

app.post('/bot', (request, response) => {
    const { message } = request.body
    chatbot({ message })
    .then((result) => {
        const responseFromBot = result[0].queryResult.fulfillmentText
        console.log('User: >>> ', message)
        console.log('Bot: >>> ', responseFromBot)
        return response.send(result);
    })
    .catch((error) => {
        console.log(error)
    })
    
})

exports.api = functions.https.onRequest(app)
