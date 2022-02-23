import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from "./Nav"
import Form from "./customer/Form"
import List from "./customer/List"
import Edit from "./customer/Edit"

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class Main extends Component {
  render() {
    return (
        <>
      <Router>
        <main>
          <Nav/>
          <Routes>
            <Route  exact path="/customer/index" 
             element={
                 <List />
                 } />
            <Route path="/customer/form" 
            element={
                <Form />
                } />
            <Route path="/customer/edit/:id" 
            element={
                <Edit />
                } />
            </Routes>
        </main>
      </Router>
      </>
    )
  }
}
// for <div id="main-customer"></div>
ReactDOM.render(<Main />, document.getElementById('main-customer'));