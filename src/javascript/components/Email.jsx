
/**
 * @jsx React.DOM
 */
var React = require('react')

var Email = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Account Details</h2>
        <ul className="form-fields">
          <li>
            <label>Name</label>
            <input type="text" ref="name" defaultValue={this.props.fieldValues.name} />
          </li>
          <li>
            <label>Email</label>
            <input type="email" ref="email" defaultValue={this.props.fieldValues.email} />
          </li>
        </ul>
        <div className="form-footer">
          <button className="btn -default pull-left" onClick={this.props.previousStep}>Back</button>
          <button className="btn -primary pull-right" onClick={this.nextStep}>Save &amp; Continue</button>
        </div>
      </div>
    )
  },

  nextStep: function(e) {
    e.preventDefault()

    // Get values via this.refs
    var data = {
      name     : this.refs.name.getDOMNode().value,
      email    : this.refs.email.getDOMNode().value,
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
})

module.exports = Email