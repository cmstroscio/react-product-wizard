/**
 * @jsx React.DOM
 */
var React                   = require('react')
var getRadioOrCheckboxValue = require('../lib/radiobox-value')

var FocusFields = React.createClass({

  renderOptions: function(type, name, value, index) {
    var isChecked = function() {
      if (type == 'radio') return value == this.props.fieldValues[name]

      if (type == 'checkbox') return this.props.fieldValues[name].indexOf(value) >= 0

      return false
    }.bind(this)

    return (
      <label key={index}>
        <input type={type} name={name} value={value} defaultChecked={isChecked()} /> {value}
      </label>
    )
  },

  render: function() {
    return (
      <div>
        <h2>Which of these options best summarize your objectives?</h2>
        <ul className="form-fields">
          <li className="checkbox">
            <span className="label">High Level Summary</span>
            {['Harness the power of the hybrid cloud', 
            'Modernize storage through data management',  
            'Build a next generation data center', 
            'Modernize storage through data management']
            .map(this.renderOptions.bind(this, 'checkbox', 'focus'))}
          </li>
        </ul>
        <div className="form-footer">
          <button className="btn -default pull-left" onClick={this.props.previousStep}>Back</button>
          <button className="btn -primary pull-right" onClick={this.nextStep}>Save &amp; Continue</button>
        </div>
      </div>
    )
  },

  nextStep: function() {
    // Get values via querySelector
    // var notInUse    = document.querySelector('input[name="notInUse"]:checked')
    var focus = document.querySelectorAll('input[name="focus"]')

    var data = {
      // notInUse    : getRadioOrCheckboxValue(notInUse),
      focus : getRadioOrCheckboxValue(focus)
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
})

module.exports = FocusFields