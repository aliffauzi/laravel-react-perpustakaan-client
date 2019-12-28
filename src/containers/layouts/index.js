import React from 'react';
import Login from '../pages/login';
import { Route } from 'react-router-dom';

const Layout = ({ component: Component, layout: Layout, ...rest }) => (
	<Route {...rest} render={props => (
		<Layout>
			<Component {...props}/>
		</Layout>
	)} />
)

export default Layout