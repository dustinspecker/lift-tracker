import PureRenderMixin from 'react-addons-pure-render-mixin'
import React from 'react'

import Button from './button'

export default React.createClass({
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
  mixins: [PureRenderMixin],
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
      <Button
        handleClick={this.delete}
        text={'Delete'}
      />
      <Button
        handleClick={this.increment}
        text={'+'}
      />
      <Button
        handleClick={this.decrement}
        text={'-'}
      />
    </div>
  }
})
