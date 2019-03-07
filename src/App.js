import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import logo from './logo.png';
import Navigation from './components/Navigation/navigation';
import Stopwatch from './components/Stopwatch/stopwatch';
import ProgressBarList from './ProgressBarList';
import SearchBox from './SearchBox';
import './App.css';
import { SampleDataProgressbar } from './SampleDataProgressbar';
import AddNewProject from './AddNewProject';


class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			SampleDataProgressbar: SampleDataProgressbar,
			searchfield: '',
			count: 0,
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	onProjectSubmit = (projectInput) => {
		this.setState({projectInput: this.state.projectInput + 20})
		//this.setState({ projectInput: this.state.progress = 5});
		console.log('click', this.projectInput)
	}

/*handleIncrement = () => {
	this.setState({count: this.state.count + 1});*/


	render() {
		//filtervakje
		const filteredList = this.state.SampleDataProgressbar.filter(SampleDataProgressbar => {
			return SampleDataProgressbar.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return(
			<div className='app'>
				<img src={logo} alt='Logo FreshSaga' width='25%'></img>
				<div className="content">
					<Switch>
					<Route path="/gameboy" component={Stopwatch} />
					<Route path="/tasks" render={() =>
						<AddNewProject 
							onProjectInputChange={this.onProjectInputChange}
							onProjectInputLengthChange={this.onProjectInputLengthChange}
							onProjectSubmit={this.onProjectSubmit}
						/>
					}/>
					<Route path="/" render={() => 
						<div>
							<div>{this.state.projectInput}</div>
							<h1>Your Progress</h1>
							<SearchBox searchChange={this.onSearchChange}/>
							<ProgressBarList SampleDataProgressbar={filteredList} /></div>
					}/>
					</Switch>
				</div>
				<Navigation />

			</div>
			);	
	}
}
export default App;