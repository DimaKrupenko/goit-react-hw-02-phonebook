import React from 'react';
import Form from './Form/Form'
import { nanoid } from 'nanoid';


class App extends React.Component {
  state = {
    contacts: [
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    
  }
  
  contactId = nanoid()
  
  formSubmit = data => {
    // const { name, number, id } = data;
     const contact = {
      id: nanoid(),
      name: data.name, 
      number: data.number
    }
    console.log(contact)
    
    this.setState(prevState => {
          // const { name, number, id } = prevState;
console.log(prevState)
      return {
        contacts: [ contact, ...prevState.contacts  ]
        // contacts: { contact, ...prevState.contacts }
      }
    })
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
          <Form onSubmit={this.formSubmit} />
          <h2>Contacts
            <ul>
              {this.state.contacts.map(contact => (
              <li key={this.contactId}>{this.state.contacts}</li>
            ))}
              {/* <li key={this.contactId}>{this.state.contacts}</li> */}
                          

              
            </ul>
          </h2>
      </div>
        
      </div>
    );
  }
};

export default App
