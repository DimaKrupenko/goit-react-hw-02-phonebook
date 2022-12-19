import React from 'react';
import { nanoid } from 'nanoid'


class App extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  }
  nameId= nanoid()
  
  handleChange = (evt) => {
   
      const { name, value } = evt.target;
    

    this.setState(prevState => {
      return {
        [name]: value,
        
      }
    });
    
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
     const form = evt.currentTarget;
   
     
    this.setState((prevState) => {
       return {
        // name: name,
        // number: number,
        // contacts: [name, number ],
         contacts: [prevState.name, prevState.number]
      }
     })
    form.reset()
        this.props.onSubmit({ ...this.state });

  }

  
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <div>
          <h1>PhoneBook</h1>
          <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameId}>Name
              <input
  type="text"
  name="name"
  id={this.nameId}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  onChange={this.handleChange}
  required
              />
            </label>
              <label htmlFor="">Number
            <input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    onChange={this.handleChange}
  required
/>
            <button type='submit' >Add contact</button>
            </label>
            </form>
          <h2>Contacts
            <ul>
              <li>{this.state.contacts}</li>
             

              
            </ul>
          </h2>
      </div>
        
      </div>
    );
  }
};

export default App
