import React, { Component } from 'react';

class ProgressCard extends Component {
	constructor(props){
		super(props);
		this.handleIncrement.bind(this);
	}
	state = {
		progress: this.props.progress,
		goal: this.props.goal,
	};

handleIncrement = () => {
	this.setState({progress: this.state.progress + 1});
}
handleDecrement = () => {
	this.setState({progress: this.state.progress - 1});
}
//ProgressCard = (props) => {1}
confirmIncrement() {
	console.log('Your progress is added!')
} 


render(){
	return (
		<div className='card'>
			<h2><span role='img' aria-label='Shinto'>⛩️</span></h2>
			<div>
				<h2>{this.props.name}</h2>
				<p><progress value={this.state.progress} max={this.props.goal}></progress> {this.state.progress}/{this.props.goal}</p>
				<div><button onClick={() => this.handleDecrement()}>-1</button><button onClick={() => this.handleIncrement()}>+1</button></div>
				<div><button onClick={() => this.confirmIncrement()}>Submit</button></div>
			</div>
		</div>
	);


}
/*formatCount() {
		const {progress} = this.state;
		return progress === 0 ? "Zero" : progress;
	}*/	
}
export default ProgressCard;