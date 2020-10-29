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

//Redux
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

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
            <Alert />
        </Fragment>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route path="/home" exact component ={EventList}/>
        <Route path="/cultural" component ={Cultural}/>
        <Route path="/profile/:id" component ={Profile}/>
        <Route path="/contact" component ={Contact}/>
        <Route path="/day1event" component={EventDay1}/>
        <Route path="/day2event" component={EventDay2} />
        <Route path="/day3event" component={EventDay3} />
        <Route path="/day4event" component={EventDay4} />
        <Route path="/day5event" component={EventDay5} />
        <Route path="/admin" component={AdminHome} />
        <Route path="/admin/addevent" component={AddEvent} />
        <Route path="/admin/adminevent" component={AdminEvent} />
        <Route path="/editevent/:id" component={EditEvent} />
        <Route path="/details/:id" component={Details} />
      </Router>
    </Provider>

  );
};
export default App;
