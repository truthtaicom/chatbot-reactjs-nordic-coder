//https://dialogflow.com/docs/agents#settings
const projectId = 'chat-bot-reactjs'; 
const sessionId = 'chat-bot-reactjs-session';
const languageCode = 'en-US';
const query = 'hi'

// Instantiate a DialogFlow client.
const dialogflow = require('dialogflow');
const sessionClient = new dialogflow.SessionsClient();
 
// Define session path
const sessionPath = sessionClient.sessionPath(projectId, sessionId);


// The text query request.
const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: query,
        languageCode: languageCode,
      },
    },
  };

const chatbot = () => sessionClient.detectIntent(request)
module.exports = chatbot