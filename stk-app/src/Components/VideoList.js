import React from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import VideoCard from './VideoCard';

class VideoList extends React.Component {
    constructor(props) {
        super();
        this.state = {
            videos: [],
        };
    }

    componentDidMount() {
        try {
            axios.get('http://localhost:3000/video')
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    this.setState({ videos: res.data });
                    console.log(this.state.videos)
                });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        let len = this.state.videos.length;
        let rows = Math.ceil(len / 3);
        let count = 0;
        const displayVideos = () => {
            for(let i = 0; i < count; count + 3) {

            }
        }

        return (
            <Container className="below-navbar">
                {rows}
            </Container>
        );
    }
}

export default VideoList;