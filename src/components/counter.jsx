import React, { Component } from "react";
class Counter extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-1">
					<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				</div>
				<div className="col">
					<button
						onClick={() => this.props.onIncreament(this.props.counter)}
						className="btn btn-secondary btn-sm"
					>
						+
					</button>
					<button
						onClick={() => this.props.onDecreament(this.props.counter)}
						className="btn btn-secondary btn-sm m-2"
						disabled={this.props.counter.value === 0 ? "disabled" : ""}
					>
						-
					</button>
					<button
						onClick={() => this.props.onDelete(this.props.counter.id)}
						className="btn btn-danger btn-sm "
					>
						DELETE
					</button>
				</div>
			</div>
		);
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { value: count } = this.props.counter;
		return count === 0 ? "ZERO" : count;
	}
}

export default Counter;
