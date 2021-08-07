import React, { Component, Fragment } from 'react';
import { Segment, Input, Button, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export class Search extends Component {
  static propTypes = {
    searchUser: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    clear: PropTypes.bool.isRequired,
  };

  clearUsers = () => {
    this.setState({
      text: '',
    });
    this.props.clearUsers();
  };

  // componentDidMount() {
  //   document.querySelector('.searchInput').addEventListener('keypress', (e) => {
  //     if (e.key === 'Enter') {
  //       this.searchUser();
  //     }
  //   });
  // }

  state = {
    text: '',
    empty: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      empty: false,
    });
  };

  searchUser = (e) => {
    const text = this.state.text;
    if (text === '') {
      this.setState({
        empty: true,
      });
      // Empty error goes away after 3 secs. Commented out because was not looking good
      // setTimeout(() => {
      //   this.setState({
      //     empty: false,
      //   });
      // }, 3000);
    } else {
      this.props.searchUser(text);
    }
  };

  keyPress = (e) => {
    if (e.key === 'Enter') {
      this.searchUser();
    }
  };

  render() {
    const { clear } = this.props;

    if (clear) {
      return (
        <Fragment>
          <Segment>
            {this.state.empty && (
              <Label basic color='red' pointing='below'>
                Please enter something
              </Label>
            )}
            <Input
              action={
                <Button color='green' onClick={this.searchUser}>
                  {' '}
                  Search
                </Button>
              }
              placeholder='Search Users...'
              label={
                <Button
                  icon='close'
                  color='red'
                  basic
                  onClick={this.clearUsers}
                />
              }
              labelPosition='left'
              fluid
              value={this.state.text}
              onChange={this.handleChange}
              className='searchInput'
              name='text'
              onKeyPress={this.keyPress}
              error={this.state.empty}
            />
          </Segment>
        </Fragment>
      );
    } else {
      // console.log(`empty is ${empty}`);
      return (
        <Fragment>
          <Segment>
            {this.state.empty && (
              <Label basic color='red' pointing='below'>
                Please enter something
              </Label>
            )}
            <Input
              action={
                <Button color='green' onClick={this.searchUser}>
                  {' '}
                  Search
                </Button>
              }
              placeholder='Search Users...'
              labelPosition='left'
              fluid
              value={this.state.text}
              onChange={this.handleChange}
              onKeyPress={this.keyPress}
              className='searchInput'
              name='text'
              error={this.state.empty}
            />
          </Segment>
        </Fragment>
      );
    }
  }
}

export default Search;
