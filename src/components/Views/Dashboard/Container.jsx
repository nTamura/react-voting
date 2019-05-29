import React from 'react'
import { Link } from 'react-router-dom'
import withStyles from 'react-jss'
import Button from 'components/Common/Button'
import Search from 'components/Common/Search'
import Loading from 'components/Common/Loading'
import { connect } from 'react-redux'

function Container({ classes, profile }) {
  const { isLoaded, displayName, pollsCreated } = profile
  return (
    <div className={classes.root}>
      {isLoaded && displayName ? (
        <>
          <h2>{`Welcome ${displayName}`}</h2>
          <p>{`You currently have ${pollsCreated.length} active polls`}</p>
          <div className={classes.menuList}>
            <Search />
            <Link to="/trending">
              <Button>Trending Polls</Button>
            </Link>
            <Link to="/create">
              <Button>Create Poll</Button>
            </Link>
            <Link to="/results">
              <Button>Poll Results</Button>
            </Link>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  )
}
const styles = {
  root: {},
  menuList: {
    display: 'flex',
    flexDirection: 'column',
  },
}

const mapStateToProps = state => ({
  profile: state.firebase.profile,
})

export default withStyles(styles)(connect(mapStateToProps)(Container))
