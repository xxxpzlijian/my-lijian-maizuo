import React , { Component } from 'react';
import {BrowserRouter as Router, Link, NavLink, Route, Redirect, Prompt, Switch} from 'react-router-dom';
import List from './List';
import '../style/btn.css';
import Xinlist from './Xinlist';
export default class Btn extends Component {
	render() {
		return (
			<div>
				<p className="list1">
					<NavLink exact activeClassName="active" to="/list"><span>正在上映</span></NavLink>
					<NavLink activeClassName="active" to="/xinlist"><span>即将上映</span></NavLink>
				</p>
			</div>
		)
	}
}