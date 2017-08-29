/**
 * @jsx React.DOM
 */
var React                   = require('react')
var getRadioOrCheckboxValue = require('../lib/radiobox-value')

var SurveyFields = React.createClass({

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
        <h2>What do you want to do?</h2>
        <ul className="form-fields">
          <li className="radio">
            <span className="label">Age</span>
            {['Optimize unstructured data', 'Integrate Cloud Data Services', 'Accelerate Your DevOps Journey', 'Build Cloud Hosting Infrastructure', 'Accelerate Workloads and Analytics', 'Protect and Secure Data', 'Simplify and Automate', 'Gain Data Center Efficiencies', 'Deliver Data Insights and Control'].map(this.renderOptions.bind(this, 'radio', 'task'))}
          </li>
          <li className="checkbox">
            <span className="label">Favorite Colors</span>
            {['Blue', 'Red', 'Orange', 'Green'].map(this.renderOptions.bind(this, 'checkbox', 'colors'))}
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
    var task    = document.querySelector('input[name="task"]:checked')
    var colors = document.querySelectorAll('input[name="colors"]')

    var data = {
      task    : getRadioOrCheckboxValue(task),
      colors : getRadioOrCheckboxValue(colors)
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
})

module.exports = SurveyFields