import React, { Component } from 'react';
import SearchList from './SearchList';
import SortBar from './SortBar';

export default class SearchResult extends Component {
	render() {
		if(this.props.searchActive) {
			if(this.props.total_count>0) {
				return (
					<div>
						<br />
						<SortBar total_count={this.props.total_count} />
						<br />
						<div className="row">
							<div className="list-group">
								{
									this.props.items.map((item, i) => <SearchList key={item.id} item={item} />)
								}
							</div>
						</div>
					</div>
				)
			}
			else if(this.props.total_count === 0)
				return (<h2>no results found!</h2>)
			else
				return null;
		}
		else
			return null;
	}
}