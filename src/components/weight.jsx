import React from 'react';

export default React.createClass({
  render() {
    return <div>
      <input type='text' value={this.props.weight} />
    </div>;
  }
});
