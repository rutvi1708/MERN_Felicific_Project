const { text } = require('express');
const { getMaxListeners } = require('../models/User');
const config = require('../../../config/default');
const {  email, pass } = require("../../../config/default");


/**
* POST /confirmation
*/


exports.confirmationPost = function (req, res, next) {
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('email', 'Email cannot be blank').notEmpty();
    req.assert('token', 'Token cannot be blank').notEmpty();
    req.sanitize('email').normalizeEmail({ remove_dots: false });

    // Check for validation errors    
    var errors = req.validationErrors();
    if (errors) return res.status(400).send(errors);

    // Find a matching token
    Token.findOne({ token: req.body.token }, function (err, token) {
        if (!token) return res.status(400).send({ type: 'not-verified', msg: 'We were unable to find a valid token. Your token my have expired.' });

        // If we found a token, find a matching user
        User.findOne({ _id: token._userId, email: req.body.email }, function (err, user) {
            if (!user) return res.status(400).send({ msg: 'We were unable to find a user for this token.' });
           // if (user.isVerified) return res.status(400).send({ type: 'already-verified', msg: 'This user has already been verified.' });

            // Verify and save the user
            //user.isVerified = true;
            user.save(function (err) {
                if (err) { return res.status(500).send({ msg: err.message }); }
                res.status(200).send("The account has been verified. Please log in.");
            });
        });
    });
};
/**
* POST /resend
*/
exports.resendTokenPost = function (req, res, next) {
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('email', 'Email cannot be blank').notEmpty();
    req.sanitize('email').normalizeEmail({ remove_dots: false });

    // Check for validation errors    
    var errors = req.validationErrors();
    if (errors) return res.status(400).send(errors);

    User.findOne({ email: req.body.email }, function (err, user) {
        if (!user) return res.status(400).send({ msg: 'We were unable to find a user with that email.' });
        if (user.isVerified) return res.status(400).send({ msg: 'This account has already been verified. Please log in.' });

        // Create a verification token, save it, and send email
        //var token = new Token({ _userId: user._id, token: crypto.randomBytes(16).toString('hex') });

        // Save the token
        //token.save(function (err) {
          //  if (err) { return res.status(500).send({ msg: err.message }); }

            // Send the email
            console.log(_userId,_id);
            const token = jwt.sign({ _id: user.id }, jwtSecret, {
                expiresIn: "24h",
              });
              // console.log(token);
              const url = "/api/auth/verify/" + token;

            var transporter = nodemailer.createTransport({ service: 'gmail', auth: { user: email, pass: password } });

            var mailOptions = { from: email, to: user.email, subject: 'Account Verification Token', text: 'Hello,\n\n' + 'Please verify your account by clicking the link: <a href=http://localhost:5000' +url +'>Click Here</a>'};
            transporter.sendMail(mailOptions, function (err) {
                if (err) { return res.status(500).send({ msg: err.message }); }

                res.status(200).send('A verification email has been sent to ' + user.email + '.');
            });
           // utils.sendMail(req.body.email,"Verify Your Account", "text + ");
        });

    };

