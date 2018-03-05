import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import '../style/films.css';
import axios from 'axios';
export default class Films extends Component {
	constructor(props) {
		super(props);
		this.state={
			list : []
		}
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount() {
		axios.get("/v4/api/film/now-playing?__t=1519819140051&page=1&count=10")
		.then((res)=>{
				console.log(res)
				this.setState({
				list : res.data.data.films
			})
				console.log(this.state.list)		
		})
		
	}
	render(){
		return (
				<div className="films">
						{
							this.state.list.map(function(item,index){
								return (
									<Link to="/details" key={item.id}>
										<div className="tup">
											<p><img src={item.cover.origin} /></p>
											<div className="jies">
												<p>
												 	<i className="nome">{item.name}</i>
													<i className="jianshao">{item.intro}</i>
												</p>
												<span className="pingf">{item.grade}</span>
											</div>
										</div>	 
									</Link>
								)
							})
							
						}
				</div>
		)
	}
}


// <Router>
//     <div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/topics">Topics</Link></li>
//       </ul>

//       <hr/>

//       <Route exact path="/" component={Home}/>
//       <Route path="/about" component={About}/>
//       <Route path="/topics" component={Topics}/>
//     </div>
//   </Router>