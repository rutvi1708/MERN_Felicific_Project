import React,  { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from "react-redux";
import { unirest } from "unirest";
import axios from 'axios';
class Checkout extends Component {

 
componentDidMount() {
 // console.log(localStorage.getItem("bookevent"));
  //this.setState({token:localStorage.getItem("token")})
  this.setState({amount:localStorage.getItem("amount")})
 this.setState({bookevent:JSON.parse(localStorage.getItem("bookevent"))})
}
  constructor(props) {
    
    super(props);
    this.state = {
      amount: null,
      bookevent:null,
    };
    this.openCheckout = this.openCheckout.bind(this);
  }

  
  
  openCheckout() {
  
    const book = this.state.bookevent;
   // console.log(book.token);
    let options = {
      "key": "rzp_test_FsJnLD1c8bhlbs",
      "amount": this.state.amount*100, // 2000 paise = INR 20, amount in paisa
      "name": "Pavan Joshi",
      "description": "Purchase Description",
      "image": "../img/ddulogo.png",
      "handler": function (response){
        //alert(response.razorpay_payment_id);
        //console.log(book);   
        
        axios.post('http://localhost:5000/routes/bookevent/book', book)
        .then(res => console.log(res.data))

         window.location = '/home';



      },
      "prefill": {
        "name": "Pavan Joshi",
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
      <div className="col" style={{textAlign:"center"
      }}>
        <Button className="button btn-dark"  onClick={this.openCheckout}>Pay Rs. {this.state.amount}</Button> 
      </div>
    )
  }
}
const mapStateToProps = (state) => {
 // console.log(state)
  return {
    Amount:state.Amount
  };
};
export default connect(mapStateToProps, null)(Checkout);
