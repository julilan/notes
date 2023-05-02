import Form from "./components/Form/Form";
import Preview from "./components/Preview/Preview";
import Modal from "./components/Modal/Modal";
import Notes from "./components/Notes/Notes";
import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    showModal: false,
    note: {
      firstname: "",
      lastname: "",
      phone: "",
      role: "",
      message: "",
    },
    data: [],
  };

  modalHandler = (e) => {
    e.preventDefault();
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  changeHandler = (e) => {
    this.setState({
      note: {
        ...this.state.note,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidMount() {
    axios
      .get("http://localhost:4001/notes")
      .then((res) => this.setState({ data: res.data }));

    // fetch("http://localhost:4001/notes")
    //   .then((res) => res.json())
    //   .then((res) => {
    //     this.setState({ data: res });
    //     console.log("data I got from fetch", this.state.data);
    //   });
  }

  submitHandler = () => {
    axios
      .post("http://localhost:4001/notes", this.state.note)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    this.setState({
      showModal: !this.state.showModal,
      note: {
        firstname: "",
        lastname: "",
        phone: "",
        role: "",
        message: "",
      },
    });
    axios
      .get("http://localhost:4001/notes")
      .then((res) => this.setState({ data: res.data }));
  };

  render() {
    return (
      <div className="app">
        <Form submit={this.modalHandler} handler={this.changeHandler} />
        <Preview {...this.state.note} />
        {this.state.showModal && (
          <Modal
            submit={this.submitHandler}
            click={this.modalHandler}
            {...this.state.note}
          />
        )}
        <Notes data={this.state.data} />
      </div>
    );
  }
}

export default App;
