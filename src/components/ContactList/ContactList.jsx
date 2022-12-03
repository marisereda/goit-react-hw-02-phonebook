import { Contact } from './Contact/Contact';
export const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <ul>
      {filteredContacts.map(contact => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};
