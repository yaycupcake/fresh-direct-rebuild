const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const Product = require('../models/product')
const db = require('../db')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const SALT_ROUNDS = 11
const TOKEN_KEY = 'stanfurret1!!11one1!'

//User controllers

const signUp = async (req, res) => {
 try {
  const { username, email, password } = req.body
  const password_digest = await bcrypt.hash(password, SALT_ROUNDS)
  const user = new User({
   username,
   email,
   password_digest
  })
  await user.save()

  const payload = {
   id: user._id,
   username: user.username,
   email: user.email
  }
  const token = jwt.sign(payload, TOKEN_KEY)
  return res.status(201).json({ user, token })
 } catch (error) {
  console.log('In signUp controller, but error occurred')
  return res.status(400).json({ error: error.message })
 }
} //end signUp

const signIn = async (req, res) => {
 try {
  const { username, password } = req.body
  const user = await User.findOne({
   username: username
  })

  if (await bcrypt.compare(password, user.password_digest)) {
   const payload = {
    id: user._id,
    username: user.username,
    email: user.email
   }
   const token = jwt.sign(payload, TOKEN_KEY)
   return res.status(201).json({ user, token })
  } else {
   res.status(401).send('Invalid credentials!')
  }
 } catch (error) {
  return res.status(500).json({ error: error.message })
 }
} //end signIn

const verifyUser = async (req, res) => {
 try {
  const token = req.headers.authorization.split(" ")[1]
  const legit = jwt.verify(token, TOKEN_KEY)
  if (legit) {
   res.json({ user })
  }
 } catch (error) {
  res.status(401).send('Unauthorized access!')
 }
} //end verifyUser

//Product controllers

