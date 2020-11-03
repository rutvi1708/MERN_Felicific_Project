import React,  { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import  { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
//import Form3 from './form3';
import img from '../img/back2.jpg'


  class Detailpage extends Component{
 
    constructor(props) {
        super(props);
        this.check= this.check.bind(this);
   this.state={
     _id:'',
      eventname:'',
      time:'',
      date: new Date(),
      location:'',
      contact_details:'',
      description:'',
      amount:'',
      req_participant:1,
      redirect1:false,
      redirect2:false,
      redirect3:false,
      redirect4:false,
      redirect5:false,
      redirect6:false,
      redirect7:false,
      redirect8:false
   };
  // this.rowCallback= this.rowCallback.bind(this);
      //  this.state = {events: []};
       
    }

    componentDidMount() {
        axios.get('http://localhost:5000/routes/event/'+this.props.match.params.id)
        
          .then(response => {
          
            this.setState({ 
              _id:response.data._id,
              eventname: response.data.eventname,
              time: response.data.time,
              date: response.data.date,
              location : response.data.location,
              contact_details: response.data.contact_details,
              description: response.data.description,
              amount:response.data.amount,
              req_participant:response.data.req_participant,
             })
            this.props.addAmount(response.data.amount)
          })
          .catch((error) => {
            console.log(error);
          })
      }
      check(ereq_part) {
        console.log(ereq_part)
       if (ereq_part === 3 )
       {
      this.setState({ redirect3:true})  
       }
       if (ereq_part === 1 )
       {
      this.setState({ redirect1:true})  
       }
      if (ereq_part === 2 )
       {
      this.setState({ redirect2:true})  
       }
     if (ereq_part === 4 )
       {
      this.setState({ redirect4:true})  
       }
     if (ereq_part === 5 )
       {
      this.setState({ redirect5:true})  
       }
     if (ereq_part === 6 )
       {
      this.setState({ redirect6:true})  
       }
     if (ereq_part === 7 )
       {
      this.setState({ redirect7:true})  
       }
    if (ereq_part === 8 )
       {
      this.setState({ redirect8:true})  
       }
     } 

       
     renderRedirect = () => {
       if (this.state.redirect1){
         return <Redirect to={`/register1/${this.props.match.params.id}`}/>
       }
      if (this.state.redirect2) {
        return <Redirect to={`/register2/${this.props.match.params.id}` }/>
      }
      if (this.state.redirect3) {
        return <Redirect to={`/register3/${this.props.match.params.id}` }/>
      }
      if (this.state.redirect4) {
        return <Redirect to={`/register4/${this.props.match.params.id}` }/>
      }
      if (this.state.redirect5) {
        return <Redirect to={`/register5/${this.props.match.params.id}` }/>
      }
      if (this.state.redirect6) {
        return <Redirect to={`/register6/${this.props.match.params.id}` }/>
      }
      if (this.state.redirect7) {
        return <Redirect to={`/register7/${this.props.match.params.id}` }/>
      }
      if (this.state.redirect8) {
        return <Redirect to={`/register8/${this.props.match.params.id}` }/>
      }
    }

    
 //  eventList() {
      //  return this.state.event{
   //  return <Event key={this.props._id}/>;
       //   }
       // })
    //  }
    render(){
      let id = this.props.match.params.id;
      console.log(id);
      const ename = this.state.eventname;
      const etime =this.state.time;
      const edate= this.state.date;
      const ereq_part =this.state.req_participant;
      const data = {ename,etime,edate};
      
  
   
  //    <Form3 ename={this.state.eventname}/>
    //let dataevent=[{this.state.eventname,time,date}]
        return (
      
            
            <div >
            
            {/* <table className="table  ">
              <thead className="table-info">
               
                  
                  <tr>CONTACT DETAILS  </tr>  
                     <td>  <tr>{this.state.contact_details}</tr>   </td>

                  <tr>DESCRIPTION</tr>
                     <td>   <tr>{this.state.description}</tr>   </td>
                  <tr>AMOUNT</tr>
                      <td>  <tr>{this.state.amount}</tr></td>
                  <tr>REQUIRED PARTICIPANTS</tr>
                   <td>  <tr>{this.state.req_participant}</tr></td>
                
          
           
              </thead>
         
            </table> */}
            <div className="row">
              <div className="col mx-auto">
                  <img className="card-img-top" style={{padding:'40px'}} src={img} alt="Card image cap"/>
              </div>
              <div className="col">
                    <h1>{this.state.eventname}</h1>
                    <br></br>
                    <h3>Contact Details</h3>
                    <h5 style={{marginBottom:'40px'}}>{this.state.contact_details}</h5>
                  
                    <h3>Description</h3>
                    <h5 style={{marginBottom:'40px'}}>{this.state.description}</h5>
                  
                    <div className="row" style={{textAlign:"center",marginLeft:'4px'}}>

                    <h3>Amount:</h3>
                    <h5 style={{marginTop:"7px",marginLeft:'6px'}}> {this.state.amount} ₹</h5>

                    <h3 style={{marginLeft:'50px'}}>Required participants:</h3>
                    <h5 style={{marginTop:"7px",marginLeft:'6px'}}>{this.state.req_participant}</h5>

                    </div>
                    
                    <div style={{marginTop:"20px"}} >
                        <Button  type="button" className="btn btn-dark btn-lg" style={{width:"20%"}} onClick={()=>this.check(ereq_part)}> Register </Button>
                    </div>
              </div>
            </div>
           { console.log(data) } 
          
           {this.renderRedirect()}
            
           

          </div>  
       
        );
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
     addAmount: (Amount) => dispatch({ type: "ADD_AMOUNT", payload:Amount }),
    };
  };
  export default connect(null, mapDispatchToProps)(Detailpage);
