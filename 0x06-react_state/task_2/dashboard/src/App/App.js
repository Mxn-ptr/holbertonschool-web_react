import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';
import {user, AppContext} from './AppContext';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user,
      logOut: this.logOut
    }
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  logIn = (email, password) => {
    this.setState({ user: {
      email,
      password,
      isLoggedIn: true,
    }})
  }

  logOut = () => {
    this.setState({ user: user })
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key == 'h') {
      event.preventDefault();
      window.alert('Logging you out');
      this.logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true});
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false});
  }

  render() {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() }},
    ];
    return (
      <AppContext.Provider value={{ user: this.state.user, logOut: this.state.logOut}}>
        <Notifications 
          listNotifications={listNotifications}
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}/>
        <div className="App">
          <Header />
          <div className={css(styles.body)}>
            {this.state.user.isLoggedIn ? (
              <BodySectionWithMarginBottom title='Course list'>
                <CourseList listCourses={listCourses}/>
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title='Log in to continue'>
                <Login logIn={this.logIn}/>
              </BodySectionWithMarginBottom>
            )}
            <BodySection title='News from the School'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eos neque doloribus incidunt beatae sapiente magni vitae autem minima corporis,
                quia aut in quod vero laudantium rerum deserunt perferendis expedita architecto.
              </p>
            </BodySection>
          </div>
          <div className={css(styles.footer)}>
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    margin: '0',
    padding: '40px',
  },
  footer: {
    borderTop: '0.2rem solid #e0354b',
    width: '100%',
    position: 'fixed',
    bottom: '0%',
    textAlign: 'center',
    fontStyle: 'italic',
  }
})

export default App;
