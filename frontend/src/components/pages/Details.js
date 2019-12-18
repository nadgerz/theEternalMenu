import React from 'react';

import {DebugDump} from '../../utils/snippets'

const Details = (props) => {
  return (
    <div>
      <DebugDump props={props}/>
      Hey
    </div>
  );
};

export default Details;