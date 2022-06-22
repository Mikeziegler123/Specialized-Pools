import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class Example extends Component {
	render() {
		return (
            <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Guides</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Guiding the way</Card.Subtitle>
              <Card.Text>
                Jesus, the North Star, and a groundhog's shadow are all a guide. Click here.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
		)
	}
}
export default Example
