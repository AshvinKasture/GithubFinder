import React from 'react';
import {
  Grid,
  Segment,
  Image,
  Header,
  Divider,
  Button,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <Grid.Column>
      <Segment>
        <Grid>
          <Grid.Column textAlign='center'>
            <Image src={avatar_url} size='tiny' circular centered />
            <Header> {login}</Header>
            <Divider />
            <Button secondary as={Link} to={`/user/${login}`}>
              More
            </Button>
          </Grid.Column>
        </Grid>
      </Segment>
    </Grid.Column>
  );
};

export default UserItem;
