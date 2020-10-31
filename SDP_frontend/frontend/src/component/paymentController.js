import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
//import { API } from "../../../../SDP_backend/routes/api";
import { Redirect } from "react-router";

class CheckOut extends React.Component {
  constructor() {
    super();
    this.openCheckout = this.openCheckout.bind(this);
  }
  state = {
    userId: "",
    token: "",
  };
  componentDidMount() {
    const data = JSON.parse(localStorage.getItem("token"));
    console.log(data);
    this.setState({ userId: data.user._id });
    this.setState({ token: data.token });
  }

  openCheckout(history,userId,emptyCart, token,onlinePaymentOrderBody) {
    let options = {
      key: "rzp_test_ldJZM3zfK5SRfV",
      amount: this.props.total * 100, // 2000 paise = INR 20, amount in paisa
      name: "Pavan Joshi",
      description: "Purchase Description",
      image: "../img/ddulogo.png",
      handler: function (response) {
        console.log(JSON.stringify({
          ...onlinePaymentOrderBody.Order,
          transaction_id: response.razorpay_payment_id,
        }));
        if (response) {
          fetch( {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              Order:{...onlinePaymentOrderBody.Order,
              transaction_id: response.razorpay_payment_id,
            payment:"PAID"}
            }),
          })
            .then((response) => {
              console.log(response);
              alert("order placed Successfully")
              emptyCart()
              return (
                <Redirect to="/home"/>
              )
              
            })
            .catch((err) => console.log(err));
        }
              alert("order placed Successfully")
              emptyCart()
              return (
                <Redirect to="/home"/>
              )
      },
      prefill: {
        name: "Pavan Joshi",
        email: "pbjoshi222@gmail.com",
        Number: "9427855633",
        address: "",
      },
      notes: {
        address: "",
      },
      theme: {
        color: "#F37254",
      },
    };

    let rzp = new window.Razorpay(options);
    rzp.open();
  }

  render() {
    const {userId, token} =this.state
    const {onlinePaymentOrderBody, emptyCart,history} = this.props
    return (
      <div>
        <button class="block amber accent-3 center" onClick={()=>this.openCheckout(history,userId,emptyCart,token,onlinePaymentOrderBody)}>
          Pay Rs. {this.props.total}
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    onlinePaymentOrderBody: state.auth.onlinePaymentOrderBody,
  };
};
const mapDispatchToProps = dispatch => {
  return{
    emptyCart: () => dispatch({type:'CART_EMPTY'}),
 
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CheckOut);
