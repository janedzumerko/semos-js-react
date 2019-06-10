import React from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function News(props) {
	console.log(props.news);
	return (
		<div style={{ display: 'flex', flexWrap: 'wrap' }}>
			{props.news.articles.map((article, idx) => (
				<Card style={{ margin: '10px', width: '300px' }} key={idx}>
					<CardBody>
						<CardTitle>{article.title}</CardTitle>
						<CardSubtitle>{article.author}</CardSubtitle>
						<CardText>{article.description}</CardText>
					</CardBody>
				</Card>
			))}
		</div>
	);
}

const mapStateToProps = state => {
	return {
		news: state.currentNews
	};
};

export default connect(mapStateToProps)(News);
