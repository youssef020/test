import React from 'react'
import { useParams } from 'react-router-dom'

const Edit = () => {
  const {id}=useParams()
  return (
    <div>
      <h4>Edit user {id}</h4>
      <hr />
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="firstName">Name customer</label>
          <input type="text" class="form-control"/>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="email">Email</label>
          <input type="email" class="form-control" placeholder="you@example.com" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="address">Address</label>
          <input type="text" class="form-control" placeholder="1234 Main St" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="address">Phone </label>
          <input type="text" class="form-control" placeholder="123467890" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <button class="btn btn-primary btn-block" type="submit">Save</button>
        </div>
      </div>
    </div>
  )
}

export default Edit;