import React,  { Component } from 'react';
import './cultural-event.css';
import img from '../img/org1.png'

export default class CulturalList extends Component{
    render(){
        return (

            <div className="container">
            <div className="row">
              <div className="col">
                <img src={img}/>
              </div>
              <div className="col">
                <div style={{textAlign:"center"}}>
                      <h1>  Cultural Night </h1>
                       <p  style={{fontSize: '1.2em'}}>Hello DDU
              Soo how has life been treating you???
                Well well we are here now and we are going to give you the most exciting and thrilling night of the year. Because we do deserve a break right ? 
                     On 5th and 6th March cultural night is been organized. It is filled with music, dance, comedy and of course tons of fun. It is a stage which offers exposure to the immense talent of the students. Participants will mesmerize you with their melodies, they will set their feets on fire and make you laugh to the fullest. 
                     Break the monotony and come join us at the dynamic cultural night to pamper ourselves with entertainment entertainment entertainment!
                 </p>
                </div>
              </div>
            </div>
           
            
          </div>
              
               
                // <p className="m-3" style={{fontSize: '1.1em'}}>Hello DDU
                //     Soo how has life been treating you???
                //     Well well we are here now and we are going to give you the most exciting and thrilling night of the year. Because we do deserve a break right ? 
                //     On 5th and 6th March cultural night is been organized. It is filled with music, dance, comedy and of course tons of fun. It is a stage which offers exposure to the immense talent of the students. Participants will mesmerize you with their melodies, they will set their feets on fire and make you laugh to the fullest. 
                //     Break the monotony and come join us at the dynamic cultural night to pamper ourselves with entertainment entertainment entertainment!
                // </p>
           
        )
    }
}