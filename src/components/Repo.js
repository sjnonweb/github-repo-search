import React, { Component } from 'react';
import { connect } from 'react-redux'
import Loader from './Loader'
import RepoDetails from './RepoDetails'
import Error from './Error';

import { fetchRepoStart, fetchRepo } from '../actions'

class Repo extends Component {
	constructor(props) {
		super(props);
		this.props.dispatch(fetchRepoStart());
		this.repoId = this.props.match.params.id
		this.repoURL = this.props.items[this.repoId].url;
	}

	componentDidMount() {
		this.props.dispatch(fetchRepo(this.repoURL));
	}

	render() {
		if(this.props.isFetchingRepo && !this.props.networkError) {
			return (<Loader />)
		}
		if(this.props.networkError) {
			return (<Error />)
		}
		return (
			<RepoDetails item={this.props.item} />
		);
	}
}

const mapStateToProps = (state) => {
	const { uiState, repoResultState, repoDetails } = state;
	return {
		isFetchingRepo: uiState.isFetchingRepo,
		networkError: uiState.networkError,
		items: repoResultState.items,
		item: repoDetails.item
	}
}

Repo = connect(mapStateToProps)(Repo);
export default Repo;
