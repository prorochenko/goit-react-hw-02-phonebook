import React, { Component } from 'react';
import { InputName, InputNumber } from './Input/input';
import Title from './Title/Title';
import Button from './Button/Button';
import Contacts from './Contacts/Contacts';
import Section from './Section/Section';
import Filter from './Filter/Filter';
import css from './CommonStyle.module.css';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleInputChane = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  deleteContact = contact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contact),
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className={css.container}>
        <Section title="Phonebook">
          <form onSubmit={this.handleSubmit}>
            <Title title="Name">
              <InputName
                name={this.state.name}
                onChange={this.handleInputChane}
              />
            </Title>

            <Title title="Number">
              <InputNumber
                number={this.state.number}
                onChange={this.handleInputChane}
              />
            </Title>
            <Button title="Add contact" />
          </form>
        </Section>
        <Section title="Contacts">
          <Filter />
          <Contacts list={contacts} onDeleteContact={this.deleteContact} />
        </Section>
      </div>
    );
  }
}
