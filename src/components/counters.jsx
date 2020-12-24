import React, { Component } from "react";
import Counter from "./counter";
class counters extends Component {
	render() {
		const { onReset, counters, onDelete, onIncreament } = this.props;
		return (
			<div>
				<button onClick={onReset} className="btn btn-primary btn-sm m-2">
					RESET
				</button>
				{counters.map((counter) => (
					<Counter
						onDelete={onDelete}
						onIncreament={onIncreament}
						key={counter.id}
						counter={counter}
					/>
				))}
			</div>
		);
	}
}

export default counters;
