import React from 'react';
import '../css/About.css';

class About extends React.Component {
  render() {
    return (
      <div className='container'>
        <p className='font-weight-bold my-4'>About App</p>
        <table className='about-info'>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Todo List App</td>
          </tr>
          <tr>
            <td>Author</td>
            <td>Aulia Sabri</td>
          </tr>
          <tr>
            <td>Version</td>
            <td>1.0</td>
          </tr>
        </tbody>
        </table>
      </div>
    )
  }
}

export default About;
