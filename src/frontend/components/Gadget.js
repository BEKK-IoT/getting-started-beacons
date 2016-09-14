import React from 'react';
import Article from './Article';
import Tasks from './Tasks';
import InstallScript from './InstallScript';
import PhotonAccessToken from './PhotonAccessToken';
import { GADGETS, GENERAL_TASKS } from '../constants/AppConstants';

module.exports = React.createClass({
    render() {
        const intro = this.props.params.gadget + '/intro';
        const install = this.props.params.gadget + '/install';
        const five = this.props.params.gadget + '/johnny-five';
        const example = this.props.params.gadget + '/example';
        const gadgetTasks = GADGETS[this.props.params.gadget].tasks.concat(GENERAL_TASKS);
        const getToken = this.props.params.gadget === 'photon' ? <PhotonAccessToken/> : null;
        return (
            <div className="gadget">
                <div>
                    <Article article={intro} />
                </div>
                <div>
                    <Article article={install}/>
                    <InstallScript gadget={this.props.params.gadget} />
                    {getToken}
                </div>
                <div>
                    <Article article='setup' />
                </div>
                <div>
                    <Article article='run' />
                </div>
                <div>
                    <h2>Tasks</h2>
                    <Tasks tasks={gadgetTasks} />
                </div>
            </div>
        )
    }
});
