import React, { Component } from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';

export class SideBarTest extends Component {
  render() {
    return (
      <SidebarTest
        as={Menu}
        animation='overlay'
        icon='labeled'
        visible={true}
        vertical
        width='thin'
      >
        <Menu.Item as='a'>Home</Menu.Item>
        <Menu.Item as='a'>Games</Menu.Item>
        <Menu.Item as='a'>Channels</Menu.Item>
      </SidebarTest>
    );
  }
}

export default SideBarTest;
