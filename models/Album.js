const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    duration: { type: Number, required: true },
    songUrl: { type: String, required: true },
    songImage: { type: String, required: true }
});

const albumSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    genre: String,
    albumImage: { type: String, required: true },
    bgColor: { type: String, required: true, default: '#FFFFFF' }, // Added default color
    songs: [songSchema],
    created_at: { type: Date, default: Date.now }
});

const Album = mongoose.model('Album', albumSchema);
module.exports = Album;


// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const songSchema = new Schema({
//     title: { type: String, required: true },
//     artist: { type: String, required: true },
//     duration: { type: Number, required: true },
//     songUrl: { type: String, required: true },
//     songImage: { type: String, required: true }
// });

// const albumSchema = new Schema({
//     title: { type: String, required: true, index: true }, // Index added for title
//     description: String,
//     genre: { type: String, index: true }, // Index added for genre
//     albumImage: { type: String, required: true },
//     bgColor: { type: String, required: true, default: '#FFFFFF' },
//     songs: [songSchema],
//     created_at: { type: Date, default: Date.now, index: true } // Index added for created_at
// });

// // Compound index example (if needed)
// // albumSchema.index({ title: 'text', description: 'text' });

// const Album = mongoose.model('Album', albumSchema);
// module.exports = Album;
