import React, { Component } from 'react';
import { InputName, InputNumber } from '../Input/input';
import Title from '../Title/Title';
import Button from '../Button/Button';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChane = event => {
    const { name, value } = event.currentTarget;
    console.log(value);
    this.setState({
      [name]: value,
    });
  };

  deleteContact = contact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contact),
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Title title="Name">
          <InputName name={this.state.name} onChange={this.handleInputChane} />
        </Title>

        <Title title="Number">
          <InputNumber
            number={this.state.number}
            onChange={this.handleInputChane}
          />
        </Title>
        <Button title="Add contact" />
      </form>
    );
  }
}
