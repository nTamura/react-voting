import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Register from './components/Register'
import Signin from './components/Signin'
import fire from './firebase'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={    
      isLoggedIn: false, 
      user: '',
      // polls: [] 
      //dont need this until we create dynamic polls
    }    
  }
  
  // Register user to Firebase
  register = (e) => {
    e.preventDefault()
    let email = e.target.userEmail.value
    let password = e.target.userPassword.value
    fire.auth().createUserWithEmailAndPassword(email, password)
      .catch(function (err) {
        console.log('signed up')
      })
  }

  // Log in to app
  login = (e) => {
    let email = e.target.userEmail.value
    let password = e.target.userPassword.value
    let user = {
      email: e.target.userEmail.value,
      password: e.target.userPassword.value
    }
    fire.auth().signInWithEmailAndPassword(email, password)
      .catch(function (error) {
      // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
    this.setState({
      isLoggedIn: true,
      user: user
    }, () => {
      console.log('isLoggedIn:', this.state.isLoggedIn)
      console.log(this.state);
    })
  }

  hacker = () => {
    // e.preventDefault()
    let user = {
      username: 'Hacker',
      email: "hacking@1337.com"
    }
    this.setState({
      isLoggedIn: true, 
      user: user,
    }, () => {
      console.log('welcome hack0r')
      console.log(this.state);
    })
  }

  logout = () => {
    this.setState({
      user: null, 
      isLoggedIn: false
    }, () => {
      console.log('Successfully logged out');
      console.log(this.state);
    })
  }

  triggerLoggedInAlert = () => {
    // (isLoggedIn) 
    // this.setState({
    //   i dunno show bootstra alert for success login
    // })
  }
  
  submitForm = (ev) => {
    ev.preventDefault()
    this.setState({
      fireRedirect: true
    })
  }

  votePoll = (vote) => {
    fire.database().ref('polls/' + vote.pollId).push( vote )
    .then(
      console.log(vote, 'success')
    )
  }

  getVotes = () => {
    // fire.database.ref('polls/')
    // get POLLNAME.pollId.userVote.reduce
    // push to each array, display to results 
  }


  render() {

    return (
      <div className="App">
        <Navbar 
          logout={this.logout} 
          isLoggedIn={this.state.isLoggedIn} />
<div className="container">

        <Switch>
          {/* should render register on /, then login on /login */}

          <Route exact path="/" render={() => {
            return (this.state.isLoggedIn) ? (
              <Home
              {...this.state}
              isLoggedIn={this.state.isLoggedIn}
              login={this.login}
              hacker={this.hacker}
              votePoll={this.votePoll}
              />
            ) : (
              <Register register={this.register}/>
            )}
          } />
          <Route exact path="/login" render={() => {
            return <Signin login={this.login}/>
          }}  />
        </Switch>
          </div>

            what the fuuuuuck manmnmn


      </div>
    );
  }
}

export default App;
