// import React from 'react';

// class ContactList extends React.Component {
//   render() {
//     return (
//       <ul>
//         {this.state.contacts.map(contact => (
//           <li key={contact.id}>{contact.name + ': ' + contact.number}</li>
//         ))}
//       </ul>
//     );
//   }
// }
const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>{contact.name + ': ' + contact.number}</li>
      ))}
    </ul>
  );
};

export default ContactList;
