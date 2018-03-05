import React , {Component} from 'react';
import '../style/header.css';

export default class Header extends Component {
	render() {
		return (
			<div className="head">
				<span className="iconfont sp1" onClick={this.props.ttt}>&#xe699;</span>
				<p className="logo">卖座电影</p>
				<span className="zhanw"></span>
				<span className="iconfont dizi">北京&#xe6a6;</span>
				<i className="iconfont yong">&#xe6b8;</i>
			</div>
		)
	}
}