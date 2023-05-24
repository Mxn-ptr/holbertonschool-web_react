import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function Login() {
  return (
    <React.Fragment>
      <div>
        <p>Login to access to the full dashboard</p>
        <div className={css(styles.mediumForm)}>
          <div className={css(styles.mediumLabelInput)}>
            <label htmlFor="email">Email:</label>
            <input className={css(styles.input)} type="text" id='email' name='email'/>
          </div>
          <div className={css(styles.mediumLabelInput)}>
            <label htmlFor="password">Password:</label>
            <input className={css(styles.input)} type="password" id='password' name='password'/>
          </div>
          <button className={css(styles.mediumButton)}>OK</button>
        </div>
      </div>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: '0 8px',
    '@media (max-width: 900px)': {
      margin: '5px auto',
      width: '100%'
    }
  },
  mediumForm: {
    display: 'flex',
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  mediumLabelInput: {
    '@media (max-width: 900px)': {
      display: 'flex',
      alignItems: 'center'
    }
  },
  mediumButton: {
    '@media (max-width: 900px)': {
      width: '2.2rem'
    }
  }
});
