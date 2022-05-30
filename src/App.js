import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Section from './Components/Section/Section ';
import Forms from './Components/Form/Forms';
import PhoneList from './Components/PhoneList/PhoneList';
import FilterInput from './Components/FilterInput/FilterInput';
import Modal from './Components/Modal/modal';
import { filter } from './redux/contact/contact-action';

class App extends Component {
  // componentDidMount() {
  //   let sevContact = localStorage.getItem('contact');
  //   let parsedContact = JSON.parse(sevContact);
  //   if (parsedContact) {
  //     this.setState({ contacts: parsedContact });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     let contact = this.state.contacts;
  //     localStorage.setItem('contact', JSON.stringify(contact));
  //   }
  // }

  render() {
    return (
      <div className="box">
        <Section title="Телефонная книга">
          <Forms />
        </Section>
        <Section title="Знайти">
          <FilterInput handleChange={this.props.onChange} value={filter} />
        </Section>
        <Section title="Номера телефонов">
          <PhoneList />
        </Section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.counter.items,
  filter: state.counter.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(filter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
