import React from 'react';
import Remarkable from 'remarkable';
import {GADGETS} from '../constants/AppConstants';

const md = new Remarkable();

function markdown(git) {
    const ticks = '```';
    return `
${ticks}javascript
$ git clone ${git}
$ npm install
${ticks}
`
}

module.exports = React.createClass({
    render() {
        const {git, url} = GADGETS[this.props.gadget];
        const install = md.render(markdown(git)); 
        return (
            <div dangerouslySetInnerHTML={{__html: install}}></div>
        )
    }
});