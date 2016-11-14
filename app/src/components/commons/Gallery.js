import React, {Component} from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        height: 450,
        overflowY: 'auto',
    },
};


class GridListExampleSimple extends Component {
    componentWillMount() {
        console.log(this.props);
        this.props.fetchPosts();
    }

    render() {
        const { posts, loading, error } = this.props.postsList;

        console.log(posts);
        if(loading) {
            return <div className="container"><h1>Posts</h1><h3>Loading...</h3></div>
        } else if(error) {
            return <div className="alert alert-danger">Error: {error.message}</div>
        }

        return (
            <div style={styles.root}>
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                    cols={3}
                >
                    <Subheader>Ahn</Subheader>

                    {posts.map((post, index) => (
                        <GridTile
                            key={index}
                            title={post.title}
                            subtitle={<span>by <b>{post.author}</b></span>}
                            actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
                        >
                            <img src={post.img}/>
                        </GridTile>
                    ))}
                </GridList>
            </div>
        );
    }
}
;

export default GridListExampleSimple;
