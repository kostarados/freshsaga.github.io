import React, { Component } from 'react';
import ProgressCard from './ProgressCard';
import { SampleDataProgressbar } from './SampleDataProgressbar';

class ProgressBarList extends Component {
	state = {
		/*counters: [
			{ id: 1, value: 0 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 },
		],
		progress: this.props.progress,*/
	};
			
render() {
	return(
		<div>
		{ 
			SampleDataProgressbar.map((bar, i) => {
			return (
				<ProgressCard
				key={i}
				id={SampleDataProgressbar[i].id} 
				name={SampleDataProgressbar[i].name} 
				progress={SampleDataProgressbar[i].progress}
				goal={SampleDataProgressbar[i].goal}
				/>
			);}
		)}
		{/*{
			this.state.counters.map(
				counter => <ProgressCard 
					key={counter.id}
					value={counter.value}
					progress={counter.value} 
					/>)}
			*/}
		</div>)}
}


export default ProgressBarList;