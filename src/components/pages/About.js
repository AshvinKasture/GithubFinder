import React, { Fragment } from 'react';
import { Header } from 'semantic-ui-react';

const About = () => {
  return (
    <Fragment>
      <Header as='h1'>About this App</Header>
      <p>App to search Github users</p>
      <p>Version: 1.0.0</p>
    </Fragment>
  );
};

export default About;
