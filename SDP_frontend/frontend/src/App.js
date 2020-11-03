import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './component/layout/Navbar';
import Landing from './component/layout/Landing';
import Register from './component/auth/Register';
import Login from './component/auth/Login';
import Alert from './component/layout/Alert';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import EventList from "./component/event-list";
import Cultural from "./component/cultural-event";
import Profile from "./component/profiles/profile";
import Contact from "./component/contact";
import EventDay1 from "./component/eventday1";
import EventDay2 from "./component/eventday2";
import EventDay3 from "./component/eventday3";
import EventDay4 from "./component/eventday4";
import EventDay5 from "./component/eventday5";
import AdminHome from "./component/adminhome";
import AddEvent from "./component/addevent";
import AdminEvent from "./component/admin";
import EditEvent from "./component/editevent";
import Details from "./component/detailpage";
import Form1 from "./component/form/form1";
import Form2 from "./component/form/form2";
import Form3 from "./component/form/form3";
import Form4 from "./component/form/form4";
import Form5 from "./component/form/form5";
import Form6 from "./component/form/form6";
import Form7 from "./component/form/form7";
import Form8 from "./component/form/form8";
import Payment from "./component/payment";


//Redux
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import { Form } from 'reactstrap';

if(localStorage.token) {
    setAuthToken(localStorage.token);
  }

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </section>
        </Fragment>
        <Route  exact path="/home" component ={EventList}/>
        <Route exact path="/cultural" component ={Cultural}/>
        <Route exact path="/profile/:id" component ={Profile}/>
        <Route exact path="/contact" component ={Contact}/>
        <Route exact path="/day1event" component={EventDay1}/>
        <Route exact path="/day2event" component={EventDay2} />
        <Route exact path="/day3event" component={EventDay3} />
        <Route exact path="/day4event" component={EventDay4} />
        <Route exact path="/day5event" component={EventDay5} />
        <Route exact path="/admin" component={AdminHome} />
        <Route exact path="/admin/addevent" component={AddEvent} />
        <Route exact path="/admin/adminevent" component={AdminEvent} />
        <Route exact path="/editevent/:id" component={EditEvent} />
        <Route exact path="/details/:id" component={Details} />
        <Route exact path="/register1/:id" component={Form1}/>
        <Route exact path="/register2/:id" component={Form2}/>
        <Route exact path="/register3/:id" component={Form3}/>
        <Route exact path="/register4/:id" component={Form4}/>
        <Route exact path="/register5/:id" component={Form5}/>
        <Route exact path="/register6/:id" component={Form6}/>
        <Route exact path="/register7/:id" component={Form7}/>
        <Route exact path="/register8/:id" component={Form8}/>
        <Route exact path="/payment" component={Payment}/>
      </Router>
    </Provider>

  );
};
export default App;