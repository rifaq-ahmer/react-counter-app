import React, { Component } from "react";
import Counter from "./counter";
class counters extends Component {
	state = {
		counters: [
			{ id: 1, value: 0 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 },
		],
	};
	handleIncreament = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		this.setState({ counters });
	};
	handleReset = () => {
		const counters = this.state.counters.map((c) => {
			c.value = 0;
			return c;
		});
		this.setState({ counters });
	};
	handleDelete = (counterId) => {
		const counters = this.state.counters.filter((c) => c.id !== counterId);
		this.setState({ counters });
	};
	render() {
		return (
			<div>
				<button
					onClick={this.handleReset}
					className="btn btn-primary btn-sm m-2"
				>
					RESET
				</button>
				{this.state.counters.map((counter) => (
					<Counter
						onDelete={() => this.handleDelete(counter.id)}
						onIncreament={this.handleIncreament}
						key={counter.id}
						counter={counter}
					/>
				))}
			</div>
		);
	}
}

export default counters;
