import React from 'react'
import { Link } from 'react-router-dom'
import withStyles from 'react-jss'
import Button from 'components/Common/Button'

function Container({ classes }) {
  return (
    <div className={classes.root}>
      <h2>Welcome username</h2>
      <p>You currently have X active polls</p>
      <div className={classes.menuList}>
        <Button>
          <Link to="/trending" className={classes.button}>
            Trending Polls
          </Link>
        </Button>
        <Link to="/active" className={classes.button}>
          Active Polls
        </Link>
        <Link to="/create" className={classes.button}>
          Create Poll
        </Link>
        <Link to="/edit" className={classes.button}>
          Edit Poll
        </Link>
        <Link to="/results" className={classes.button}>
          Poll Results
        </Link>
      </div>
    </div>
  )
}
const styles = {
  root: {},
  menuList: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    fontSize: '1.2rem',
    // border: '1px solid #FFF',
    // padding: 8,
    // marginBottom: 8,
    // textAlign: 'center',
  },
}
export default withStyles(styles)(Container)
