import React, { Component } from 'react'
import { Switch, Route, Link} from 'react-router-dom'
import Winner from './polls/Winner'
import Poll1 from './polls/Poll1'
import Results from './Results'

export default class Main extends Component {
  render() {
    console.log(this.props);
    
    return (
      <div>
        <h1>hello {this.props.user.username}</h1>

        <Link to="/polls">
          <button>POLLS boi</button>
        </Link>
        <Link to="/results">
          <button>RESULTS boi</button>
        </Link>

        <Switch>
          {/* create dynamic polls, eventually pull polls from fb */}
          {/* <Route path="/polls/:pollId" render={() => { */}
          <Route path="/polls" render={() => {
            return <Winner {...this.props} votePoll={this.props.votePoll} />
          }} />
          <Route path="/results" render={() => {
            return <Results />
          }} />
        </Switch>
      </div>
    )
  }
}