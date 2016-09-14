import React from 'react';
import {GADGETS} from '../constants/AppConstants';
import Article from './Article';
import { Link } from 'react-router';

module.exports = React.createClass({
    render() {
        return (
        	<div>
        		{this.props.tasks.map(task => 
        			<ul key={task.path}><Link to={'task/' + task.path}>{task.name}</Link></ul>)
        		}
        	</div>
        )
    }
});
