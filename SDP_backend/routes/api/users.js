const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const {  emailid, password1 , jwtSecret } = require("../../config/default");
const nodemailer=require('nodemailer');
const User = require('./models/User');
router.post(
  '/',
  [
    check('firstname', 'Name is required').not().isEmpty(),
    check('lastname', 'Name is required').not().isEmpty(),
    check('branch', 'Please enter your branch').not().isEmpty(),
    check('sem', 'Enter your semester').not().isEmpty(),
    check('email', 'Please include a valide email').isEmail(),
    check(
      'password',
      'Please enter your password with at least 8 characters'
    ).isLength({ min: 8 }),
    check('studentId', 'Please enter your clg Id').not().isEmpty(),
    check('clgname', 'Collage Name is reuired').not().isEmpty(),
   check('contactno', 'Please enter valid number').isLength(10),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      firstname,
      lastname,
      branch,
      sem,
      email,
      password,
      clgname,
      studentId,
      contactno,
    } = req.body;

    try {
      //see if user exists
      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ errors: [{ msg: 'User already exists' }] });
      }
      

      user = new User({
        firstname,
        lastname,
        branch,
        sem,
        email,
        password,
        clgname,
        studentId,
        contactno
      });

      //encrypt password
      const salt = await bcrypt.genSalt(8);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        },
      };
      jwt.sign(
        payload,
        jwtSecret,
        { expiresIn: 3600000 },
        (err, token) => {
          if (err) throw err;
          
          var transporter = nodemailer.createTransport({ service: 'gmail', auth: { user: emailid, pass: password1 },tls: { rejectUnauthorized: false } });
          // const token = jwt.sign({ _id: user.id }, jwtSecret, {
          //   expiresIn: "24h",
          // });
          // console.log(token);
          const url = "/api/auth/verify/" + token;

        var mailOptions = { from: email, to: user.email, subject: 'Account Verification Token', text: 'Hello,\n\n' + 'Please verify your account by clicking the link: <a href=http://localhost:5000' +url +'>Click Here</a>'};
        transporter.sendMail(mailOptions, function (err) {
            if (err) { return res.status(500).send({ msg: err.message }); }

            res.status(200).send('A verification email has been sent to ' + user.email + '.');
        });//User.findById(user.id, (err, doc)=>{
           // if(err) throw err;
            
         //})
      })
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
      var token = new Token({ _id: user.id, token: crypto.randomBytes(16).toString('hex') });
      token.save(function(err) {
        if (err) { return res.status(500).send({ msg: err.message }); }
 
            // Send the email
            
      })
    }
  }
);

module.exports = router;
