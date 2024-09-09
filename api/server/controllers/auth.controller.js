import bcrypt from 'bcryptjs';
import users from '../models/user.model.js';
import Films from '../models/movies.model.js';

// SignUp Function
export const SignUp = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Check if the user already exists
        const existingUser = await users.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save the new user
        const newUser = new users({ username, email, password: hashedPassword });
        await newUser.save();
        
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// SignIn Function
export const SignIn = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        // Find the user by email
        const user = await users.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Respond with success message
        res.status(200).json({ message: 'User logged in successfully' });
    } catch (error) {
        console.error('Error during sign-in:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all users
export const getUser = async (req, res) => {
    try {
        const allUsers = await users.find();
        res.status(200).json(allUsers);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all movies
export const getMovies = async (req, res) => {
    try {
        console.log("Fetching movies...");
        const allMovies = await Films.find({});
        console.log("Movies fetched:", allMovies);
        if (allMovies.length === 0) {
            console.log("No movies found.");
            return res.status(404).json({ message: 'No movies found' });
        }
        res.status(200).json(allMovies);
    } catch (error) {
        console.error('Error fetching movies:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
// Add a new movie
export const addMovie = async (req, res) => {
    const { 
        Title, 
        Year, 
        Rated, 
        Released, 
        Runtime, 
        Genre, 
        Director, 
        Writer, 
        Actors, 
        Plot, 
        Language, 
        Country, 
        Awards, 
        Poster, 
        Metascore, 
        imdbRating, 
        imdbVotes, 
        imdbID, 
        Type, 
        Response, 
        Images 
    } = req.body;

    // Validate required fields
    if (!Title || !Year || !Rated || !Released || !Runtime || !Genre || !Director || !Writer || !Actors || !Plot || !Language || !Country || !Awards || !Poster || !Metascore || !imdbRating || !imdbVotes || !imdbID || !Type || Response === undefined || !Images) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Convert Released to Date object
        const releasedDate = new Date(Released);

        // Check if the date conversion was successful
        if (isNaN(releasedDate.getTime())) {
            return res.status(400).json({ message: 'Invalid date format for Released' });
        }

        // Create and save the new movie
        const newFilms = new Films({
            Title,
            Year,
            Rated,
            Released: releasedDate,
            Runtime,
            Genre,
            Director,
            Writer,
            Actors,
            Plot,
            Language,
            Country,
            Awards,
            Poster,
            Metascore,
            imdbRating,
            imdbVotes,
            imdbID,
            Type,
            Response,
            Images
        });

        await newFilms.save();
        
        res.status(201).json({ message: 'Movie added successfully' });
    } catch (error) {
        console.error('Error adding movie:', error.message || error);
        res.status(500).json({ message: 'Server error', error: error.message || error });
    }
};
