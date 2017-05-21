import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class RepoDetails extends Component {
	constructor(props) {
		super(props);
		this.owner = this.props.item.owner && this.props.item.owner.login
		this.ownerUrl = this.props.item.owner && this.props.item.owner.html_url
		this.avatar_url = this.props.item.owner && this.props.item.owner.avatar_url
	}
	render() {
		return (
			<div className="row">	
				<div className="row">
					<div className="col-md-4 col-sm-4 col-xs-3">
						<h3 className="hidden-xs"><Link to="/"><span className="glyphicon glyphicon-chevron-left"></span>&nbsp;Back</Link></h3>
						<h5 className="visible-xs"><Link to="/"><span className="glyphicon glyphicon-chevron-left"></span>&nbsp;Back</Link></h5>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-9 text-right">
						<h3 className="text-success hidden-xs">{this.props.item.full_name}</h3>
						<h5 className="text-success visible-xs">{this.props.item.full_name}</h5>
					</div>
				</div>
				<div className="row text-right">	
					<div className="col-md-12">
						<p className="badge"><span className="glyphicon glyphicon-pencil"></span>&nbsp;{this.props.item.language}</p>
						&nbsp;
						<p className="badge"><span className="glyphicon glyphicon-star"></span>&nbsp;{this.props.item.stargazers_count}</p>
						&nbsp;
						<p className="badge"><span className="glyphicon glyphicon-scissors"></span>&nbsp;{this.props.item.forks_count}</p>
						&nbsp;
						<p className="badge"><span className="glyphicon glyphicon-bookmark"></span>&nbsp;{this.props.item.subscribers_count}</p>
					</div>
				</div>
				<hr />
				<div className="row  text-center">
					<div className="col-md-4 col-sm-4 col-xs-12">
						<img className="img-responsive img-rounded center-block" alt={this.props.item.name} src={this.avatar_url} />
					</div>
					<div className="col-md-8 col-sm-8 col-xs-12">
						<div className="row">
							<div className="col-md-12 col-sm-12">
								<h4>{this.props.item.description}</h4>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 col-sm-4 col-xs-12 text-center">
								<h5>
									<a href={this.props.item.html_url} target="_blank"><span className="glyphicon glyphicon-share"></span>&nbsp;Open in github</a>
								</h5>
							</div>
							<div className="col-md-4 col-sm-4 col-xs-12 text-center">
								<h5>
									<a href={this.props.item.homepage} target="_blank"><span className="glyphicon glyphicon-home"></span>&nbsp;Home Page</a>
								</h5>
							</div>
							<div className="col-md-4 col-sm-4 col-xs-12 text-center">
								<h5>
									<a href={this.ownerUrl} target="_blank"><span className="glyphicon glyphicon-user"></span>&nbsp; Owner: {this.owner}</a>
								</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}  