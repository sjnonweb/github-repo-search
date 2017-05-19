import React, { Component } from 'react';
import { connect } from 'react-redux'
import { sortSearchResult } from '../actions'


class SortBar extends Component {

	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		e.preventDefault();
		console.log(e.target.value);
		this.props.dispatch(sortSearchResult(e.target.value));
	}
	render() {
		return (
			<div className="row">
				<div className="col-md-6 col-sm-6 col-xs-6">
					<h4>{this.props.total_count} result found!</h4>
				</div>
				<div className="col-md-6 col-sm-6 col-xs-6 text-right">
					<div className="form-group form-inline">
						<label htmlFor="sort" className="hidden-xs">Sort:&nbsp;</label>
						<select className="form-control" name="sort" id="sort"
							onChange={this.handleChange}
						>
							<option value="best_match">Best match</option>
							<option value="most_stars">Most stars</option>
							<option value="fewest_stars">Fewest stars</option>
							<option value="most_forks">Most forks</option>
							<option value="fewest_forks">Fewest forks</option>
							<option value="most_recent">Most recently updated</option>
							<option value="least_recent">Least recently updated</option>
						</select>
					</div>
				</div>
			</div>
		)
	}
}

SortBar = connect()(SortBar);
export default SortBar;
