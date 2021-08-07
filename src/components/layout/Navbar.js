import React, { Component, Fragment } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

class Navbar extends Component {
  static defaultProps = {
    title: 'Navbar',
    icon: 'github',
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    const activeMenuItemStyle = {
      color: 'yellow',
    };

    return (
      <Fragment>
        <Menu as='nav' attached='top' color='red' inverted secondary>
          <Menu.Item>
            <h3>
              <Icon name={this.props.icon} size='large' inverted />
              {this.props.title}
            </h3>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item
              className='activeMenuItem'
              style={{
                fontWeight: 'bolder',
              }}
            >
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/about'>About</Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Fragment>
    );
  }
}

export default Navbar;
