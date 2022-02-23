import React, { Component } from 'react'; 
import axios from "axios"
import { Link } from "react-router-dom";



export default class List extends Component {
  constructor()
  {
    super()
    this.state = {
      listCustomer:[]
    }
  }


  componentDidMount()
  {
    var self= this;
    console.log('mounted')
    axios.get("http://localhost:8080/api/customer/list")
    .then(response=>{
      //console.log(response.data);
      self.setState({listCustomer:response.data.data});
    })
    .catch(error=>{
      alert("Error ==>"+error)
    })
  }

  render() {
    return (
      <section>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.listCustomer?.map((data)=>{
                console.log('eeeeeee')
                return(
                  <tr>
                    
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.address}</td>
                    <td>{data.phone}</td>
                    <td>
                      <Link class="btn btn-outline-info" to={"/customer/edit/"+data.id}>Edit</Link>
                      <a href="#" class="btn btn-danger"> Delete </a>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </section>
    )
  }
}