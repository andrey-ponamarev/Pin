import mongoose from 'mongoose';
import { Schema } from 'mongoose';

class PinSchema extends mongoose.Schema {
    constructor() {
        super({
            location: {
                type: Array,
                default: [0, 0]
            },
            title:  {
                type: String,
                default: 'title'
            },
            description: {
                type: String,
                default: 'description'
            },
            image: {
                type: String,
                default: 'image-src'
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

export default mongoose.model('Pins', new PinSchema());
