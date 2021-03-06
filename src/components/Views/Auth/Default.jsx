import React from 'react'
import withStyles from 'react-jss'
import logo from 'assets/logo.png'

function Default({ classes, setFormShow }) {
  return (
    <div className={classes.root}>
      <div className={`${classes.outer} ${classes.ripple}`}>
        <div className={`${classes.inner} ${classes.ripple}`}>
          <img src={logo} alt="logo" className={classes.logo} />
        </div>
      </div>
      <h1 className={classes.title}>DASHVOTES</h1>
      <p>
        Please
        <button
          type="button"
          className={classes.link}
          onClick={() => setFormShow('signin')}
        >
          Sign In
        </button>
        or
        <button
          type="button"
          className={classes.link}
          onClick={() => setFormShow('signup')}
        >
          Register
        </button>
      </p>
    </div>
  )
}

const styles = {
  root: { textAlign: 'center' },
  title: { fontWeight: 'lighter' },
  link: {
    color: '#fdab27',
    fontSize: '1rem',
    fontStyle: 'oblique',
    fontWeight: 'bold',
  },
  logo: {
    maxWidth: 180,
    padding: 8,
    borderRadius: '50%',
    boxShadow: '0 0 0 rgba(255,255,255, 1)',
    animation: 'ripple 3s linear infinite',
  },
  ripple: {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: '50%',
    boxShadow: '0 0 0 rgba(255,255,255, 1)',
    padding: 24,
  },
  outer: {
    margin: 16,
    animation: 'ripple 3s .2s linear infinite',
  },
  inner: {
    animation: 'ripple 3s .1s linear infinite',
  },
  '@keyframes ripple': {
    '0%': { boxShadow: '0 0 0 0 rgba(255,255,255, 0.4)' },
    '70%': { boxShadow: '0 0 0 6px rgba(255,255,255, 0)' },
    '100%': { boxShadow: '0 0 0 0 rgba(255,255,255, 0)' },
  },
}

export default withStyles(styles)(Default)
