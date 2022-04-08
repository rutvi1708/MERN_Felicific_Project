const express = require("express");
const router = express.Router();
let Event= require('../routes/api/models/event.model');
//const multer =require('multer');
const User = require("./api/models/User");
const config = require("../config/default");
const nodemailer = require("nodemailer");
const { emailid, password1 } = require("../config/default");
const auth = require("../routes/api/middleware/auth");
const { getMaxListeners } = require("./api/models/User");


router.route('/').get((req,res)=> {
    Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error: ' +err));
});   

router.route('/all').get(function(req, res){
   Event.countDocuments({ }, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  }); 
router.route('/add').post((req,res)=>{
     const name =req.body.eventname;
     const eventname=name.toUpperCase();
     const time =req.body.time;
     const location =req.body.location;
     const date =Date.parse(req.body.date);
     const contact_details =req.body.contact_details;
     const description =req.body.description;
     const amount =Number(req.body.amount);
     const req_participant =Number(req.body.req_participant);
     const day=Number(req.body.day);
     const maxbook= Number(req.body.maxbook);
     const url =req.body.url;
     
     const newEvent = new Event({eventname,time,location,date,contact_details,description,amount,
        req_participant,day,maxbook,url});
       
        newEvent.save()
        .then(()=> res.json('Event Added.'))
        .catch(err => res .status (400).json('Error :'+err));
   
});

router.route('/:id').get((req,res) => {
    Event.findById(req.params.id)
    .then(event => res.json(event))
    .catch(err => res.status (400).json('Error:'+ err));
   /*  convertedEvent = event.toObject();
      convertedEvent.registered = false;
      User.findById({_id: req.user.id}, (err, user)=>{
          if(err){
              throw new Error(err);
          }
          for(let i = 0; i<user.registeredEvents.lenght; i++){
              if(user.registeredEvents[0].id===req.params.id){
                  convertedEvent.registered =true;
              }    
          }
          res.json(convertedEvent);
      })
})
.catch((err) => {
   res.status(400).json("Error:" + err);
});*/
 });
 
 router.route("/:id").delete((req, res) => {
	Event.findByIdAndDelete(req.params.id).then((event) => {
		User.find({}, function (err, users) {
			var transporter = nodemailer.createTransport({
				service: "gmail",
				auth: { user: emailid, pass: password1 },
				tls: { rejectUnauthorized: false },
			});
			let userList = [];
			users.forEach((user, i, dd) => {
				userList.push(user.email);
			});

			var usersList = userList.toString();
			//console.log(usersList);
			var mailOptions = {
				from: emailid,
				to: userList,
				subject: "Event Deleted",
				text:
					"Hello,\n\n" +
					event.eventname +
					" is deleted due to unforeseen circumstances.",
			};

			transporter.sendMail(mailOptions, function (err) {
				//console.log("snake");
				//  if (err) { return res.status(500).send({ msg: err.message }); }
			});

			return res.json(" Event Deleted.");
		});
	});
});
 router.route('/update/:id').post((req,res) => {
    Event.findById(req.params.id)
    .then(event => {
       const name=req.body.eventname;
       event.eventname =name.toUpperCase();
       event.time=req.body.time;
       event.location =req.body.location;
       event.date =Date.parse(req.body.date);
       event.contact_details =req.body.contact_details;
       event.description =req.body.description;
       event.amount =Number(req.body.amount);
       event. req_participant =Number(req.body.req_participant);
       event.day=Number(req.body.day);
       event.maxbook=Number(req.body.maxbook);
     


     /*  User.find({}, function (err, users) {
			var transporter = nodemailer.createTransport({
				service: "gmail",
				auth: { user: emailid, pass: password1 },
			});
			let userList = [];
			users.forEach((user, i, dd) => {
				userList.push(user.email);
			});
			var mailOptions = {
				from: emailid,
				to: userList,
				subject: "Event Updated",
				text:
					"Hello,\n\n" +
					+event.eventname +
					" is updated, please go check the updates.",
			};
         transporter.sendMail(mailOptions, function (err) {});
         */
		//	event.save();
      // event.eventImage=req.file.path;
       event.save()
       .then(() => res.json('Event Updated:'))
       .catch(err => res.status (400).json ('Error:'+err));
    })
   // });
   .catch(err => res.json(400).json('Error:'+err));
 });
 

module.exports = router;