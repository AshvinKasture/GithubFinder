import React, { Fragment } from 'react';
import { Loader } from 'semantic-ui-react';

const Spinner = () => {
  return (
    <Fragment>
      <Loader size='massive' active>
        Loading
      </Loader>
    </Fragment>
  );
};

export default Spinner;
