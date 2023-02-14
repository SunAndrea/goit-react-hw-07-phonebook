import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactsForm from './ContactsForm/ContactsForm';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';
import { fetchContacts } from 'redux/operations';
import { getIsLoading, getError } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '480px',
        margin: 'auto',
        background: 'aliceblue',
        padding: '30px',
        boxShadow: '0 4px 4px rgb(0 0 0 / 15%)',
      }}
    >
      {error && window.alert(error)}
      <h1 style={{ marginTop: '0' }}>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <p>Loading...</p>}
      <ContactsList />
    </div>
  );
};
