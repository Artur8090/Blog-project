import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
// register user
export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const isUsed = await User.findOne({ username });
        if (isUsed) {
            return res.json({
                message: 'Username is already used',
            });
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = new User({
            username,
            email, password: hash
        });

        await newUser.save();
        res.json({
            message: 'User registered successfully',
        });
    } catch (err) {
        res.json({
            message: 'Registration failed',
        });
    }
};
// login user
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.json({
                message: 'User not found',
            });
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.json({
                message: 'Invalid credentials',
            });
        }
        const token = jwt.sign({
            id: user._id,
        }, process.env.JWT_SECRET,
            { expiresIn: '30d' })


        res.json({
            token,
            user,
            message: 'Login successful',
        })
    } catch (err) {
    }
}
// Get me
export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        if (!user) {
            return res.json({
                message: 'User not found',
            });
        }
        const token = jwt.sign({
            id: user._id,
        }, process.env.JWT_SECRET,
            { expiresIn: '30d' })
        res.json({
            token,
            user,
        });
    } catch (err) {
        res.json({
            message: 'No access',})
    }
}
