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
const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name + ': ' + contact.number}
          <button type="click" onClick={() => handleDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
