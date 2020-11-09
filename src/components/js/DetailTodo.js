import React from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';

class DetailTodo extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      data: {
        id: '',
        title: '',
        desc: '',
        deadline: ''
      }
    }
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    axios.get(`http://localhost:3004/todo/${id}`)
      .then(res => {
        let data = {...this.state.data};
        data = res.data
        this.setState({
          data: data
        });
      });
  }

  render(){
    const data= this.state.data;
    return (
      <div className="container">
        <h1>{data.title}</h1>
        <p>{data.deadline}</p>
        <p>{data.desc}</p>
      </div>
    );
  }
}

export default withRouter(DetailTodo);
