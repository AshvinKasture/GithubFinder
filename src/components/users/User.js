import React, { Component, Fragment } from 'react';

import {
  Segment,
  Grid,
  Label,
  Header,
  Image,
  Button,
  Icon,
} from 'semantic-ui-react';

import PropTypes from 'prop-types';

export class User extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    removeUser: PropTypes.func.isRequired,
  };
  componentDidMount() {
    console.log(`login is ${this.props.match.params.login}`);
    this.props.getUser(this.props.match.params.login);
  }

  componentWillUnmount() {
    this.props.removeUser();
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
      repos,
    } = this.props.user;

    return (
      <Fragment>
        <Segment>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                {/* <Label color='red' ribbon size='medium'>
                Not hireable
              </Label> */}
                <Label color='green' ribbon size='medium'>
                  Hireable
                </Label>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row stretched>
              <Grid.Column>
                <Segment padded textAlign='center' raised>
                  <Header as='h2'>Brad Traversy</Header>
                  {/* <Header as='h5' color='grey'>
                    bradtraversy
                  </Header> */}
                  <Button
                    as='a'
                    href='https://google.com'
                    color='grey'
                    // secondary
                    animated
                  >
                    <Button.Content visible>bradtraversy</Button.Content>
                    <Button.Content hidden>
                      <Icon name='external' />
                    </Button.Content>
                  </Button>
                  {/* <Segment style={{ boxShadow: 'none', border: 'none' }}>
                    <Icon name='map marker alternate' />
                    India
                  </Segment> */}
                  <div
                    style={{ marginTop: '1rem', color: 'rgb(24, 156, 222)' }}
                  >
                    <Icon name='map marker alternate' /> India
                  </div>
                </Segment>
                <Segment raised>
                  <Header as='h3'>Bio</Header>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Maiores possimus praesentium dolore velit laborum et magnam
                  deleniti at sint ipsum.
                </Segment>
                <Segment raised>
                  <div>Company: AshTech</div>
                  <div>Website: ashtech.dev</div>
                </Segment>
              </Grid.Column>
              <Grid.Column width={6} floated='right'>
                <Segment style={{ boxShadow: 'none', border: 'none' }}>
                  <Image src={avatar_url} size='small' centered circular />
                  {/* Image */}
                </Segment>
                <Segment raised>
                  {/* <div> */}
                  {/* Followers, Following, Public Repos and Public Gists */}
                  <Grid columns={2}>
                    <Grid.Row>
                      <Grid.Column>
                        <Button as='div' labelPosition='right'>
                          <Button color='red'>Followers</Button>

                          <Label basic color='red' pointing='left'>
                            500
                          </Label>
                        </Button>
                      </Grid.Column>
                      <Grid.Column>
                        <Button as='div' labelPosition='left' floated='right'>
                          <Label basic color='blue' pointing='right'>
                            225
                          </Label>
                          <Button color='blue'>Following</Button>
                        </Button>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column>
                        <Button
                          as='div'
                          labelPosition='right'
                          //   style={{ marginTop: '2rem' }}
                        >
                          <Button color='red' basic>
                            Public Repos
                          </Button>
                          <Label color='red'>125</Label>
                        </Button>
                      </Grid.Column>
                      <Grid.Column>
                        <Button
                          as='div'
                          labelPosition='left'
                          //   style={{ marginTop: '2rem' }}
                          floated='right'
                        >
                          <Label color='blue'>25</Label>
                          <Button color='blue' basic>
                            Public Gists
                          </Button>
                        </Button>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>

                  {/* </div> */}
                  {/* <div style={{ marginTop: '2rem' }}> */}
                  {/* <Button as='div'> */}

                  {/* </Button> */}
                  {/* </div> */}
                </Segment>
              </Grid.Column>
            </Grid.Row>
            {/* <Grid.Row></Grid.Row> */}
            <Grid.Row columns={3}>
              <Grid.Column as='a' href='https://google.com'>
                <Segment raised>
                  <Grid columns={3}>
                    <Grid.Column>
                      <Header as='h3' color='orange'>
                        Name
                      </Header>
                    </Grid.Column>
                    <Grid.Column>
                      <Label color='purple'>CSS</Label>
                    </Grid.Column>
                    <Grid.Column>
                      <Label color='black'>
                        <Icon name='fork' />
                        23
                        {/* <Label.Detail>23</Label.Detail> */}
                      </Label>
                    </Grid.Column>
                  </Grid>
                </Segment>
              </Grid.Column>
              <Grid.Column as='a' href='https://google.com'>
                <Segment raised>
                  <Grid columns={3}>
                    <Grid.Column>
                      <Header as='h3' color='orange'>
                        Name
                      </Header>
                    </Grid.Column>
                    <Grid.Column>
                      <Label color='purple'>CSS</Label>
                    </Grid.Column>
                    <Grid.Column>
                      <Label color='black'>
                        <Icon name='fork' />
                        23
                        {/* <Label.Detail>23</Label.Detail> */}
                      </Label>
                    </Grid.Column>
                  </Grid>
                </Segment>
              </Grid.Column>
              <Grid.Column as='a' href='https://google.com'>
                <Segment raised>
                  <Grid columns={3}>
                    <Grid.Column>
                      <Header as='h3' color='orange'>
                        Name
                      </Header>
                    </Grid.Column>
                    <Grid.Column>
                      <Label color='purple'>CSS</Label>
                    </Grid.Column>
                    <Grid.Column>
                      <Label color='black'>
                        <Icon name='fork' />
                        23
                        {/* <Label.Detail>23</Label.Detail> */}
                      </Label>
                    </Grid.Column>
                  </Grid>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
              <Grid.Column as='a' href='https://google.com'>
                <Segment raised>
                  <Grid columns={3}>
                    <Grid.Column>
                      <Header as='h3' color='orange'>
                        Name
                      </Header>
                    </Grid.Column>
                    <Grid.Column>
                      <Label color='purple'>CSS</Label>
                    </Grid.Column>
                    <Grid.Column>
                      <Label color='black'>
                        <Icon name='fork' />
                        23
                        {/* <Label.Detail>23</Label.Detail> */}
                      </Label>
                    </Grid.Column>
                  </Grid>
                </Segment>
              </Grid.Column>
              <Grid.Column as='a' href='https://google.com'>
                <Segment raised>
                  <Grid columns={3}>
                    <Grid.Column>
                      <Header as='h3' color='orange'>
                        Name
                      </Header>
                    </Grid.Column>
                    <Grid.Column>
                      <Label color='purple'>CSS</Label>
                    </Grid.Column>
                    <Grid.Column>
                      <Label color='black'>
                        <Icon name='fork' />
                        23
                        {/* <Label.Detail>23</Label.Detail> */}
                      </Label>
                    </Grid.Column>
                  </Grid>
                </Segment>
              </Grid.Column>
              <Grid.Column as='a' href='https://google.com'>
                <Segment raised>
                  <Grid columns={3}>
                    <Grid.Column>
                      <Header as='h3' color='orange'>
                        Name
                      </Header>
                    </Grid.Column>
                    <Grid.Column>
                      <Label color='purple'>CSS</Label>
                    </Grid.Column>
                    <Grid.Column>
                      <Label color='black'>
                        <Icon name='fork' />
                        23
                        {/* <Label.Detail>23</Label.Detail> */}
                      </Label>
                    </Grid.Column>
                  </Grid>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Fragment>
    );
  }
}

export default User;
