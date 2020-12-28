import React from 'react';
import Card from 'react-bootstrap/Card'
import ReactPlayer from 'react-player';


class VideoCard extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name: props.name,
            link: props.link,
            category: props.category,
            author: props.author
        };
    }
    render() {
        return (
            <Card style={{ display:"inline-block" }}>
                <Card.Body>
                    <ReactPlayer light={true} url={this.state.link} />
                    <Card.Subtitle>{this.state.name}</Card.Subtitle>
                </Card.Body>
            </Card>
        );
    }
}

export default VideoCard;