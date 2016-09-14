import React from 'react';
import { token, devices } from '../constants/AccessTokens';

module.exports = React.createClass({
	getInitialState: function() {
		return {id: ''};
	},
	handleChange(e) {
		this.setState({id: e.target.value});
	},

	render() {
		const id = this.state.id;
		let info = undefined;
		console.log(devices);

		if (id && devices.hasOwnProperty(id.toUpperCase())) {
			info = (
				<div className="export-token">
					<div>export PARTICLE_TOKEN="{token}"</div>
					<div>export PARTICLE_DEVICE_ID="{devices[id.toUpperCase()]}"</div>
				</div>
			)
		} else if (id.length >= 4) {
			info = (<div>Could not find device ID</div>)
		}

		return (
			<div className="export-token-content">
				<div>
					To be able to use the photon we need to export some environment variables.
					On the back side of your photon box there should be a serial-number, 
					type in the follow letters in the box below:
					<div>
						<code>XXXX-XXXXXX-<span className="red">XXXX</span>-X</code>
					</div>
				</div>
				<div className="token-form">
					<div className="token-form-header">Find your token</div>
					<div><input type="search" value={id} onChange={this.handleChange} placeholder="Enter device ID" /></div>
					<div className="token-form-info">{info}</div>
				</div>
			</div>
		)
	}
});
