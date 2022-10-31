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

  render() {
    const { contacts } = this.state;
    return (
      <div className={css.container}>
        <Section title="Phonebook">
          <Title title="Name">
            <InputName />
          </Title>

          <Title title="Number">
            <InputNumber />
          </Title>

          <Button title="Add contact" />
        </Section>
        <Section title="Contacts">
          <Filter />
          <Contacts list={contacts} />
        </Section>
      </div>
    );
  }
}
