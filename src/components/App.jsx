import React from 'react';
import { InputName, InputNumber } from './Input/input';
import Section from './Section/Section';

export default class App extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  render() {
    return (
      <div>
        <Section title="Name">
          <InputName />
        </Section>
        <Section title="Number">
          <InputNumber />
        </Section>
      </div>
    );
  }
}
