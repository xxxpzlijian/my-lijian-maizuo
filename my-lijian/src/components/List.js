import React , {Component} from 'react';
import axios from 'axios';
import '../style/list.css';
import Btn from './Btn';
export default class List extends Component {
	constructor(props){
		super(props);
		this.state = {
			list : []
		}
	}
	componentDidMount(){
		axios.get("/v4/api/film/now-playing?page=1&count=10")
		.then((res)=>{
			console.log(res);
			this.setState({
				list:res.data.data.films,
			})
			console.log(this.state.list)
		})
	}
	render() {
		return (
			<div className="list">
				<Btn />
				{
					this.state.list.map(function(item,index){
						return (
							<div className="list_films" key={item.id}>
							  <img className="imgs1" src={item.poster.origin}/>
							  <p className="ps1">
								<span className="spa1">
									<i className="mingz">{item.name}</i>
									<i className="iii">{item.grade}<i className="iconfont listpingf">&#xe6a7;</i></i>
								</span>
								<span className="spa2">{item.intro}</span>
								<span className="spa3">{item.watchCount}人观看过</span>
							  </p>
							</div>
						)
					
					})
				}
			</div>
		)
	}
} 