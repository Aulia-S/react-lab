import React, { Component } from 'react';
import '../css/Form.css';

class Form extends Component {
  render() {
    const data = this.props.value;
    return (
      <form className="card mb-3 mx-auto p-2 text-white bg-dark" style={{maxWidth: '540px'}} autoComplete='off' >
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Title</label>
          <input type="text" value={data.title}className="form-control" id="exampleFormControlInput1" placeholder="Title here" name='title' onChange={(e) => this.props.onChange(e)} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Description</label>
          <textarea className="form-control" value={data.desc} id="exampleFormControlTextarea1" rows="3" placeholder='Description here' name='desc' onChange={(e) => this.props.onChange(e)}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput2">Deadline</label>
          <input type="datetime-local" value={data.deadline} className="form-control" id="exampleFormControlInput2" name='deadline' onChange={(e) => this.props.onChange(e)} />
        </div>
        <button type="submit" className="btn btn-primary ml-auto text-white" onClick={() => this.props.submit()}>Submit</button>
      </form>
    )
  }
}

export default Form;
