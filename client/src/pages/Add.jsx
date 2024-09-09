import React, { useState } from 'react';
import axios from 'axios';
import './Add.css';
import Navbar from '../component/Navbar';

const FilmForm = () => {
    const [formData, setFormData] = useState({
        Title: '',
        Year: '',
        Rated: '',
        Released: '',
        Runtime: '',
        Genre: '',
        Director: '',
        Writer: '',
        Actors: '',
        Plot: '',
        Language: '',
        Country: '',
        Awards: '',
        Poster: '',
        Metascore: '',
        imdbRating: '',
        imdbVotes: '',
        imdbID: '',
        Type: '',
        Response: false,
        Images: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const imageUrls = formData.Images.split(',').map(url => url.trim()).filter(url => url);

        const dataToSend = {
            ...formData,
            Images: imageUrls
        };

        try {
            const response = await axios.post('http://localhost:3040/addmovies', dataToSend);
            alert('Film data submitted successfully!');
            console.log(response.data);
        } catch (error) {
            console.error('Error submitting film data:', error);
        }
    };

    return (
        <div>
            <Navbar/>
        
        <div className="film-form">
            <h1>Add New Film</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" name="Title" value={formData.Title} onChange={handleChange} required />
                </label>
                <label>
                    Year:
                    <input type="number" name="Year" value={formData.Year} onChange={handleChange} required />
                </label>
                <label>
                    Rated:
                    <input type="text" name="Rated" value={formData.Rated} onChange={handleChange} required />
                </label>
                <label>
                    Released:
                    <input type="date" name="Released" value={formData.Released} onChange={handleChange} required />
                </label>
                <label>
                    Runtime:
                    <input type="number" name="Runtime" value={formData.Runtime} onChange={handleChange} required />
                </label>
                <label>
                    Genre:
                    <input type="text" name="Genre" value={formData.Genre} onChange={handleChange} required />
                </label>
                <label>
                    Director:
                    <input type="text" name="Director" value={formData.Director} onChange={handleChange} required />
                </label>
                <label>
                    Writer:
                    <input type="text" name="Writer" value={formData.Writer} onChange={handleChange} required />
                </label>
                <label>
                    Actors (comma-separated):
                    <input type="text" name="Actors" value={formData.Actors} onChange={handleChange} required />
                </label>
                <label>
                    Plot:
                    <textarea name="Plot" value={formData.Plot} onChange={handleChange} required />
                </label>
                <label>
                    Language (comma-separated):
                    <input type="text" name="Language" value={formData.Language} onChange={handleChange} required />
                </label>
                <label>
                    Country (comma-separated):
                    <input type="text" name="Country" value={formData.Country} onChange={handleChange} required />
                </label>
                <label>
                    Awards:
                    <input type="text" name="Awards" value={formData.Awards} onChange={handleChange} required />
                </label>
                <label>
                    Poster URL:
                    <input type="text" name="Poster" value={formData.Poster} onChange={handleChange} required />
                </label>
                <label>
                    Metascore:
                    <input type="number" name="Metascore" value={formData.Metascore} onChange={handleChange} required />
                </label>
                <label>
                    IMDb Rating:
                    <input type="number" step="0.1" name="imdbRating" value={formData.imdbRating} onChange={handleChange} required />
                </label>
                <label>
                    IMDb Votes:
                    <input type="number" name="imdbVotes" value={formData.imdbVotes} onChange={handleChange} required />
                </label>
                <label>
                    IMDb ID:
                    <input type="text" name="imdbID" value={formData.imdbID} onChange={handleChange} required />
                </label>
                <label>
                    Type:
                    <input type="text" name="Type" value={formData.Type} onChange={handleChange} required />
                </label>
                <label>
                    Response:
                    <input type="checkbox" name="Response" checked={formData.Response} onChange={(e) => setFormData({
                        ...formData,
                        Response: e.target.checked
                    })} />
                </label>
                <label>
                    Images (comma-separated URLs):
                    <input type="text" name="Images" value={formData.Images} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
        </div>
    );
};

export default FilmForm;
