import React from 'react';
import UserItem from './UserItem';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Users = ({ users }) => {
  return (
    <Grid columns={5}>
      {/* <Card.Group>
        {users.map((userItem) => (
          <UserItem user={userItem} />
        ))}
      </Card.Group> */}
      {users.map((userItem) => (
        <UserItem key={userItem.id} user={userItem} />
      ))}
    </Grid>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
};

export default Users;
