import React from 'react';
import { InputName, InputNumber } from './Input/input';
import Title from './Title/Title';
import Button from './Button/Button';
import Contacts from './Contacts/Contacts';
import Section from './Section/Section';
import Filter from './Filter/Filter';

export default class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  render() {
    return (
      <div>
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
          <Contacts />
        </Section>
      </div>
    );
  }
}
