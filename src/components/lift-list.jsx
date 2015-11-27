import React from 'react';

import LiftLabel from './lift-label';

export default React.createClass({
  render() {
    return <div>
      {this.props.lifts.map(lift =>
        <LiftLabel key={lift} name={lift} />
      )}
    </div>;
  }
});
