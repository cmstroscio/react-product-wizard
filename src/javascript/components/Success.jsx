/**
 * @jsx React.DOM
 */
var React = require('react')

var Success = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Success!</h2>
        <p>Please check your email <b>{this.props.fieldValues.email}</b> for your customized list of recommended products!</p>
      </div>
    )
  }
})

module.exports = Success