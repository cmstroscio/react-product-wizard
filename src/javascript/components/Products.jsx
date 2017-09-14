
/**
 * @jsx React.DOM
 */
var React         = require('react')
var FocusFields = require('./FocusFields')
var SurveyFields  = require('./SurveyFields')


var Products = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Based on the following preferences:</h2>
        <ul>
	        <li><b>High-Level Summary:</b> {this.props.fieldValues.focus.join(', ')}</li>
	        <li><b>Use Cases:</b> {this.props.fieldValues.colors.join(', ')}</li>
        </ul>
        <h2> Here is your customized list of products and services!</h2>

        <h4><a href="http://netapp.com/us/cloud/ontap-cloud-native-product-details">ONTAP Cloud</a></h4>
        <p>Data Control. Cost Efficiency. Business Continuity. Cost-effective cloud storage software for your enterprise</p>
        <h4><a href="http://www.netapp.com/us/products/cloud-storage/cloud-control-backup-saas.aspx">Cloud Control</a></h4>
        <p>Guard your SaaS data with secure backup and restore.</p>
        <h4><a href="http://netapp.com/us/cloud/data-sync-saas-product-details">Cloud Sync</a></h4>
        <p>Secure, fast, automated data synchronization</p>
        <h4><a href="http://www.netapp.com/us/products/cloud-storage/amazon-web-services.aspx">Hybrid Cloud Solutions for Amazon Web Services</a></h4>
        <p>Transition to hybrid cloud with NetApp and AWS.</p>
        <h4><a href="http://www.netapp.com/us/products/cloud-storage/microsoft-azure.aspx">Hybrid Cloud Solutions for Microsoft Azure</a></h4>
        <p>Transition to a hybrid cloud with NetApp and Microsoft Azure.</p>
        <h4><a href="http://www.netapp.com/us/info/nvme.aspx">NVMe Flash</a></h4>
        <p>New solid-state technologies such as NVMe (Nonvolatile Memory Express), NVMe-oF, and SCM (also known as PMEM) will dramatically accelerate your infrastructure and reduce the time required to unlock the full value of your data.</p>
        <h4><a href="http://www.netapp.com/us/products/storage-systems/all-flash-array/aff-a-series.aspx">AFF A-Series All Flash Arrays</a></h4>
        <p>World’s Fastest Enterprise All-flash Storage—in the Smallest Package</p>
        <h4><a href="http://www.netapp.com/us/products/data-infrastructure-management/oncommand-insight-bi.aspx">OnCommand Insight</a></h4>
        <p>Monitor and manage your multivendor hybrid cloud IT infrastructure.</p>
        <h4><a href="http://www.netapp.com/us/how-to-buy/ondemand-consumption.aspx">OnDemand Consumption Model</a></h4>
        <p>Get cloud agility for your data on-premises and in the cloud.</p>
      </div>
    )
  }
})



module.exports = Products