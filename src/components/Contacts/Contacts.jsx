import PropTypes from 'prop-types';
import css from './Contacts.module.css';

const Contacts = ({ list }) => {
  return (
    <ul>
      <li className={css.list}>{list}</li>
    </ul>
  );
};

Contacts.propTypes = {
  list: PropTypes.array,
};
export default Contacts;
