const express = require('express');
const router = express.Router();
let Event= require('../routes/api/models/event.model');

router.route('/').get((req,res)=> {
    Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error: ' +err));

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
   
     
     const newEvent = new Event({eventname,time,location,date,contact_details,description,amount,
        req_participant,day});
       
        newEvent.save()
        .then(()=> res.json('Event Added.'))
        .catch(err => res .status (400).json('Error :'+err));
   
});
router.route('/:id').get((req,res) => {
    Event.findById(req.params.id)
    .then(event => res.json(event))
    .catch(err => res.status (400).json('Error:'+ err));
 });
 
 router.route('/:id').delete((req,res) => {
    Event.findByIdAndDelete(req.params.id)
    .then(() => res.json(' Event Deleted.'))
    .catch(err => res.status (400).json('Error:'+ err));
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
       event.save()
       .then(() => res.json('Event Updated:'))
       .catch(err => res.status (400).json ('Error:'+err));
    })
   .catch(err => res.json(400).json('Error:'+err));
 });


 module.exports= router;