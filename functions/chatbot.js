const projectId = 'chat-bot-reactjs'; //https://dialogflow.com/docs/agents#settings
const sessionId = 'chat-bot-reactjs-session';
const query = 'hello';
const languageCode = 'en-US';

// Instantiate a DialogFlow client.
const dialogflow = require('dialogflow');
const sessionClient = new dialogflow.SessionsClient();
 
// Define session path
const sessionPath = sessionClient.sessionPath(projectId, sessionId);


  
const chatbot = ({ message }) => {
    // The text query request.
    const request = {
        session: sessionPath,
        queryInput: {
        text: {
            text: message,
            languageCode: languageCode,
        },
        },
    };
    return sessionClient.detectIntent(request)
}

module.exports = chatbot