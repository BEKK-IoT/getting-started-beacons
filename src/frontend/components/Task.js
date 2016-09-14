import React from 'react';
import Article from './Article';

function getTaskURL(params) {
	if (params.device) {
		return `tasks/${params.device}/${params.task}`;
	}
	return `tasks/${params.task}`;
}

module.exports = React.createClass({
    render() {
    	if (this.props.params)
        return (
            <div className="app-wrapper"><Article article={getTaskURL(this.props.params)} /></div>
        )
    }
});