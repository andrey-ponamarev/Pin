var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/local');

var Post = mongoose.model('Post', {
    title:  String,
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs:  Number
    }
});

var post = new Post({ name: 'Zildjian' });

kitty.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('meow');
    }
});
