import Post from '../models/Posts';

export const getPosts = (req, res) => {
    Post.find((err, posts) => {
        if (err) {
            res.error('error');
        }

        res.json(posts);
    });
};

export const setPost = (req, res) => {
    let newPost = new Post(req.body);

    newPost.save((err, done) => {
        if (err) {
            res.error('error');
        }

        res.send(done);
    });
};

export const deletePost = (req, res) => {
    Post.findOneAndRemove(
        {
            _id: req.params.id
        },
        (err, done) => {
            if (err) {
                res.error('error');
            }

            res.send(done);
        }
    );
};