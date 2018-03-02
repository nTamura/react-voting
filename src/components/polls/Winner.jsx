import React, { Component } from 'react'
import fire from '../../firebase'
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
// Main page gets data from db
// maps out polls, dynamic route '/:pollId'
// for now static dummy data 

export default class Winner extends Component {
  // capture state? 
  // save state as object and add event handler to pass back 
  // push object to db 
  constructor(props) {
    super(props);
    this.state={
      pollId: '',
      user: this.props.user,
      // get userID from logged in user props 
    }
  }
  

  handleSubmit = (e) => {
    e.preventDefault()
    let vote = ""
    this.setState({
      pollId: 'winningVote',
      userVote: e.target.radio.value,
      user: this.props.user.userVoted = true
    }, () => {
      vote = this.state
      this.props.votePoll(vote)
    })
  }

  render() {
    return (
      <div>
        <h1>Overall Best Vote</h1>
        <hr/>
        {/* if voted, show result, else show form  */}

        {/* <Form onClick={()=>{this.props.votePoll(e)}}>
          <input type="text" name="username" placeholder="What's your name?" /> */}
      <Form 
        style={styles.form}
        // onSubmit={(e)=>{this.props.votePoll(e)}}
        onSubmit={(e)=>{this.handleSubmit(e)}}
      >
        <FormGroup tag="fieldset">
          <p>Choose wisely for the team that deserves the BEST HACKATHON EVER AWARD </p>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio" value="noodleBabies" />{' '}
              Noodle Babies
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio" value="unicornHub" />{' '}
              Unicorn Hub
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio" value="hackstreetBoys" />{' '}
              Hackstreet Boys
            </Label>
          </FormGroup>
          <Button type="submit">Submit Vote</Button>
        </FormGroup>
      </Form>

      </div>
    )
  }
}
 const styles = {
   form: {

     textAlign: 'left',
     fontSize: 20,
     padding: 30
   }
 }