import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchResult from './SearchResult'
import Loader from './Loader';
import SearchBar from './SearchBar';



class Search extends Component {
	render() {
		const marginTop = {
			marginTop: "20px",
		}
		return (
			<div className="container" style={marginTop}>
				<SearchBar />
				<div className="row text-center">
					<Loader isFetching={this.props.isFetching} />
				</div>
				<div className="row">
					<SearchResult
						searchActive={this.props.searchActive}
						searchTerm={this.props.searchTerm}
						items={this.props.items}
						total_count={this.props.total_count}
						isFetching={this.props.isFetching}
					/>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	const { uiState, repoState } = state;
	return {
		searchActive: uiState.searchActive,
		isFetching: uiState.isFetching,
		searchTerm: uiState.searchTerm,
		items: repoState.items,
		total_count: repoState.total_count
	}
}

Search = connect(mapStateToProps)(Search);
export default Search;