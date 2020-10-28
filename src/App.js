import React from 'react';
import './App.css';
import Card from './components/js/Card';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      todos: []
    }
  }

  renderCard(todo){
    return <Card data={todo}/>
  }

  getDataFromAPI(){
    axios.get('http://localhost:3004/todo')
      .then(res => {
        let data = [...this.state.todos];
        data= res.data;
        this.setState({
          todos: data
        });
      });
  }

  componentDidMount(){
    this.getDataFromAPI();
  }

  render(){
    return (
      <React.Fragment>
        <h1 className='text-center m-4 font-weight-bold app-title'>To Do List</h1>
        {this.state.todos.map(todo => this.renderCard(todo))}
      </React.Fragment>
    );
  }
}

export default App;
