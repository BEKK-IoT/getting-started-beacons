import React from 'react';
import { Router, Route, Link } from 'react-router';

import Gadget from './components/Gadget';
import App from './components/App';
import Task from './components/Task';
import Keys from './components/Keys';

const routes = (
	<Router>
		<Route path="/" component={App}>
		</Route>
			<Route path="/device/:gadget" component={Gadget} />
			<Route path="/task/:task" component={Task} />
			<Route path="/keys" component={Keys} />
		<Route path="/task/:device/:task" component={Task} />
	</Router>
);

React.render(routes, document.getElementById('app'));