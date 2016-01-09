import PureRenderMixin from 'react-addons-pure-render-mixin'
import React from 'react'

export default React.createClass({
  mixins: [PureRenderMixin],
  propTypes: {
    change: React.PropTypes.func.isRequired,
    decrement: React.PropTypes.func.isRequired,
    delete: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired,
    index: React.PropTypes.number.isRequired,
    weight: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string
    ]).isRequired
  },
  decrement() {
    return this.props.decrement(this.props.index)
  },
  delete() {
    return this.props.delete(this.props.index)
  },
  increment() {
    return this.props.increment(this.props.index)
  },
  handleChange(event) {
    return this.props.change(this.props.index, event.target.value)
  },
  render() {
    return <div>
      <input
        onChange={this.handleChange}
        type='number'
        value={this.props.weight}
      />
      <button onClick={this.delete}>{'Delete'}</button>
      <button onClick={this.increment}>{'+'}</button>
      <button onClick={this.decrement}>{'-'}</button>
    </div>
  }
})
