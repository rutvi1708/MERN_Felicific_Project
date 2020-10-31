const express = require('express');
const mongoose = require('mongoose');
const { route } = require('../../bookevent');
const router = express.Router();
const Schema = mongoose.Schema;

const bookeventSchema = new Schema({
bookdate:{ type: Date, required: true },
eventname:{type: String ,required : true },
eventdate :{ type: Date ,required:true,trim:true },
eventtime :{type: String, required: true},
part1fname:{type: String , required: true,trim : true },
part1lname:{type: String , required: true,trim: true },
part1email:{type: String , required: true,trim : true},
part1contact:{type: Number , required: true },
part1cid:{type: String, required:true, trim:true},
part1college:{type: String,required: true,trim:true},
part2fname:{type: String,trim:true},
part2lname:{type: String ,trim: true},
part2email:{type: String ,trim:true},
part2contact:{type: Number},
part2cid:{type: String, trim:true},
part2college:{type: String,trim:true},
part3fname:{type: String ,trim:true },
part3lname:{type: String,trim:true },
part3college:{type:String,trim:true},
part4fname:{type: String ,trim:true },
part4lname:{type: String,trim:true },
part4college:{type:String,trim:true},
part5fname:{type: String ,trim:true },
part5lname:{type: String,trim:true },
part5college:{type:String,trim:true},
part6fname:{type: String ,trim:true },
part6lname:{type: String,trim:true },
part6college:{type:String,trim:true},
part7fname:{type: String ,trim:true },
part7lname:{type: String,trim:true },
part7college:{type:String,trim:true},
part8fname:{type: String ,trim:true },
part8lname:{type: String,trim:true },
part8college:{type:String,trim:true},
},    
 {
   timestamps:true, 
});

const BookEvent = mongoose .model('BookEvent',bookeventSchema);
module.exports= BookEvent;