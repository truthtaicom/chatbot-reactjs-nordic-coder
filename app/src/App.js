import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Message } from './components/Message'
import { Conversation } from './components/Conversation'
import { InputText } from './components/InputText'
import { connect } from 'react-redux'
import { sendRequestToBot } from './redux/actions/chatbotActions'

class App extends Component {
  onSubmit = ({ msg }) => {
    const userRequest = {
      user: "USER",
      message: msg
    }
    this.props.sendRequestToBot(userRequest)
  }
  
  render() {
    return (
      <div className="App">
        <Conversation>
          {
            this.props.data.map((elm, idx) => (
              <Message key={`${idx}_${new Date()}`} user={elm.user} message={elm.message}/>
            ))
          }
        </Conversation>
        <InputText onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    load: state.chatBotReducer.load,
    data: state.chatBotReducer.data,
    error: state.chatBotReducer.error
  }
}

const mapDispatchToProps = ({
  sendRequestToBot
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
