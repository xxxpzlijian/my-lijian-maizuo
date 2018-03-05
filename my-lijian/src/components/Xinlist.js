import React , { Component } from 'react';
import Btn from './Btn';
import axios from 'axios';
export default class Xinlist extends Component{
	constructor(props){
		super();
		this.state = {
			xlist : []
		}
	}
	componentDidMount(){
		axios.get("/v4/api/film/coming-soon?page=1&count=10")
		.then((res)=>{
			console.log(res);
			this.setState({
				xlist:res.data.data.films
			})
			console.log(this.state.xlist)
		})
	}
	render() {
		return (
			<div>
				<Btn />
				{
					this.state.xlist.map(function(item,index){
						return(
							<div className="list_films" key={item.id}>
							  <img className="imgs1" src={item.poster.origin}/>
							  <p className="ps1">
								<span className="spa1">
									<i className="mingz">{item.name}</i>
									<i className="iii"><i className="iconfont listpingf"></i></i>
								</span>
								<span className="spa2">{item.intro}</span>
								<span className="spa3">12月30日上映</span>
							  </p>
							</div>
						)
					})
				}
			</div>
		)
	}
}