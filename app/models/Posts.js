import mongoose from 'mongoose';
import { Schema } from 'mongoose';

class PostSchema extends mongoose.Schema {
    constructor() {
        super({
            loc: {
                type: Array,
                default: [0, 0]
            },
            title:  {
                type: String,
                default: 'title'
            },
            desc: {
                type: String,
                default: 'description'
            },
            img: {
                type: String,
                default: './images/IMG_4129.jpg'
            },
            postdate: {
                type: Date,
                default: Date.now
            },
            author: {
                type: String,
                default: 'Anon'
            }
        })
    }
}

export default mongoose.model('Posts', new PostSchema());
