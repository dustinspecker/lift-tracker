import React from 'react'

export default React.createClass({
  decrement() {
    return this.props.decrement(this.props.index)
  },
  increment() {
    return this.props.increment(this.props.index)
  },
  handleChange() {},
  render() {
    return <div>
      <input
        type='text'
        onChange={this.handleChange}
        value={this.props.weight}
      />
      <button ref='increment' onClick={this.increment}>+</button>
      <button ref='decrement' onClick={this.decrement}>-</button>
    </div>
  }
})
