import React from 'react';

import LiftLabel from './lift-label';
import Weight from './weight';

export default React.createClass({
  render() {
    return <div>
      {this.props.lifts.map(lift =>
        <div key={lift.name}>
          <LiftLabel name={lift.name} />
          <Weight weight={lift.weight} />
        </div>
      )}
    </div>;
  }
});
