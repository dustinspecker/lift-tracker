import {connect} from 'react-redux';
import React from 'react';

import LiftLabel from './lift-label';
import Weight from './weight';

const LiftList = React.createClass({
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

function mapStateToProps(state) {
  return {
    lifts: state.get('lifts').toJS()
  };
}

export const LiftListContainer = connect(mapStateToProps)(LiftList);
