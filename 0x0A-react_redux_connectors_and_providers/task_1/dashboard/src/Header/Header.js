import React from 'react';
import logo from '../assets/logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className={css(styles.header)}>
          <img src={logo} className={css(styles.logo)} alt="logo" />
          <h1>School dashboard</h1>
        </div>
        {this.context.user.isLoggedIn ? (
          <section id='logoutSection' className={css(styles.logoutSection)}>
            Welcome <strong>{this.context.user.email}</strong> <a onClick={this.context.logOut}><em>(logout)</em></a>
          </section>
        ) : <></> }
      </>
    )
  }
}

Header.contextType = AppContext;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    color: '#e0354b',
    fontSize: '1.5rem',
    borderBottom: '0.2rem solid #e0354b',
    width: '100%',
  },
  logo: {
    width: '200px',
  },
  logoutSection: {
    marginTop: '2rem',
  }
})

export default Header;
