import css from './ContactsList.module.css';
import ContactsListItem from './ContactsListItem';

const ContactsList = () => {
  return (
    <ul className={css.contactsList}>
      <ContactsListItem />
    </ul>
  );
};

export default ContactsList;
