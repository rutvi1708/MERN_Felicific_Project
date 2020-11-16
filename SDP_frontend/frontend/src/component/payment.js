import React, { Component } from 'react';
import Checkout from './paymentController';
import { connect } from "react-redux"
import img from '../img/payment.jpeg'
class Payment extends Component {
    render() {
        return (
            // <div className="card" style={{textAlign:"center"}}>
            //     <h1>Make Payment</h1>
            //     <br></br>
            //     <Checkout />
            // </div>
            <div className="card mx-auto card-border " style={{width: "20rem"}}>
            <img className="card-img-top " src={img} alt="Card image cap"/>
            <div className="card-body">
              <h2 className="card-title" style={{textAlign:"center",marginBottom:"30px",marginTop:"20px"}}>Make Payment</h2>
              
                <Checkout />
                <br></br>
            </div>
          </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        Amount: state.Amount
    };
};
export default connect(mapStateToProps, null)(Payment);