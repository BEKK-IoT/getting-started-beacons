import React from 'react';
import Article from './Article';
import Tasks from './Tasks';
import InstallScript from './InstallScript';
import { GADGETS, GENERAL_TASKS } from '../constants/AppConstants';

module.exports = React.createClass({
    render() {
        const intro = this.props.params.gadget + '/intro';
        const gadgetTasks = GADGETS[this.props.params.gadget].tasks.concat(GENERAL_TASKS);
        return (
            <div className="gadget">
                <div>
                    <Article article={intro} />
                </div>
                <div>
                    <h2>Tasks</h2>
                    <Tasks tasks={gadgetTasks} />
                </div>
            </div>
        )
    }
});
