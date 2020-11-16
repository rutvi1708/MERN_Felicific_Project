const express = require('express');
const router = express.Router();
let User= require('../routes/api/models/User');


router.route('/:id').get((req,res) => {
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status (400).json('Error:'+ err));
  });
  
  router.route('/edit/:id').post((req,res) => {
    User.findById(req.params.id)
    .then(user => {
                          
       user.firstname=req.body.firstname; 
       user.lastname=req.body.lastname;
       user.branch =req.body.branch;
       user.sem =Number(req.body.sem);
       user.email =req.body.email;
       user.clgname=req.body.clgname;
       user.studentId=req.body.studentId;
       user.contactno =Number(req.body.contactno);
     
      // event.eventImage=req.file.path;
       user.save()
       .then(() => res.json('User Data Edited:'))
       .catch(err => res.status (400).json ('Error:'+err));
    })
   .catch(err => res.json(400).json('Error:'+err));
 });
 

module.exports = router;