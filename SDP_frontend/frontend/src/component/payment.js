import React, { Component } from 'react';
import Checkout from './paymentController';
import { connect } from "react-redux"
class Payment extends Component {
    render() {
        return (
            <div>
                <p>Make Payment</p>
                <Checkout />
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
