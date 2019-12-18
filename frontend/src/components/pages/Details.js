import React from 'react';

const Details = (props) => {
  const Debug = (<pre><code>{JSON.stringify(props, null, 2)}</code></pre>);

  return (
    <div>
      <pre><code>{JSON.stringify(props, null, 2)}</code></pre>
      Hey
    </div>
  );
};

export default Details;