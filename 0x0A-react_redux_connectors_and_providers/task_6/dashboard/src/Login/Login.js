import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: '',
      enableSubmit: false,
    }
  }
  handleLoginSubmit = (e) => {
    e.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
  }

  handleChangeEmail = (e) => {
    const enabled = this.state.email.length > 0 && this.state.password.length > 0;
    this.setState({ email: e.target.value, enableSubmit: enabled });
  }

  handleChangePassword = (e) => {
    const enabled = this.state.email.length > 0 && this.state.password.length > 0;
    this.setState({ password: e.target.value, enableSubmit: enabled });
  }

  render() {
    return (
      <React.Fragment>
      <div>
        <p>Login to access to the full dashboard</p>
        <div className={css(styles.mediumForm)}>
          <form onSubmit={this.handleLoginSubmit} className={css(styles.form)}>
            <div className={css(styles.mediumLabelInput)}>
              <label htmlFor="email">Email:</label>
              <input className={css(styles.input)} type="email" id='email' name='email' onChange={this.handleChangeEmail}/>
            </div>
            <div className={css(styles.mediumLabelInput)}>
              <label htmlFor="password">Password:</label>
              <input className={css(styles.input)} type="password" id='password' name='password' onChange={this.handleChangePassword}/>
            </div>
            <input type="submit" value="OK" className={css(styles.mediumButton)} disabled={!this.state.enableSubmit}/>
          </form>
        </div>
      </div>
    </React.Fragment>
    )
  }
}

Login.propTypes = {
  logIn: PropTypes.func,
}

Login.defaultProps = {
  logIn: () => {},
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
  },
  form: {
    width: '100%',
    display: 'flex',
    '@media (max-width: 900px)': {
      display: 'block'
    }
  }
});

export default Login;
