const express = require('express');
const router = express.Router();
let BookEvent= require('../routes/api/models/bookevent.model');
let Event= require('../routes/api/models/event.model');

router.route('/book').post((req,res)=>{
    const bookdate = Date.parse(req.body.bookdate);
    const name =req.body.eventname;
    const eventid=req.body.eventid;
    const eventname=name.toUpperCase();
    const eventdate=Date.parse(req.body.eventdate);
    const eventtime =req.body.eventtime;
    const part1fname = req.body.part1fname;
    const part1lname = req.body.part1lname;
    const part1email = req.body.part1email;
    const part1contact = Number(req.body.part1contact);
    const part1cid = req.body.part1cid;
    const part1college = req.body.part1college;
    const part2fname = req.body.part2fname;
    const part2lname = req.body.part2lname;
    const part2email = req.body.part2email;
    const part2contact = Number(req.body.part2contact);
    const part2cid = req.body.part2cid;
    const part2college = req.body.part2college;
    const part3fname = req.body.part3fname;
    const part3lname = req.body.part3lname;
    const part3college = req.body.part3college;
    const part4fname = req.body.part4fname;
    const part4lname = req.body.part4lname;
    const part4college = req.body.part4college;
    const part5fname = req.body.part5fname;
    const part5lname = req.body.part5lname;
    const part5college = req.body.part5college;
    const part6fname = req.body.part6fname;
    const part6lname = req.body.part6lname;
    const part6college = req.body.part6college;
    const part7fname = req.body.part7fname;
    const part7lname = req.body.part7lname;
    const part7college = req.body.part7college;
    const part8fname = req.body.part8fname;
    const part8lname = req.body.part8lname;
    const part8college = req.body.part8college;
    
    const newEvent = new BookEvent({bookdate,eventname,eventid,eventdate,eventtime,part1fname,part1lname,part1email,
                 part1contact,part1cid,part1college,part2fname,part2lname,part2email,part2contact,part2cid,
                 part2college,part3fname,part3lname,part3college,part4fname,part4lname,part4college,
                 part5fname,part5lname,part5college,part6fname,part6lname,part6college,part7fname,
                 part7lname,part7college,part8fname,part8lname,part8college});
      
       newEvent.save()
       .then(()=> res.json('Event Registered.'))
       .catch(err => res .status (400).json('Error :'+err));
  
});

router.route('/event/:id').get(function(req, res){
    BookEvent.findById(req.params.id)
    .then(Eve => res.json(events))
    .catch(err => res.status (400).json('Error:'+ err));
  BookEvent.countDocuments({ eventid: BookEvent.findById(req.params.id)}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

router.route('/totalevent').get(function(req, res){
    BookEvent.countDocuments({ }, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  });
module.exports= router;