import { AiFillDelete } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';

import css from './ContactsList.module.css';
const ContactsListItem = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const filterValue = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );
  return filteredContacts.map(({ id, name, number }) => {
    return (
      <li className={css.item} key={id}>
        {name}: <span className={css.itemNumber}> {number} </span>
        <button
          onClick={() => dispatch(deleteContact(id))}
          className={css.deleteBtn}
          type="button"
        >
          <AiFillDelete color="red" />
        </button>
      </li>
    );
  });
};

export default ContactsListItem;
