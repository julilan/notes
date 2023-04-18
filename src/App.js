import Form from './components/Form/Form';
import Preview from './components/Preview/Preview';
import Modal from './components/Modal/Modal';
import React, { Component } from 'react';

class App extends Component {
  state = {
    showModal: false
  }

  modalHandler = (e) => {
    e.preventDefault();
    
    this.setState({
      showModal: !this.state.showModal
    })
  }

  render() {
    return (
      <div>
      <Form submit={this.modalHandler}/>
      <Preview/>
      {this.state.showModal && <Modal/>}
      </div>
    );
  }
}

export default App;
