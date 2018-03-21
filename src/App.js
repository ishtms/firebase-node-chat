import React, { Component } from 'react';
import ThreadDisplay from './ThreadDisplay/components/ThreadDisplay';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    var config = {
    apiKey: "AIzaSyCcNoxdOIURkT5QvIyDdtmwgdUF2i_1d_w",
    authDomain: "appsimity-chat.firebaseapp.com",
    databaseURL: "https://appsimity-chat.firebaseio.com",
    projectId: "appsimity-chat",
    storageBucket: "appsimity-chat.appspot.com",
    messagingSenderId: "757610625434"
  };

    this.app = firebase.initializeApp(config);
    this.database = this.app.database();
  }

  render() {
    return (
      <ThreadDisplay database={this.database} />
    );
  }
}

export default App;
