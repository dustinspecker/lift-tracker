import React from 'react';

export default React.createClass({
  handleChange() {},
  render() {
    return <div>
      <input
        type='text'
        onChange={this.handleChange}
        value={this.props.weight}
      />
      <button ref='increment' onClick={this.props.increment}>+</button>
      <button ref='decrement' onClick={this.props.decrement}>-</button>
    </div>;
  }
});
