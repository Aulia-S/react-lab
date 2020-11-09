import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Card.css';

export class Card extends Component {
  render() {
    return (
      <div className="card mb-3 mx-auto" style={{maxWidth: '540px'}}>
        <div className="row no-gutters">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title"><Link to={`/detail-todo/${this.props.data.id}`} className='title'>{this.props.data.title}</Link></h5>
              <p className="card-text">{this.props.data.desc}</p>
              <p className="card-text"><small className="text-muted">{this.props.data.deadline}</small></p>
            </div>
          </div>
          <div className="col-md-4">
          <div className="card-body">
              <button type="button" className="btn btn-outline-success mr-1" onClick={() => this.props.update(this.props.data)}>Edit</button>
              <button type="button" className="btn btn-outline-danger" onClick={() => this.props.remove(this.props.data.id)}>Delete</button>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;

