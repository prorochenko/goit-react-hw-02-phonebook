import PropTypes from 'prop-types';
import css from './Contacts.module.css';

const Contacts = ({ list, onDeleteContact }) => {
  return (
    <ul className={css.list}>
      {list.length === 0 ? (
        <li className={css.list__item} id={1}>
          <div className={css.list__box}>
            no <button className={css.list__btn}>Delete</button>
          </div>
        </li>
      ) : (
        list.map(({ item, id }) => (
          <li key={id} className={css.list__item}>
            <p>{item}</p>
            <button
              className={css.list__btn}
              onClick={() => {
                onDeleteContact(id);
              }}
            >
              Delete
            </button>
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
