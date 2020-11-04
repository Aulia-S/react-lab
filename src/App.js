import React from 'react';
import './App.css';
import Card from './components/js/Card';
import axios from 'axios';
import Form from './components/js/Form';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      todos: [],
      dataForm: {
        id: null,
        title: '',
        desc: '',
        deadline: '',
      },
      isDataUpdate: false
    }
  }

  renderCard(todo){
    return <Card key={todo.id} data={todo} remove={id => this.handleRemove(id)} update={data => this.handleUpdate(data)}/>
  }

  renderForm(){
    return (
      <Form onChange={(e) => this.handleFormChange(e)} submit={() => this.handleFormSubmit()}  value={this.state.dataForm}/>
    );
  }

  getDataFromAPI(){
    axios.get('http://localhost:3004/todo?_sort=id&_order=desc')
      .then(res => {
        let data = [...this.state.todos];
        data= res.data;
        this.setState({
          todos: data
        });
      });
  }

  postDataToAPI(){
    axios.post('http://localhost:3004/todo', this.state.dataForm);
  }

  deleteDataFromAPI(id){
    axios.delete(`http://localhost:3004/todo/${id}`);
  }

  putDataToAPI(){
    axios.put(`http://localhost:3004/todo/${this.state.dataForm.id}`, this.state.dataForm)
        .then(() => {
          this.setState({isDataUpdate: false});
        });
  }

  handleFormChange(e){
    let dataForm = {...this.state.dataForm};
    dataForm[e.target.name]= e.target.value;
    this.setState({
      dataForm: dataForm
    });
  }

  handleFormSubmit(){
    if(this.state.isDataUpdate){
      this.putDataToAPI();
    }else{
      let dataForm = {...this.state.dataForm};
      const id= new Date().getTime();
      dataForm.id = id;
      this.setState ({
        dataForm: {
          id: dataForm.id
        }
      });
      this.postDataToAPI();
    }
  }

  handleRemove(id){
    this.deleteDataFromAPI(id);
    this.getDataFromAPI();
  }

  handleUpdate(data){
    let dataForm= {...this.state.dataForm};
    dataForm= data;
    this.setState({
      dataForm: dataForm,
      isDataUpdate: true
    });
  }

  componentDidMount(){
    this.getDataFromAPI();
  }

  render(){
    return (
      <React.Fragment>
        <h1 className='text-center m-4 font-weight-bold app-title'>To Do List</h1>
        {this.renderForm()}
        {this.state.todos.map(todo => this.renderCard(todo))}
      </React.Fragment>
    );
  }
}

export default App;
