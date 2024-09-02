import mongoose, { Schema } from 'mongoose';

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 5
    },
    description: {
        type: String,
        required: true,
        minlength: 20
    },
    excerpt: {
        type: String,
        required: true,
        minlength: 10
    },
    authorId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    image: {
        id: {
            type: String
        },
        url: {
            type: String
        },
    },
    category: {
        type: String,
        required: true,
        enum: ['Sports', 'Food', 'Travel', 'Nature', 'Entertainment']
    },
    likes: {
        type: [Schema.Types.ObjectId],
        ref: 'User',
        default: []
    },
    comments: [
        {
            userId: {
                type: Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            text: {
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
}, {
    timestamps: true,
})

export default mongoose.models.Blog || mongoose.model('Blog', blogSchema);

