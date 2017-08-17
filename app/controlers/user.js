// Our new dependencies
import jwt from 'jsonwebtoken';
import moment from 'moment';

import User from '../models/user';
import Poll from '../models/poll'
// The config file contains the secret to sign the token
import config from '../../config';

const createToken= (name) => {
            var payload = {
                sub: name,
                exp: moment().add(1, 'day').unix()
            };
            return jwt.sign(payload, config.TOKEN_SECRET);
            }
module.exports = {

signup: (req, res) => {
    
        // query the database to make sure the e-mail is not taken already
        User.findOne({ email: req.body.email }, (err, existingUser) => {
            if (existingUser) {
            // HTTP 409 status is sent in case the e-mail is taken
            return res.status(409).json({ message: 'Email is already taken' });
            }

            // A new user is created with the information sent by the client
            const user = Object.assign(new User(), req.body);
            user.save((err, result) => {
            if (err) {
                res.send(err);
            }
            // Notice we also send the token as we want the user to be immediately logged in
            res.json({
                message: 'Welcome to VotePlex, you are now logged in',
                token: createToken(result.name),
                id:user._id
            });
            });
        });
        },
login: (req, res) => {
        // Query the database for user with that specific e-mail
        User.findOne({ email: req.body.email }, '+password', (err, user) => {
            if (!user) {
            // If the user doesn't exist just send a HTTP 401 status
            return res.status(401).json({ message: 'Invalid email/password' });
            }
            /* If the user exists, the password sent by the client is compared with the one in the db
            with the utilily function comparePwd
        */
            user.comparePwd(req.body.password, (err, isMatch) => {
            if (!isMatch) {
            // In case of wrong password, we send another HTTP 401 status
                return res.status(401).send({ message: 'Invalid email/password' });
            }
            // Correct information from the client, a token is sent
            res.json({ message: 'You are now logged in', token: createToken(user.name),id:user._id });
            });
        });
        },

getUserPolls: async (req,res)=>{
            const{id} = req.params
            const user = await User.findById(id).populate('polls')
            res.json(user)
            },

newUserPoll: async (req,res)=>{
            const {id} = req.params
            const newPoll = new Poll(req.body);
            //get user
            const user = await User.findById(id);
            newPoll.created_by = user;
            await newPoll.save();

            user.polls.push(newPoll);

            await user.save();
            res.status(201).json(newPoll)
            
            },
getUsers: (req, res) => {
        
        User.find({},(err, users) =>{
            if (err){
                res.send(err);
            }
            res.json(users)
            } )
        }

    }