import React from 'react';
import {
  Grid,
  Segment,
  Image,
  Header,
  Divider,
  Button,
} from 'semantic-ui-react';

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <Grid.Column>
      <Segment>
        <Grid>
          <Grid.Column textAlign='center'>
            <Image src={avatar_url} size='tiny' circular centered />
            <Header> {login}</Header>
            <Divider />
            <Button secondary>More</Button>
          </Grid.Column>
        </Grid>
      </Segment>
    </Grid.Column>
  );
};

export default UserItem;
