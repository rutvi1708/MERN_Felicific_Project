import React,  { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Payment extends Component{
    render(){
        return (
            <div>
               <p>Make Payment</p>
                    <Link to ="/paymentController"><Button size="lg"  color="dark">Proceed to Pay</Button></Link>
             </div>    
        )
    }
}