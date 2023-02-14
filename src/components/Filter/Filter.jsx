import { useDispatch } from 'react-redux';
import { onFilter } from 'redux/filterSlice';
import css from './Filter.module.css';
const Filter = () => {
  const dispatch = useDispatch();

  const onChange = evt => {
    dispatch(onFilter(evt.target.value));
  };

  return (
    <>
      <label className={css.label}>
        Find contacts by name
        <input
          onChange={onChange}
          className={css.input}
          type="text"
          name="filter"
        />
      </label>
    </>
  );
};

export default Filter;
