import mongoose from "mongoose";
const schema = mongoose.Schema;

const FilmssSchema = new schema(
    {
        Title: {
            type: String,
            required: true,
        },
        Year: {
            type: Number,
            required: true,
        },
        Rated: {
            type: String,
            required: true,
        },
        Released: {
            type: Date,
            required: true,
        },
        Runtime: {
            type: Number,
            required: true,
        },
        Genre: {
            type: String,
            required: true,
        },
        Director: {
            type: String,
            required: true,
        },
        Writer: {
            type: String,
            required: true,
        },
        Actors: {
            type: [String],
            required: true,
        },
        Plot: {
            type: String,
            required: true,
        },
        Language: {
            type: [String],
            required: true,
        },
        Country: {
            type: [String],
            required: true,
        },
        Awards: {
            type: String,
            required: true,
        },
        Poster: {
            type: String,
            required: true,
        },
        Metascore: {
            type: Number,
            required: true,
        },
        imdbRating: {
            type: Number,
            required: true,
        },
        imdbVotes: {
            type: Number,
            required: true,
        },
        imdbID: {
            type: String,
            required: true,
            unique: true,
        },
        Type: {
            type: String,
            required: true,
        },
        Response: {
            type: Boolean,
            required: true,
        },
        Images: {
            type: [String],
            required: true,
        }
    },
    {
        timestamps: true
    }
);

const Films = mongoose.model("Films", FilmssSchema);
export default Films;
