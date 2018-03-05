import React , { Component } from 'react';
import Longbo from '../components/Longbo';
import Films from '../components/Films';
import {BrowserRouter as Router , Route , Link } from 'react-router-dom';
import '../style/home.css';
export default class Home extends Component {
	render() {
		return (
			<div>
				<Longbo/>
          		<Films />
          		<Link to="/list"><p className="btn">更多热映电影</p></Link>
			</div>
		)
	}
}