import React, { Component } from 'react';
import axios from "axios"


export default class Form extends Component {

  onClickSave()
  {
    const baseUrl = "http://localhost:8080/api/customer/create"

    const datapost = {
      name : this.state.fieldName,
      email : this.state.fieldEmail,
      phone : this.state.fieldPhone,
      address : this.state.fieldAddress
    }

    console.log(datapost);

    axios.post(baseUrl,datapost)
    .then(response=>{
      alert(response.data.message)
    }).catch(error=>{
      alert("Error 500 "+error)
    })
  }
  
  constructor(){
    super();
    this.state = {
      fieldName:"",
      fieldEmail:"",
      fieldAddress:"",
      fieldPhone:""
    }
  }
  render() {
    return (
      <div>
      <h4>Create customer</h4>
      <hr/>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="firstName">Name customer {this.state.fieldName}</label>
            <input type="text" class="form-control" placeholder="Name"
            value={this.state.fieldName}
            onChange={(value)=> this.setState({fieldName:value.target.value})}/>
          </div>
        </div>

				<div class="row">
          <div class="col-md-6 mb-3">
						<label for="email">Email</label>
	          <input type="email" class="form-control" placeholder="you@example.com"
            value={this.state.fieldEmail}
            onChange={(value)=> this.setState({fieldEmail:value.target.value})} />
          </div>
        </div>

				<div class="row">
          <div class="col-md-6 mb-3">
						<label for="address">Address</label>
	          <input type="text" class="form-control" placeholder="1234 Main St"
            value={this.state.fieldAddress}
            onChange={(value)=> this.setState({fieldAddress:value.target.value})}/>
          </div>
        </div>

				<div class="row">
          <div class="col-md-6 mb-3">
						<label for="phone">Phone </label>
	          <input type="text" class="form-control" placeholder="123467890"
            value={this.state.fieldPhone}
            onChange={(value)=> this.setState({fieldPhone:value.target.value})}/>
          </div>
        </div>

				<div class="row">
					<div class="col-md-6 mb-3">
		      	<button class="btn btn-primary btn-block" type="submit" onClick={()=>this.onClickSave()}>Save</button>
					</div>
				</div>
      </div>
    )
  }
}