import PropTypes from 'prop-types';
import css from './Contacts.module.css';

const Contacts = ({ list }) => {
  return (
    <ul>
      {list.length === 0 ? (
        <li>
          no <button className={css.btn}>Delete</button>
        </li>
      ) : (
        list.map(({ one, id }) => (
          <li key={id} className={css.list}>
            <p>{one}</p>
          </li>
        ))
      )}
    </ul>
  );
};

Contacts.propTypes = {
  list: PropTypes.array,
};
export default Contacts;
