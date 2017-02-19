import React, {propTypes} from 'react';
import './AZHealthBoard.css';

var AZArrayData = React.createClass ({
	getInitialState: function() {
		return {
			controlPlaneHealthyHV: 10,
			controlPlaneUnhealthyHV: 10,
			controlPlaneHealthyVM: 10,
			controlPlaneUnhealthyVM: 10,
		}
	},
  render() {
    return (
	    <div>{this.state.controlPlaneHealthyHV}</div>
    );
  }
})

/* Control Plane Software Table - Pulls the data from the array SOFTWARE */
function SoftwareTable(props) {
  const content = props.software.map((post) =>
    <tr key={post.softwareName}>
 			<td> {post.softwareName} </td>
 			<td className="circle"><div className={post.machine1}></div></td>
 			<td className="circle"><div className={post.machine2}></div></td>
 			<td className="circle"><div className={post.machine3}></div></td>
 		</tr>	
  );
  return (
  	<table>
			<thead>
				<tr>
					<th className="software-column">Control Plane Software</th>
					<th colSpan="3">Machine
						<ul>
							<li></li>
							<li>1</li>	
							<li>2</li>	
							<li>3</li>
						</ul>
					</th>
				</tr>
			</thead>
			<tbody>			 
				{content}
      </tbody>
		</table> 
  );
}

/* Middle Section of the AZ Board - Calls the SoftwareTable component and deployment status */
const MiddleSection = React.createClass ({ 
	render () {
		return (
			<div>
				<div className="control-plane-software">
					<SoftwareTable software={SOFTWARE} />
				</div>
				<div className="deployment-status">
					<div className="deployment-title">Deployment in Service<br /><br /></div>
				</div>
			</div>
		)
	}
});

/* Data Plane Software Section - Right side content */
const DataPlaneSection = React.createClass ({ 
	getInitialState: function() {
		return {
			dataPlaneHealthyHV: 10,
			dataPlaneUnhealthyHV: 10,
			dataPlaneHealthyVM: 10,
			dataPlaneUnhealthyVM: 10,
		}
	},
	render () {
		return (
			<div className="data-plane">
				<div className="data-plane-label plane-label">Data Plane</div>
				<div className="hv">
					<div className="hv-label">Hypervisors</div>
					<div className="health-hv">
						<div className="healthy-container">
							<div className="health-number">{this.state.dataPlaneHealthyHV}</div>
							<div className="health-label">Healthy</div>
						</div>
						<div className="unhealthy-container">
							<div className="health-number">{this.state.dataPlaneHealthyHV}</div>
							<div className="health-label">Unhealthy</div>
						</div>
					</div>
				</div>
				<div className="vm">
					<div className="vm-label">Virtual Machines</div>
					<div className="health-vm">
						<div className="healthy-container">
							<div className="health-number">{this.state.dataPlaneHealthyHV}</div>
							<div className="health-label">Healthy</div>
						</div>
						<div className="unhealthy-container">
							<div className="health-number">{this.state.dataPlaneHealthyHV}</div>
							<div className="health-label">Unhealthy</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
});

/* Control Plane Software Section - Left side content */
const ControlPlaneSection = React.createClass ({ 
	getInitialState: function() {
		return {
			controlPlaneHealthyHV: 10,
			controlPlaneUnhealthyHV: 10,
			controlPlaneHealthyVM: 10,
			controlPlaneUnhealthyVM: 10,
		}
	},
	render () {
		return (
			<div className="control-plane">
				<div className="control-plane-label plane-label">Control Plane</div>
				 <div className="hv">
					<div className="hv-label">Hypervisors</div>
					<div className="health-hv">
						<div className="healthy-container">
							<div className="health-number">{this.state.controlPlaneHealthyHV}</div>
							<div className="health-label">Healthy</div>
						</div>
						<div className="unhealthy-container">
							<div className="health-number">{this.state.controlPlaneUnhealthyHV}</div>
							<div className="health-label">Unhealthy</div>
						</div>
					</div>
				</div>
				<div className="vm">
					<div className="vm-label">Virtual Machines</div>
					<div className="health-vm">
						<div className="healthy-container">
							<div className="health-number">{this.state.controlPlaneHealthyVM}</div>
							<div className="health-label">Healthy</div>
						</div>
						<div className="unhealthy-container">
							<div className="health-number">{this.state.controlPlaneUnhealthyHV}</div>
							<div className="health-label">Unhealthy</div>
						</div>
					</div> 
				</div> 
			</div>
		)
	}
});

/* AZ Title and capacity box */
const AZTitleCapacityBox = React.createClass ({ 
	render () {
		return (
			<div className="az-title-box status-green">
				<div className="az-title">{this.props.azName}</div>
				<div className="az-capacity">Available Capacity: <span>{this.props.azCapacity}%</span></div>
			</div>
		)
	}
});

/* AZ health board Container - pulls data from the components */
const AZHealthBoard = React.createClass ({ 
	propTypes: {
	  azName: React.PropTypes.string.isRequired,
  },
  getInitialState: function() {
		return {
			azCapacity: 75
		}
	},
	render () {
		return (
			<div className="az-board">
				<label className="az-label">Availability Zone</label>
				<div className="az-frame">
					<AZTitleCapacityBox azName={this.props.azName} azCapacity={this.state.azCapacity} />
					<div className="healthColumns">
						<ControlPlaneSection  />
						<div className="middle-section">
							<MiddleSection />
						</div>
						<DataPlaneSection  />
					</div>
				</div>
			</div>
		)
	}
});


/* Software Array - The component MiddleSection calls another component SoftwareTable & passes this array */
const SOFTWARE = [
  {softwareName: 'Nova', machine1: 'red', machine2: 'green', machine3: 'green' }, 
  {softwareName: 'Keystone', machine1: 'green', machine2: 'green', machine3: 'green' }, 
  {softwareName: 'Glance', machine1: 'green', machine2: 'green', machine3: 'green' }, 
  {softwareName: 'Starch', machine1: 'green', machine2: 'green', machine3: 'green' }, 
  {softwareName: 'Ibaas', machine1: 'green', machine2: 'red', machine3: 'green' }, 
  {softwareName: 'Kinder', machine1: 'red', machine2: 'green', machine3: 'green' }, 
  {softwareName: 'Swift', machine1: 'green', machine2: 'green', machine3: 'green' }, 
  {softwareName: 'Rabbit HQ', machine1: 'green', machine2: 'green', machine3: 'green' }, 
  {softwareName: 'MySQL', machine1: 'green', machine2: 'green', machine3: 'green' }, 
  {softwareName: 'LB', machine1: 'green', machine2: 'red', machine3: 'green' } 
];


export default AZHealthBoard;
