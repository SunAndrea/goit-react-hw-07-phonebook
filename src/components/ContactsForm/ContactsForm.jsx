import { nanoid } from 'nanoid';

import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import css from './Contacts.module.css';

const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onSubmit = evt => {
    evt.preventDefault();

    const contactsName = contacts.map(contact => {
      return contact.name;
    });
    for (const name of contactsName) {
      if (
        name.toLowerCase().includes(evt.currentTarget.name.value.toLowerCase())
      ) {
        window.alert(name + ' is already in contacts');
        evt.currentTarget.reset();

        return;
      }
    }

    const contact = {
      id: nanoid(),
      name: evt.currentTarget.name.value,
      number: evt.currentTarget.number.value,
    };
    dispatch(addContact(contact));
    evt.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit} className={css.form} action="">
      <label className={css.formLabel}>Name</label>
      <input
        className={css.formInput}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={css.formLabel}>Number</label>
      <input
        className={css.formInput}
        style={{ display: 'block' }}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.formBtn}>add contact</button>
    </form>
  );
};

export default ContactsForm;
