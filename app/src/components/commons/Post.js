import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Post extends Component {
    componentWillUnmount() {
        this.props.resetMe();
    }

    componentDidMount() {
        this.props.fetchPost(this.props.postId);
    }

    render(){
        const { post, loading, error } = this.props.activePost;
        console.log(this.props);
        if (loading) {
            return <div className="container">Loading...</div>;
        } else if(error) {
            return  <div className="alert alert-danger">{error.message}</div>
        } else if(!post) {
            return <span />
        }

        return (
            <Card>
                <CardHeader
                    title="URL Avatar"
                    subtitle="Subtitle"
                    avatar={post.img}
                />
                <CardMedia
                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                    <img src={post.img} alt={post.title} />
                </CardMedia>
                <CardTitle
                    title={post.title}
                    subtitle="Card subtitle" />
                <CardText>
                    {post.description}
                </CardText>
                <CardActions>
                    <FlatButton label="Like" />
                    <FlatButton label="Add to trip" />
                </CardActions>
            </Card>
        );
    }
}

export default Post;
