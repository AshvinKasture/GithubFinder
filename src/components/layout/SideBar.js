import React, { Component, Fragment } from 'react';
import { Menu, Sidebar, Icon } from 'semantic-ui-react';

class SideBar extends Component {
  state = {
    visible: false,
  };

  toggleVisible = () => {
    console.log('toggeling visible');
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const { visible } = this.state;

    return (
      <Fragment>
        <Sidebar
          visible={visible}
          animation='push'
          width='thin'
          vertical
          as={Menu}
          inverted
        >
          <Menu.Item as='a'>Home</Menu.Item>
          <Menu.Item as='a'>Games</Menu.Item>
          <Menu.Item as='a'>Channels</Menu.Item>
          <Menu.Item as='a'>SideBar 2</Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Menu attached='top' secondary>
            <Menu.Item as='a' onClick={this.toggleVisible}>
              <Icon name='sidebar' />
            </Menu.Item>
            <Menu.Item as='a'>Submit</Menu.Item>
          </Menu>
          {this.props.children}
        </Sidebar.Pusher>
      </Fragment>
    );
  }
}

export default SideBar;
