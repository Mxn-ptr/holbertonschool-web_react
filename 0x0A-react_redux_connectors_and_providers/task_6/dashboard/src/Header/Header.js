import React from 'react';
import logo from '../assets/logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { user, logout } = this.props;
    return (
      <>
        <div className={css(styles.header)}>
          <img src={logo} className={css(styles.logo)} alt="logo" />
          <h1>School dashboard</h1>
        </div>
        { user.email && user.password ? (
          <section id='logoutSection' className={css(styles.logoutSection)}>
            Welcome <strong>{user.email}</strong> <a onClick={logout}><em>(logout)</em></a>
          </section>
        ) : <></> }
      </>
    )
  }
}

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
});

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
}

Header.defaultProps = {
  user: null,
  logout: () => {},
}

export const mapStateToProps = (state) => {
  return {
    user: state.ui.get('user'),
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
