import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Post = ({title, description, src = './images/IMG_4096.jpg'}) => {
    return (
        <Card>
            <CardHeader
                title="URL Avatar"
                subtitle="Subtitle"
                avatar={src}
            />
            <CardMedia
                overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            >
            <img src={src} alt={title} />
            </CardMedia>
            <CardTitle
                title={title}
                subtitle="Card subtitle" />
            <CardText>
                {description}
            </CardText>
            <CardActions>
                <FlatButton label="Like" />
                <FlatButton label="Add to trip" />
            </CardActions>
        </Card>
    );
};

export default Post;
