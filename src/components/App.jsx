import React, { Component } from 'react';
import Contacts from './Contacts/Contacts';
import Section from './Section/Section';
import Filter from './Filter/Filter';
import css from './CommonStyle.module.css';
import Form from './Form/Form';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = () => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contact),
    }));
  };
  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className={css.container}>
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Filter />
          <Contacts list={contacts} onDeleteContact={this.deleteContact} />
        </Section>
      </div>
    );
  }
}
