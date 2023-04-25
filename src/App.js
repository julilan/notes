import Form from './components/Form/Form';
import Preview from './components/Preview/Preview';
import Modal from './components/Modal/Modal';
import React, { Component } from 'react';

class App extends Component {
  state = {
    showModal: false,
    firstname: "",
    lastname: "",
    phone: "",
    role: "",
    message: ""
  }

  modalHandler = (e) => {
    e.preventDefault();
    this.setState({
      showModal: !this.state.showModal
    })
  }

  // changeHandler = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className='app'>
        <Form submit={this.modalHandler} handler={this.changeHandler}/>
        <Preview {...this.state}/>
        {this.state.showModal && <Modal 
        click={this.modalHandler}{...this.state}
        />}
      </div>
    );
  }
}

export default App;
