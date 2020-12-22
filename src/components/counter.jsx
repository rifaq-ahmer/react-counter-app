import React, { Component } from "react";
class Counter extends Component {
	state = {
		value: this.props.counter.value,
		id: this.props.counter.id,
	};
	handleIncreament = () => {
		this.setState({ value: this.state.value + 1 });
	};

	render() {
		return (
			<div>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button
					onClick={this.handleIncreament}
					className="btn btn-secondary btn-sm"
				>
					Increament
				</button>
				<button
					onClick={() => this.props.onDelete(this.props.counter.id)}
					className="btn btn-danger btn-sm m-2"
				>
					DELETE
				</button>
			</div>
		);
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.state.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { value: count } = this.state;
		return count === 0 ? "ZERO" : count;
	}
}

export default Counter;
