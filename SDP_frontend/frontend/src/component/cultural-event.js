import React,  { Component } from 'react';
import './cultural-event.css';

export default class CulturalList extends Component{
    render(){
        return (
               <div className="container-flex">
                    <div className="row text-center" style={{minHeight: 'calc(100vh - 86px)',alignItems: 'center'}}>
                    <div className="col-12 col-md-6">
                        <div className="logo-image1"></div>
                        </div>
                    <div className="col-md-5 col-12 nunito" style={{verticalAlign: 'middle'}}>
                <h1 className="display-2 sans pb-5 cn">Cultural Night</h1>
                <div className="row sans m-2 m-md-2 text-cnt pb-2">									
                  <div className="col-5"><legend className="cn" style={{fontSize: '3em'}}>5</legend>March</div>								
                  <div className="col-2"><p style={{transform:'translateY(0.8em)',fontSize: '1.5em'}}>&amp;</p></div>									
                  <div className="col-5"><legend className="cn" style={{fontSize: '3em'}}>6</legend>March</div>								
                </div>	
                <p className="m-3" style={{fontSize: '1.1em'}}>Hello DDU
                    Soo how has life been treating you???
                    Well well we are here now and we are going to give you the most exciting and thrilling night of the year. Because we do deserve a break right ? 
                    On 5th and 6th March cultural night is been organized. It is filled with music, dance, comedy and of course tons of fun. It is a stage which offers exposure to the immense talent of the students. Participants will mesmerize you with their melodies, they will set their feets on fire and make you laugh to the fullest. 
                    Break the monotony and come join us at the dynamic cultural night to pamper ourselves with entertainment entertainment entertainment!
                </p>
            </div>
            </div>
            </div>    
        )
    }
}