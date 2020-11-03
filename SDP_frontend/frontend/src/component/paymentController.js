import React,  { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from "react-redux";

class Checkout extends Component {

  state = {
    amount: null
  };
componentDidMount() {
  this.setState({amount:localStorage.getItem("amount")})
}
  constructor() {
    super()
    this.openCheckout = this.openCheckout.bind(this);
  }

  

  openCheckout() {
    let options = {
      "key": "rzp_live_9l5GYyl4yGK5Pq",
      "amount": this.state.amount*100, // 2000 paise = INR 20, amount in paisa
      "name": "Pranav",
      "description": "Purchase Description",
      "image": "/your_logo.png",
      "handler": function (response){
        alert(response.razorpay_payment_id);
      },
      "prefill": {
        "name": "Pravnav Joshi",
        "email": "pbjoshi222@gmail.com"
      },
      "notes": {
        "address": "Hello World"
      },
      "theme": {
        "color": "#F37254"
      }
    };
    
    let rzp = new window.Razorpay(options);
    rzp.open();
  }
  
  render () {
    return (
      <div>
        <Button onClick={this.openCheckout}>Pay Rs. {this.state.amount}</Button> 
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    Amount:state.Amount
  };
};
export default connect(mapStateToProps, null)(Checkout);
