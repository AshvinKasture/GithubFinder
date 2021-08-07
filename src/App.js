import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Spinner from './components/layout/Spinner';
import Search from './components/users/Search';

import About from './components/pages/About';
// import TestComponent from './components/test/TestComponent';

import './App.css';

import { Container } from 'semantic-ui-react';

import axios from 'axios';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   if (this.state.users.length === 0) {
  //     const res = await axios.get(
  //       `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //     );
  //     this.setState({ users: res.data, loading: false });
  //   }
  // }

  searchUser = async (text) => {
    this.setState({ loading: true });

    // if (this.state.users.length === 0) {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
    // }
  };

  clearUsers = () => {
    this.setState({
      users: [],
    });
  };

  render() {
    const { users, loading } = this.state;
    // console.log(this.state.users != []);
    return (
      <Router>
        <div className='App'>
          <Navbar title='Github Finder' icon='github' />
          <Container className='topContainer' fluid>
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUser={this.searchUser}
                      clearUsers={this.clearUsers}
                      clear={this.state.users.length !== 0}
                    />

                    {loading ? <Spinner /> : <Users users={users} />}
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
