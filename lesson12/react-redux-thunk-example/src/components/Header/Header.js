import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { requestNews, increment } from '../../store/actions';

function Header(props) {
	return (
		<>
			<div style={{ display: 'flex' }}>
				<h1>Counter value is : {props.ctr} </h1>
				<Button
					onClick={props.inc}
					style={{ marginLeft: '10px' }}
					color="primary"
				>
					increment
				</Button>
			</div>
			<div>
				{props.sites.map(site => (
					<Button
						onClick={() => props.getNews(site)}
						style={{ margin: '10px' }}
						key={site}
						outline
						color="primary"
					>
						{site}
					</Button>
				))}
			</div>
		</>
	);
}

const mapStateToProps = state => {
	return {
		sites: state.sites,
		ctr: state.counter
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getNews: site => dispatch(requestNews(site)),
		inc: () => dispatch(increment())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);
