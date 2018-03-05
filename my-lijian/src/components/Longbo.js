import React , {Component} from 'react';
import '../style/longbo.css';
import axios from 'axios';
import { Carousel } from 'antd';
export default class Longbo extends Component {
	constructor(props){
		super();
		this.state = {
			list : []
		}
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount(){
		axios.get("/v4/api/billboard/home?__t=1519819140047")
		.then((res)=>{
			console.log(res);
			 
			this.setState({
				list : res.data.data.billboards
			})
		})
	}
	render() {
		return (
			<div className="long">
				<Carousel autoplay>
				    {
				    	this.state.list.map(function(item,index){
				    		return (
				    			<div key={index}><h3><img src={item.imageUrl} /></h3></div>
				    		)
				    	})
				    }
			    </Carousel>
			</div>
		)
	}
}